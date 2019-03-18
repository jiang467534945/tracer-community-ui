
<template>
  <div>
    <basic-container>
      <avue-crud :option="tableOption"
                 :data="tableData"
                 :table-loading="tableLoading"
                 :page="page"
                 ref="crud"
                 @current-change="handleCurrentChange"
                 @row-save="handleSave"
                 @row-update="handleUpdate"
                 @row-del="handleDel">
        <template slot-scope="scope" slot="menuLeft">
          <el-button type="primary"  size="small"   icon="el-icon-add"
                     @click.stop="handleAdd()"   v-if="permission.sys_role_add" >新增</el-button>
        </template>
        <template slot-scope="scope" slot="menu"  >
          <el-button type="primary"
                     icon="el-icon-view"
                     size="small"
                     @click.stop="handleView(scope.row,scope.index)">查看</el-button>
          <el-button type="primary"
                     icon="el-icon-edit"
                     size="small"
                     @click.stop="handleEdit(scope.row,scope.index)" v-if="permission.sys_role_edit" >编辑</el-button>
          <el-button type="danger"
                     icon="el-icon-delete"
                     size="small"
                     @click.stop="handleDel(scope.row,scope.index)" v-if="permission.sys_role_del" >删除</el-button>
          <el-button type="info"
                     icon="el-icon-delete"
                     size="small"
                     @click="handlePermission(scope.row)" v-if="permission.sys_role_perm" >授权</el-button>

        </template>
        <template slot-scope="scope"
                  slot="state">
          <el-tag :type="scope.row.state==0?'success':'danger'">{{findByvalue(scope.dic,scope.row.state)}}</el-tag>
        </template>

      </avue-crud>
    </basic-container>
    <el-dialog  title="提示"  :visible.sync="dialogPermissionVisible">
      <el-tree class="filter-tree" :data="treeData" :default-checked-keys="checkedKeys" check-strictly node-key="id" highlight-current :props="defaultProps" show-checkbox ref="menuTree" :filter-node-method="filterNode" default-expand-all>
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updatePermession(roleId, roleCode)">更 新</el-button>
      </div>
    </el-dialog>
    .</div>
</template>

<script>
    import { mapGetters } from "vuex";
    import { roleOption } from "@/const/admin/role/adminRoleTableOption.js";
    import {GetRolePage,add,del,edit,fetchRoleTree,permissionUpd} from '@/api/role/role';
    import { permessionTree } from "@/api/menu/menu";

    export default {
        name: "role",
        components: {},
        data () {
            return {
                tableOption: roleOption, //表格设置属性
                tableData: [], //表格的数据
                tablePage: 1,
                tableLoading: false,
                dialogPermissionVisible: false,
                defaultProps: {
                    children: "children",
                    label: "name"
                },
                page: {
                    total: 10, //总页数
                    currentPage: 1, //当前页数
                    pageSize: 10 //每页显示多少条
                },
                dialogStatus: "",
                treeData:[],
                checkedKeys: [],
                roleId:'',
                roleCode:'',
                textMap: {
                    update: "编辑",
                    create: "创建",
                    permission: "分配权限"
                },
                grade: {
                    box: false,
                    check: []
                }
            };
        },
        created () {
            this.handleList();
        },
        watch: {},
        mounted () { },
        computed: {
            ...mapGetters(["permission", "menuAll"])
        },
        props: [],
        methods: {
            /**
             * @title 获取字典
             * @detail 调用crud的findByvalue方法即可
             *
             **/
            findByvalue (dic, value) {
                return this.$refs.crud.findByvalue(dic, value);
            },
            /**
             * @title 打开新增窗口
             * @detail 调用crud的handleadd方法即可
             *
             **/
            handleAdd () {
                this.$refs.crud.rowAdd();
            },
            /**
             * @title 打开查看窗口
             * @detail 调用crud的handleview方法即可
             *
             **/
            handleView (row, index) {
                this.$refs.crud.rowView(row, index);
            },
            /**
             * @title 打开修改窗口
             * @detail 调用crud的handleEdit方法即可
             *
             **/
            handleEdit (row, index) {
                this.$refs.crud.rowEdit(row, index);
            },
            /**
             * @title 获取数据
             * @detail 赋值为tableData表格即可
             *
             **/
            handleList () {
                this.tableLoading = true;
                GetRolePage({
                    current: `${this.page.currentPage}`
                }).then(res => {
                    setTimeout(() => {
                        const data = res.data;
                        this.tableData = data.data.records;
                        this.page = {
                            total: data.data.total,
                            pageSize: data.data.size,
                            currentPage:data.data.current,
                        };
                        this.tableLoading = false;
                    }, 1000);
                })
            },
            handleCurrentChange(val){
                this.handleList();
                this.tablePage =val;

            },
            /**
             * @title 数据添加
             * @param row 为当前的数据
             * @param done 为表单关闭函数
             *
             **/
            handleSave (row, done) {
                add(row).then(res => {
                    this.handleList();

                    this.$message({
                        showClose: true,
                        message: "添加成功",
                        type: "success"
                    });
                    done();
                })
            },
            /**
             * @title 数据删除
             * @param row 为当前的数据
             * @param index 为当前更新数据的行数
             *
             **/
            handleDel (row) {
                this.$confirm(`是否确认删除序号为${row.roleName}`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                    .then(() => {
                        del(row.id).then(res => {
                            this.handleList();
                            this.$message({
                                showClose: true,
                                message: "删除成功",
                                type: "success"
                            });
                        })
                    })
                    .catch(() => { });
            },
            /**
             * @title 数据更新
             * @param row 为当前的数据
             * @param index 为当前更新数据的行数
             * @param done 为表单关闭函数
             *
             **/
            handleUpdate (row, index, done) {
                edit(row).then(res => {
                    this.handleList();
                    this.$message({
                        showClose: true,
                        message: "修改成功",
                        type: "success"
                    });
                })
                done();
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            handlePermission(row) {
                fetchRoleTree(row.roleCode)
                    .then(response => {
                        this.checkedKeys = response.data.data;
                        return permessionTree();
                    })
                    .then(response => {
                        this.treeData = response.data.data;
                        this.dialogStatus = "permission";
                        this.dialogPermissionVisible = true;
                        this.roleId = row.id;
                        this.roleCode = row.roleCode;
                    });
            },
            updatePermession(roleId, roleCode) {
                permissionUpd(roleId, this.$refs.menuTree.getCheckedKeys().join(',')).then(() => {
                    this.dialogPermissionVisible = false;
                    permessionTree()
                        .then(response => {
                            this.treeData = response.data.data;
                            return fetchRoleTree(roleCode);
                        })
                        .then(response => {
                            this.checkedKeys = response.data.data;
                            this.$notify({
                                title: "成功",
                                message: "修改成功",
                                type: "success",
                                duration: 2000
                            });
                        });
                });
            },
        }
    };
</script>

<style lang="scss" scoped>
  .table-container {
    padding: 8px 10px;
  }
</style>
