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
                                   v-if="permission.sys_dept_add">新增
                        </el-button>
                        <el-button type="primary"
                                   icon="el-icon-edit"
                                   size="small"
                                   @click.native="handleEdit"
                                   v-if="permission.sys_dept_edit">编辑
                        </el-button>
                        <el-button type="primary"
                                   icon="el-icon-delete"
                                   size="small"
                                   @click.native="handleDel"
                                   v-if="permission.sys_dept_del">删除
                        </el-button>
                    </el-button-group>
                </el-header>
            </el-container>
            <el-container>
                <el-aside width="300px">
                    <el-tree :data="treeData"
                             node-key="id"
                             highlight-current
                             default-expand-all
                             :expand-on-click-node="false"
                             :props="defaultProps"
                             :filter-node-method="filterNode"
                             @node-click="handleNodeClick"></el-tree>
                </el-aside>
                <el-main>
                    <el-form ref="form"
                             :model="form"
                             label-width="80px"
                    >
                        <el-form-item label="父节点ID">
                            <el-input v-model="parentForm.parentId"
                                      :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="节点编号">
                            <el-input v-model="parentForm.id"
                                      :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="部门名称">
                            <el-input v-model="parentForm.name"
                                      :disabled="formGrade"></el-input>
                        </el-form-item>
                        <el-form-item label="排序">
                            <el-input v-model="parentForm.orderNum"
                                      :disabled="formGrade"></el-input>
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
    import {fetchTree, getObj, addDept, delDept, editDept} from '@/api/dept/dept'

    export default {
        name: "dept",
        data() {
            return {
                form: {},
                obj: {},
                parentForm: {
                    name: undefined,
                    orderNum: undefined,
                    parentId: undefined,
                    id: undefined
                },
                currentId: '',
                formGrade: true,
                formStatus: "",
                treeData: [],
                defaultProps: {
                    children: 'children',
                    label: 'name'
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
                fetchTree()
                    .then(data => {
                        this.treeData = data.data.data;
                        console.log(this.treeData)
                    });
            },
            filterNode(value, data) {
                if (!value) return true
                return data.label.indexOf(value) !== -1
            },

            handleNodeClick(data) {
                getObj(data.id).then(res => {
                    this.parentForm = res.data.data;
                    this.currentId = data.id
                    this.formGrade = true;
                    this.formStatus = "";
                })
            },
            handleAdd() {
                this.resetForm();
                this.formGrade = false;
                this.formStatus = "add";
            },
            handleEdit() {
                if (validatenull(this.parentForm)) {
                    this.$message({
                        showClose: true,
                        message: "请选择菜单",
                        type: "warning"
                    });
                    return false;
                }

                this.formStatus = "edit";
                this.formGrade = false;
            },
            handleDel() {
                this.$confirm(`是否确认删除${this.parentForm.name}及其包含的所有组织吗？`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    delDept(this.parentForm.id).then(data => {
                        if (!data.data) {
                            this.$message({
                                showClose: true,
                                message: "删除失败，组织包含人员，请移除后再试",
                                type: "error"
                            });
                        } else {
                            this.handleList();
                            this.$message({
                                showClose: true,
                                message: "删除成功",
                                type: "success"
                            });
                        }
                    })
                })
            },
            create() {
                if (this.parentForm.parentId == "") {
                    this.parentForm.parentId = "0";
                }
                addDept(this.parentForm).then(res => {
                    this.handleList();
                    this.$message({
                        showClose: true,
                        message: "添加" + res.data.data.name + "成功",
                        type: "success"
                    });
                })
            },
            edit() {
                editDept(this.parentForm).then(res => {
                    this.handleList();
                    this.$message({
                        showClose: true,
                        message: "修改" + this.parentForm.name + "成功",
                        type: "success"
                    });
                })
            },
            resetForm() {
                this.parentForm = {
                    name: undefined,
                    parentId: this.currentId,
                    orderNum: undefined,
                    id: undefined
                }
            },
            handleSubmit() {
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
