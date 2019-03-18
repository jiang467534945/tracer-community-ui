
export const deptOption = {
    border: true,
    index: true,
    indexLabel: '序号',
    selection: true,
    columnBtn:false,
    refreshBtn:false,
    addBtn:false,
    delBtn:false,
    editBtn:false,
    menuWidth:300,
    menuAlign:'center',
    formWidth: '60%',
    column: [{
        label: "部门名称",
        prop: "name",
        width: "150",
        fixed: true,
        rules: [{
            required: true,
            message: "请输入部门名称",
            trigger: "blur"
        }]
    },

        {
            label: "排序",
            prop: "orderNum",
            fixed: true,
        }
    ]

};

