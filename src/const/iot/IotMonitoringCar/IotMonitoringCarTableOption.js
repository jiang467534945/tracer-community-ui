export const iotMonitoringCarOption = {
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
        {
        label:"",
        prop:"monitoringId",
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
        prop:"imgBigUrl",
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
        prop:"imgSmallUrl",
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
        prop:"carPlate",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        /**车辆颜色*/
        {
        label:"车辆颜色",
        prop:"carColor",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "车辆颜色",
                   trigger: "blur"
               }]
        },
        {
        label:"",
        prop:"carType",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        /**车牌颜色*/
        {
        label:"车牌颜色",
        prop:"plateColor",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "车牌颜色",
                   trigger: "blur"
               }]
        },
    ]

};

