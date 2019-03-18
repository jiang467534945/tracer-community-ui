/**
 * 全局配置文件
 */
export default {
    title: "Tracer综合治理平台",
    logo: "A",
    indexTitle: 'Tracer By Rti',
    lockPage: '/lock',
    tokenTime: 6000,
    info: {
        title: "Tracer 通用管理系统快速开发框架",
        list: [
            'Tracer 是一个基于SpringBoot全家桶+Vue+Avue+element搭建的快速后台管理平台，采用token交互验证方式。',
            '您可以 Tracer 为基础，不只限制于vue的页面，你可以嵌入第三方网站，基于iframe框架。',
            'Tracer 构建简单上手快，最大程度上帮助企业节省时间成本和费用开支。',
        ]
    },
    //http的status默认放行不才用统一处理的,
    statusWhiteList: [400],
    //配置首页不可关闭
    isFirstPage: false,
    fistPage: {
        label: "首页",
        value: "/wel/index",
        params: {},
        query: {},
        group: [],
        close: false
    },
    //配置菜单的属性
    menu: {
        props: {
            label: 'label',
            path: 'path',
            icon: 'icon',
            children: 'children'
        }
    }
}
