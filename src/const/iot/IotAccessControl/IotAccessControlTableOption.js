export const iotAccessControlOption = {
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
        /**锁信息*/
        {
        label:"锁信息",
        prop:"lockInfo",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "锁信息",
                   trigger: "blur"
               }]
        },
        /**设备SIP*/
        {
        label:"设备SIP",
        prop:"sip",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备SIP",
                   trigger: "blur"
               }]
        },
        /**门禁密码*/
        {
        label:"门禁密码",
        prop:"password",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "门禁密码",
                   trigger: "blur"
               }]
        },
        /**转接板指令*/
        {
        label:"转接板指令",
        prop:"keyboard",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "转接板指令",
                   trigger: "blur"
               }]
        },
        /**转接板开关*/
        {
        label:"转接板开关",
        prop:"keyboardClose",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "转接板开关",
                   trigger: "blur"
               }]
        },
        /**重启时间*/
        {
        label:"重启时间",
        prop:"restart",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "重启时间",
                   trigger: "blur"
               }]
        },
        /**人脸开关*/
        {
        label:"人脸开关",
        prop:"faceDistinguish",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "人脸开关",
                   trigger: "blur"
               }]
        },
        /**地区代码*/
        {
        label:"地区代码",
        prop:"areaCode",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "地区代码",
                   trigger: "blur"
               }]
        },
        /**设备ID*/
        {
        label:"设备ID",
        prop:"equId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备ID",
                   trigger: "blur"
               }]
        },
        /**管理界面口令*/
        {
        label:"管理界面口令",
        prop:"managerNumber",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "管理界面口令",
                   trigger: "blur"
               }]
        },
    ]

};

