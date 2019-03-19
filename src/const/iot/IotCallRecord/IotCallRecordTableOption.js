export const iotCallRecordOption = {
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
        /**门禁关联ID*/
        {
        label:"门禁关联ID",
        prop:"accessControlId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "门禁关联ID",
                   trigger: "blur"
               }]
        },
        /**状态*/
        {
        label:"状态",
        prop:"status",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "状态",
                   trigger: "blur"
               }]
        },
        /**呼叫时间*/
        {
        label:"呼叫时间",
        prop:"callTime",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "呼叫时间",
                   trigger: "blur"
               }]
        },
        /**图片url*/
        {
        label:"图片url",
        prop:"image",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "图片url",
                   trigger: "blur"
               }]
        },
        /**房间号*/
        {
        label:"房间号",
        prop:"roomNumber",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "房间号",
                   trigger: "blur"
               }]
        },
        /**类型*/
        {
        label:"类型",
        prop:"type",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "类型",
                   trigger: "blur"
               }]
        },
        /**房屋的ID*/
        {
        label:"房屋的ID",
        prop:"roomId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "房屋的ID",
                   trigger: "blur"
               }]
        },
        /**关联小区基础*/
        {
        label:"关联小区基础",
        prop:"icbId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "关联小区基础",
                   trigger: "blur"
               }]
        },
    ]

};

