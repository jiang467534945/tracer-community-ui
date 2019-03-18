export const systemOption = {
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
    align:'center',
    stripe:true,
    column: [
        {
            label: "系统编号",
            prop: "id",
            width: "150",
            fixed: true,
            hide:true,
            visdiplay:false,
            rules: [{
                required: true,
                message: "请输入用户名",
                trigger: "blur"
            }]
        },
        {
        label: "系统名称",
        prop: "name",
        fixed: true,
        rules: [{
            required: true,
            message: "请输入系统名称",
            trigger: "blur"
        }]
        },
    ]

};

