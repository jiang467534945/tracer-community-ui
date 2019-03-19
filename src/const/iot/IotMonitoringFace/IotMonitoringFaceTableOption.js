export const iotMonitoringFaceOption = {
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
        /**摄像头ID*/
        {
        label:"摄像头ID",
        prop:"monitoringId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "摄像头ID",
                   trigger: "blur"
               }]
        },
        /**大图片*/
        {
        label:"大图片",
        prop:"imgBigUrl",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "大图片",
                   trigger: "blur"
               }]
        },
        {
        label:"",
        prop:"sex",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        /**小图片*/
        {
        label:"小图片",
        prop:"imgSmallUrl",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "小图片",
                   trigger: "blur"
               }]
        },
    ]

};

