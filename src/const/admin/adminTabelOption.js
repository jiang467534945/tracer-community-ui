export const userOption = {
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
            label: "用户编号",
            prop: "id",
            width: "150",
            fixed: true,
            hide:true,
            visdiplay:false,
            rules: [{
                required: true,
                message: "请输入用户名",
                trigger: "blur"
            }]
        },
        {
        label: "用户名",
        prop: "userName",
        width: "150",
        fixed: true,
        rules: [{
            required: true,
            message: "请输入用户名",
            trigger: "blur"
        }]
        },
        {
            label: "用户昵称",
            prop: "nickName",
            fixed: true,
        },
        {
            label: "用户密码",
            prop: "password",
            type:'password',
            editVisdiplay:false,
            hide:true,
            fixed: true,
        },
        {
            label: "手机号码",
            prop: "phone",
            fixed: true,
        },
        {
            label: '部门',
            prop: 'deptId',
            type: 'tree',
            cascader: ['role'],
            cascaderFirst: true,
            dicUrl:'http://127.0.0.1:8089/dept/selDeptLIst',
            dicMethod:'get',
            props:{
                label: "name",
                value: "id",
                children:"children"
            },
            rules: [{
                required: true,
                message: "请选择部门",
                trigger: "blur"
            }]
        }, {
            label: '角色',
            prop: 'role',
            type: 'select',
            dicFlag: false,
            dicUrl: `http://127.0.0.1:8089/role/getDeptRole/{{key}}`,
            dicMethod:'get',
            hide:true,
            props:{
                label: "roleName",
                value: "id",
            },
            rules: [{
                required: true,
                message: "请选择角色",
                trigger: "blur"
            }]
        },

    ]

};

