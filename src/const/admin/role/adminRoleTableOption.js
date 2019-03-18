
export const roleOption = {
    border: true,
    index: true,
    indexLabel: '序号',
    selection: true,
    columnBtn:false,
    refreshBtn:false,
    addBtn:false,
    delBtn:false,
    editBtn:false,

    menuWidth:400,
    menuAlign:'center',
    formWidth: '60%',
    column: [{
        label: "角色名",
        prop: "roleName",
        width: "150",
        fixed: true,
        rules: [{
            required: true,
            message: "请输入角色名",
            trigger: "blur"
        }]
    },
        {
            label: "角色编码",
            prop: "roleCode",
            fixed: true,
        },
        {
            label: "部门ID",
            prop: "deptId",
            hide:true,
            viewVisdiplay:false,
            type: 'tree',
            dicUrl:'http://127.0.0.1:8089/dept/selDeptLIst',
            dicMethod:'get',
            props:{
                label: "name",
                value: "id",
                children:"children"
            },
            rules: [{
                required: true,
                message: "请选择单选",
                trigger: "change"
            }]
        },

        {
            label: "所属部门",
            prop: "deptName",
            fixed: true,
            addVisdiplay:false,
            editVisdiplay:false
        },
        {
            label: "角色简介",
            prop: "roleDesc",
            type: "ueditor",
            span: 24,
            overHidden: true
        },
    ]

};

