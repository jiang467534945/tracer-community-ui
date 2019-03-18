export const IcGroupOption = {
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
                width: "150",
                fixed: true,
                hide:true,
                visdiplay:false,
                rules: [{
                    required: true,
                    message: "请输入编号",
                    trigger: "blur"
                }]
            },
        /**组织名称*/
        {
        label:"组织名称",
        prop:"groupName",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "组织名称",
                   trigger: "blur"
               }]
        },
        {
        label:"",
        prop:"groupTypeId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"",
        prop:"groupUpperLimit",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        /**组织开放状态*/
        {
        label:"组织开放状态",
        prop:"groupStatus",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "组织开放状态",
                   trigger: "blur"
               }]
        },
    ]

};

