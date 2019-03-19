export const iotEquAlarmOption = {
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
        /**报警类型*/
        {
        label:"报警类型",
        prop:"type",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "报警类型",
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
        /**所属基础设施*/
        {
        label:"所属基础设施",
        prop:"icbId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "所属基础设施",
                   trigger: "blur"
               }]
        },
        /**所属设备类型*/
        {
        label:"所属设备类型",
        prop:"equType",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "所属设备类型",
                   trigger: "blur"
               }]
        },
        /**所属基础设施*/
        {
        label:"所属基础设施",
        prop:"orgType",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "所属基础设施",
                   trigger: "blur"
               }]
        },
        /**报警信息简报*/
        {
        label:"报警信息简报",
        prop:"info",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "报警信息简报",
                   trigger: "blur"
               }]
        },
    ]

};

