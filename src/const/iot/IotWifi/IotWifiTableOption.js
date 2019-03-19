export const iotWifiOption = {
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
        /**设备编号*/
        {
        label:"设备编号",
        prop:"equId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备编号",
                   trigger: "blur"
               }]
        },
        /**品牌*/
        {
        label:"品牌",
        prop:"brand",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "品牌",
                   trigger: "blur"
               }]
        },
        /**MAC地址*/
        {
        label:"MAC地址",
        prop:"mac",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "MAC地址",
                   trigger: "blur"
               }]
        },
        /**信号强度*/
        {
        label:"信号强度",
        prop:"signal",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "信号强度",
                   trigger: "blur"
               }]
        },
        /**采集半径*/
        {
        label:"采集半径",
        prop:"radius",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "采集半径",
                   trigger: "blur"
               }]
        },
    ]

};

