export const iotCommunityEquOption = {
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
        /**设备名称*/
        {
        label:"设备名称",
        prop:"name",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备名称",
                   trigger: "blur"
               }]
        },
        /**设备唯一识别码*/
        {
        label:"设备唯一识别码",
        prop:"code",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备唯一识别码",
                   trigger: "blur"
               }]
        },
        /**IP*/
        {
        label:"IP",
        prop:"ip",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "IP",
                   trigger: "blur"
               }]
        },
        /**端口*/
        {
        label:"端口",
        prop:"port",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "端口",
                   trigger: "blur"
               }]
        },
        /**开启状态*/
        {
        label:"开启状态",
        prop:"status",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "开启状态",
                   trigger: "blur"
               }]
        },
        /**品牌*/
        {
        label:"品牌",
        prop:"brandId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "品牌",
                   trigger: "blur"
               }]
        },
        /**设备类型*/
        {
        label:"设备类型",
        prop:"type",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备类型",
                   trigger: "blur"
               }]
        },
        /**mac地址*/
        {
        label:"mac地址",
        prop:"mac",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "mac地址",
                   trigger: "blur"
               }]
        },
        /**设备所属设施类型*/
        {
        label:"设备所属设施类型",
        prop:"orgType",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备所属设施类型",
                   trigger: "blur"
               }]
        },
        /**设备关联基础设施ID*/
        {
        label:"设备关联基础设施ID",
        prop:"icbId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "设备关联基础设施ID",
                   trigger: "blur"
               }]
        },
    ]

};

