export const iotControlCardOption = {
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
        /**省名*/
        {
        label:"省名",
        prop:"province",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "省名",
                   trigger: "blur"
               }]
        },
        /**市名*/
        {
        label:"市名",
        prop:"city",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "市名",
                   trigger: "blur"
               }]
        },
        /**区/县名*/
        {
        label:"区/县名",
        prop:"county",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "区/县名",
                   trigger: "blur"
               }]
        },
        /**地址*/
        {
        label:"地址",
        prop:"address",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "地址",
                   trigger: "blur"
               }]
        },
        /**有效期*/
        {
        label:"有效期",
        prop:"termOfValidity",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "有效期",
                   trigger: "blur"
               }]
        },
        /**是否有效*/
        {
        label:"是否有效",
        prop:"effective",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "是否有效",
                   trigger: "blur"
               }]
        },
        /**街道信息*/
        {
        label:"街道信息",
        prop:"street",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "街道信息",
                   trigger: "blur"
               }]
        },
        /**设备的ID*/
        {
        label:"设备的ID",
        prop:"controlId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备的ID",
                   trigger: "blur"
               }]
        },
    ]

};

