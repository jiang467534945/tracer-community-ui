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
          <el-button type="primary"  size="small"            icon="el-icon-add"
                     @click.stop="handleAdd()">新增</el-button>
        </template>
        <template slot-scope="scope" slot="menu"  >
          <el-button type="primary"
                     icon="el-icon-edit"
                     size="small"
                     @click.stop="handleEdit(scope.row,scope.index)">编辑</el-button>
          <el-button type="danger"
                     icon="el-icon-delete"
                     size="small"
                     @click.stop="handleDel(scope.row,scope.index)">删除</el-button>
          <el-button type="primary"
                     icon="el-icon-view"
                     size="small"
                     @click.stop="handleView(scope.row,scope.index)">查看</el-button>
        </template>
        <template slot-scope="scope"
                  slot="state">
          <el-tag :type="scope.row.state==0?'success':'danger'">{{findByvalue(scope.dic,scope.row.state)}}</el-tag>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
    import {getPageList,add,edit,del} from '@/api/iot/IotEquAlarm/IotEquAlarm';
    import { mapGetters } from "vuex";
    import { iotEquAlarmOption } from "@/const/iot/IotEquAlarm/IotEquAlarmTableOption.js";
    export default {
        name: "IotEquAlarm",
        components: {},
        data () {
            return {
                tableOption: iotEquAlarmOption, //表格设置属性
                tableData: [], //表格的数据
                tableLoading: false,
                tabelObj: {},
                page: {
                    total: 10, //总页数
                    currentPage: 1, //当前页数
                    pageSize: 10 //每页显示多少条
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
                getPageList({current: this.page.currentPage,size: this.page.pageSize}).then(res => {
                    setTimeout(() => {
                        this.tableData = res.data.data.records;
                        this.page = {
                            total: res.data.data.total,
                            pageSize: res.data.data.size,
                        };
                        this.tableLoading = false;
                    }, 1000);
                });

            },
            handleCurrentChange(val){
                this.page.currentPage=val;
                this.handleList();

            },
            /**
             * @title 数据添加
             * @param row 为当前的数据
             * @param done 为表单关闭函数
             *
             **/
            handleSave (row, done) {
                add(row).then(res => {
                    this.page.currentPage=1;
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
            handleDel (row, index) {
                this.$confirm(`是否确认删除序号为${row.$index+1}的数据`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                    .then(() => {
                                   del(row.id).then(res => {
                                                  this.page.currentPage=1;
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
                    this.page.currentPage=1;
                    this.handleList();
                    this.$message({
                        showClose: true,
                        message: "修改成功",
                        type: "success"
                    });
                    done();
                })
            }
        }
    };
</script>

<style lang="scss" scoped>
  .table-container {
    padding: 8px 10px;
  }
</style>
