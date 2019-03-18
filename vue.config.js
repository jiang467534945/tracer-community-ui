// 基础路径 注意发布之前要先修改这里
let baseUrl = './'
module.exports = {
    baseUrl: baseUrl, // 根据你的实际情况更改这里
    lintOnSave: true,
    devServer: {
        publicPath: baseUrl // 和 baseUrl 保持一致
    },
    productionSourceMap: false,
    chainWebpack: (config) => {
        //忽略的打包文件
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT',
        })
        const entry = config.entry('app')
        entry
            .add('babel-polyfill')
            .end()
        entry
            .add('classlist-polyfill')
            .end()
        entry
            .add('@/mock')
            .end()
    },
    transpileDependencies: ['avue-plugin-transfer', 'avue-plugin-ueditor'],
//配置转发代理
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/auth': {
                target: 'http://127.0.0.1:8055',
                ws: true,
                pathRewrite: {
                    '^/auth': ''
                }
            },
            '/admin': {
                target: 'http://127.0.0.1:8089',
                ws: true,
                pathRewrite: {
                    '^/admin': ''
                }
            },
            '/ic': {
                target: 'http://127.0.0.1:8086',
                ws: true,
                pathRewrite: {
                    '^/ic': ''
                }
            },
            '/shop': {
                target: 'http://127.0.0.1:8087',
                ws: true,
                pathRewrite: {
                    '^/shop': ''
                }
            }

        }
        // proxy: {
        //     '/api': {
        //         target: 'http://127.0.0.1:3000',
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': '/api'
        //         }
        //     },
        // }
    }
}
