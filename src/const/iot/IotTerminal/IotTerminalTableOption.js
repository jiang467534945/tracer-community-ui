export const iotTerminalOption = {
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
        /**IP地址*/
        {
        label:"IP地址",
        prop:"ip",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "IP地址",
                   trigger: "blur"
               }]
        },
        /**端口号*/
        {
        label:"端口号",
        prop:"port",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "端口号",
                   trigger: "blur"
               }]
        },
        /**终端机名称*/
        {
        label:"终端机名称",
        prop:"name",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "终端机名称",
                   trigger: "blur"
               }]
        },
        /**设备编号*/
        {
        label:"设备编号",
        prop:"code",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备编号",
                   trigger: "blur"
               }]
        },
    ]

};

