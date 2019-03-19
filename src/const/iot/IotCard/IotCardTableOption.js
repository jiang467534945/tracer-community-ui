export const iotCardOption = {
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
        /**门禁卡编号*/
        {
        label:"门禁卡编号",
        prop:"cardNumber",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "门禁卡编号",
                   trigger: "blur"
               }]
        },
        /**用户ID*/
        {
        label:"用户ID",
        prop:"ownerId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "用户ID",
                   trigger: "blur"
               }]
        },
        /**卡类型*/
        {
        label:"卡类型",
        prop:"type",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "卡类型",
                   trigger: "blur"
               }]
        },
        /**房间ID*/
        {
        label:"房间ID",
        prop:"roomId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "房间ID",
                   trigger: "blur"
               }]
        },
        /**社区基础设施关联*/
        {
        label:"社区基础设施关联",
        prop:"icbId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "社区基础设施关联",
                   trigger: "blur"
               }]
        },
    ]

};

