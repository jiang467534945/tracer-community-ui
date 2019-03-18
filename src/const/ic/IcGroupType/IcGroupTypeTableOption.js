export const IcGroupTypeOption = {
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
                label: "编号",
                prop: "id",
                fixed: true,
                hide:true,
                visdiplay:false,
                rules: [{
                    required: true,
                    message: "请输入编号",
                    trigger: "blur"
                }]
            },
        /**类型*/
        {
        label:"类型",
        prop:"type",
       fixed: true,
            rules: [{
                   required: true,
                   message: "类型",
                   trigger: "blur"
               }]
        },
        /**组织类型*/
        {
        label:"组织类型",
        prop:"name",
       fixed: true,
            rules: [{
                   required: true,
                   message: "组织名称",
                   trigger: "blur"
               }]
        },
    ]

};

