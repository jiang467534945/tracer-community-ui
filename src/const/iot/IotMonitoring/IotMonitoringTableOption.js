export const iotMonitoringOption = {
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
        prop:"equId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备ID",
                   trigger: "blur"
               }]
        },
        /**具体位置*/
        {
        label:"具体位置",
        prop:"address",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "具体位置",
                   trigger: "blur"
               }]
        },
    ]

};

