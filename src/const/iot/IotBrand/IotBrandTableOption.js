export const iotBrandOption = {
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
        label:"品牌名称",
        prop:"name",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"品牌类型",
        prop:"type",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        /**联系人*/
        {
        label:"联系人",
        prop:"linkman",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "联系人",
                   trigger: "blur"
               }]
        },
        /**联系电话*/
        {
        label:"联系电话",
        prop:"linkphone",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "联系电话",
                   trigger: "blur"
               }]
        },
    ]

};

