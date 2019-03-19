export const iotCommunityBasedOption = {
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
        /**小区ID*/
        {
        label:"小区ID",
        prop:"communityId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "小区ID",
                   trigger: "blur"
               }]
        },
        /**物业ID*/
        {
        label:"物业ID",
        prop:"propertyId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "物业ID",
                   trigger: "blur"
               }]
        },
        /**小区名称*/
        {
        label:"小区名称",
        prop:"communityName",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "小区名称",
                   trigger: "blur"
               }]
        },
        /**楼栋ID*/
        {
        label:"楼栋ID",
        prop:"buildId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "楼栋ID",
                   trigger: "blur"
               }]
        },
        /**楼栋号*/
        {
        label:"楼栋号",
        prop:"buildNumber",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "楼栋号",
                   trigger: "blur"
               }]
        },
        /**单元ID*/
        {
        label:"单元ID",
        prop:"unitId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "单元ID",
                   trigger: "blur"
               }]
        },
        /**单元号*/
        {
        label:"单元号",
        prop:"unitNumber",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "单元号",
                   trigger: "blur"
               }]
        },
        /**物业名称*/
        {
        label:"物业名称",
        prop:"propertyName",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "物业名称",
                   trigger: "blur"
               }]
        },
        /**终端ID*/
        {
        label:"终端ID",
        prop:"terminalId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "终端ID",
                   trigger: "blur"
               }]
        },
        /**大门ID*/
        {
        label:"大门ID",
        prop:"gateId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "大门ID",
                   trigger: "blur"
               }]
        },
        /**大门名称*/
        {
        label:"大门名称",
        prop:"gateName",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "大门名称",
                   trigger: "blur"
               }]
        },
    ]

};

