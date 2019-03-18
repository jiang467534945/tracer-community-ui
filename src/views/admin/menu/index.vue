<template>
    <div>
        <basic-container>
            <el-container>
                <el-header class="menu-header">
                    <el-button-group>
                        <el-button type="primary"
                                   icon="el-icon-plus"
                                   size="small"
                                   @click.native="handleAdd"
                                   v-if="permission.sys_menu_add">新增
                        </el-button>
                        <el-button type="primary"
                                   icon="el-icon-edit"
                                   size="small"
                                   @click.native="handleEdit"
                                   v-if="permission.sys_menu_edit">编辑
                        </el-button>
                        <el-button type="primary"
                                   icon="el-icon-delete"
                                   size="small"
                                   @click.native="handleDel"
                                   v-if="permission.sys_menu_del">删除
                        </el-button>
                    </el-button-group>
                </el-header>
            </el-container>
            <el-container>
                <el-aside width="300px">
                    <el-tree :data="menuData"
                             node-key="id"
                             highlight-current
                             default-expand-all
                             :expand-on-click-node="false"
                             @node-click="handleNodeClick"></el-tree>
                </el-aside>
                <el-main>
                    <el-form ref="parentForm"
                             :model="parentForm"
                             label-width="80px" :rules="rules">
                        <el-form-item label="父节点ID">
                            <el-input v-model="parentForm.parentId"
                                      :disabled="true"></el-input>
                        </el-form-item>
                        <!--<el-form-item  label="菜单等级" prop="type">-->
                            <!--<el-select class="filter-item" v-model="parentForm.type" :disabled="formGrade"-->
                                       <!--placeholder="请选择菜单等级" >-->
                                <!--<el-option v-for="item in  menuTypeOptions" :key="item" :label="item"-->
                                           <!--:value="item" @click.native="checkType(item)"></el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                        <el-form-item label="权限标识" prop="permission"  v-if="menuToTwo">
                            <el-input v-model="parentForm.permission"
                                      :disabled="formGrade" placeholder="前端权限标识如：sys_role_add"></el-input>
                        </el-form-item>
                        <el-form-item label="菜单名称" prop="name" >
                            <el-input v-model="parentForm.name"
                                      :disabled="formGrade" placeholder="菜单名称如：会员管理"></el-input>
                        </el-form-item>
                        <el-form-item label="菜单图标" prop="icon" v-if="menuToOne">
                            <el-input v-model="parentForm.icon"
                                      :disabled="formGrade" placeholder="阿里icon图标代码"></el-input>
                        </el-form-item>
                        <el-form-item label="前端路径" prop="component"  v-if="menuToOne">
                            <el-input v-model="parentForm.component"
                                      :disabled="formGrade" placeholder="前端访问地址如：views/admin/user/index"></el-input>
                        </el-form-item>
                        <el-form-item label="模块代码" prop="path" v-if="menuToOne">
                            <el-input v-model="parentForm.path"
                                      :disabled="formGrade" placeholder="前端模块地址如：admin，user "></el-input>
                        </el-form-item>
                        <el-form-item label="请求方法"  v-if="menuToTwo">
                            <el-select class="filter-item" v-model="parentForm.method" :disabled="formGrade"
                                       placeholder="请输入资源请求类型">
                                <el-option v-for="item in  methodOptions" :key="item" :label="item"
                                           :value="item"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="排序">
                            <el-input v-model="parentForm.sort" :disabled="formGrade" placeholder="请输入排序"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary"
                                       @click="create"
                                       :disabled="formGrade"
                                       v-if="formStatus=='add'">新增
                            </el-button>
                            <el-button type="primary"
                                       @click="edit"
                                       :disabled="formGrade"
                                       v-if="formStatus=='edit'">修改
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-main>
            </el-container>
        </basic-container>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {validatenull} from "@/util/validate";
    import {fetchMenuTree, getObj, addMenu,editMenu,delMenu} from '@/api/menu/menu';

    export default {
        name: "menu",
        data() {

            return {
                menuToOne:true,
                menuToTwo:false,
                menuType:1,
            form: {
                    permission: undefined,
                    name: undefined,
                    parentId: undefined,
                    url: undefined,
                    icon: undefined,
                    sort: undefined,
                    component: undefined,
                    type: undefined,
                    method: undefined,
                    path: undefined
                },

                obj: {},
                menuData: [],
                parentForm: {
                    permission: undefined,
                    name: undefined,
                    parentId: undefined,
                    url: undefined,
                    icon: undefined,
                    sort: undefined,
                    component: undefined,
                    type: undefined,
                    method: undefined,
                    path: undefined

                },
                typeGrade: true,
                formGrade: true,
                typeToGrade: true,
                formStatus: "",
                currentId: "-1",
                methodOptions: ['GET', 'POST', 'PUT', 'DELETE'],
                menuTypeOptions: ['0', '1'],
                rules: {
                    permission: [
                        {
                            required: true,
                            message: "权限名称不允许为空",
                            trigger: "blur"
                        }
                    ],
                    name: [
                        {
                            required: true,
                            message: "菜单名称不允许为空",
                            trigger: "blur"
                        }
                    ],
                    url: [
                        {
                            required: true,
                            message: "后台请求路径不允许为空",
                            trigger: "blur"
                        }
                    ],
                    icon: [
                        {
                            required: true,
                            message: "菜单图标路径，不允许为空",
                            trigger: "blur"
                        }
                    ],
                    component: [
                        {
                            required: true,
                            message: "前端模块组建不允许为空",
                            trigger: "blur"
                        }
                    ],
                    method: [
                        {
                            required: true,
                            message: "后端方法不允许为空",
                            trigger: "blur"
                        }
                    ],
                    path: [
                        {
                            required: true,
                            message: "后端模块名不允许为空",
                            trigger: "blur"
                        }
                    ],
                },
            };
        },
        created() {
            this.handleList()

        },
        mounted() {
        },
        computed: {
            ...mapGetters(["permission", "menuAll"])
        },
        props: [],
        methods: {
            /**
             * @title 获取数据
             * @detail 赋值为tableData表格即可
             *
             **/
            handleList() {
                fetchMenuTree().then(res => {
                    this.menuData = res.data.data;

                })

            },
            handleNodeClick(data) {
                getObj(data.id).then(res => {
                    this.parentForm = res.data.data;
                    this.resetType(res.data.data.type);
                });
                this.currentId = data.id;
                this.formGrade = true;
                this.typeToGrade = true;
                this.formStatus = "";


            },
            handleAdd() {
                this.addResetType(this.parentForm.type);
                this.resetForm();
                this.formGrade = false;
                this.formStatus = "add";
                this.form = {};
            },
            handleEdit(data) {
                if (validatenull(data)) {
                    this.$message({
                        showClose: true,
                        message: "请选择菜单",
                        type: "warning"
                    });
                    return false;
                }
                this.formGrade = false;
                this.resetType(this.parentForm.type);
                this.formStatus = "edit";
            },
            handleDel() {
                this.$confirm(`是否确认删除名称为${this.parentForm.name}`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                })
                    .then(() => {
                        delMenu(this.parentForm.id).then(res => {
                            this.handleList();

                            this.$message({
                                showClose: true,
                                message: "删除成功",
                                type: "success"
                            });
                        });
                    })
                    .catch(() => {
                    });
            },
            resetForm() {
                this.parentForm = {
                    permission: undefined,
                    name: undefined,
                    menuId: undefined,
                    parentId: this.currentId,
                    url: undefined,
                    icon: undefined,
                    sort: undefined,
                    component: undefined,
                    type: this.menuType,
                    method: undefined,
                    path: undefined
                }
            },
            create() {
                if (this.parentForm.parentId == "") {
                    this.parentForm.parentId = "0";
                }
                if(this.parentForm.type=="1"||this.parentForm.type=="2"){
                    this.parentForm.permission="0";
                    this.parentForm.url="0";
                    this.parentForm.method="0";
                }else{
                    this.parentForm.icon="0";
                    this.parentForm.path="0";
                    this.parentForm.component="0";
                }
                this.$refs['parentForm'].validate((valid) => {
                    if (valid) {      //在验证通过时时不返回callback()时  这一步进不来
                        addMenu(this.parentForm).then(res => {
                            this.$message({
                                showClose: true,
                                message: "添加" + this.parentForm.name + "成功",
                                type: "success"
                            });
                            this.handleList();

                        })
                    } else {
                        return false
                    }
                });
            },
            edit(){
                this.$refs['parentForm'].validate((valid) => {
                    if (valid) {      //在验证通过时时不返回callback()时  这一步进不来
                        editMenu(this.parentForm).then(res => {
                            this.handleList();
                            this.$message({
                                showClose: true,
                                message: "修改" + this.parentForm.name + "成功",
                                type: "success"
                            });
                        })
                    } else {
                        return false
                    }
                });
            },

            resetType(val){
                if(val=='1'||val=='2'){
                    this.menuToOne=true;
                    this.menuToTwo=false
                }else{
                    this.menuToOne=false;
                    this.menuToTwo=true
                }

            },
            addResetType(val){
                if(this.currentId=='-1'){
                    this.menuToOne=true;
                    this.menuToTwo=false;
                    this.menuType="1";
                }else if(this.currentId!='-1'&&val=='1'){
                    this.menuToOne=true;
                    this.menuToTwo=false;
                    this.menuType="2";

                }
                else{
                    this.menuToOne=false;
                    this.menuToTwo=true;
                    this.menuType="3";

                }

            }
        }
    };
</script>

<style lang="scss" scoped>
    .menu-container {
        padding: 0 20px;
    }

    .menu-header {
        padding: 8px 0;
    }
</style>
