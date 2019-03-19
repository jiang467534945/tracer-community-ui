export const iotOpenRecordOption = {
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
        /**设备ID*/
        {
        label:"设备ID",
        prop:"accessControlId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备ID",
                   trigger: "blur"
               }]
        },
        /**开门类型*/
        {
        label:"开门类型",
        prop:"type",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "开门类型",
                   trigger: "blur"
               }]
        },
        /**开门方式（大门门禁、单元门禁）*/
        {
        label:"开门方式（大门门禁、单元门禁）",
        prop:"mode",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "开门方式（大门门禁、单元门禁）",
                   trigger: "blur"
               }]
        },
        /**门禁卡ID*/
        {
        label:"门禁卡ID",
        prop:"cardId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "门禁卡ID",
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
        /**开门时间*/
        {
        label:"开门时间",
        prop:"openTime",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "开门时间",
                   trigger: "blur"
               }]
        },
        /**抓拍图片URL*/
        {
        label:"抓拍图片URL",
        prop:"imageUrl",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "抓拍图片URL",
                   trigger: "blur"
               }]
        },
        /**设备名称*/
        {
        label:"设备名称",
        prop:"equipName",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备名称",
                   trigger: "blur"
               }]
        },
        /**抓拍视频*/
        {
        label:"抓拍视频",
        prop:"videoUrl",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "抓拍视频",
                   trigger: "blur"
               }]
        },
        /**用户的ID*/
        {
        label:"用户的ID",
        prop:"ownerId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "用户的ID",
                   trigger: "blur"
               }]
        },
        {
        label:"",
        prop:"province",
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
        prop:"city",
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
        prop:"county",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        /**街道*/
        {
        label:"街道",
        prop:"street",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "街道",
                   trigger: "blur"
               }]
        },
        {
        label:"",
        prop:"address",
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
        prop:"icbId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
    ]

};

