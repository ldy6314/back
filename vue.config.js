const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    configureWebpack: {
        // 排除打包的某些选项
        externals: {
            vue: 'Vue',
            vuex: 'Vuex',
            'bootstrap-vue': 'BootstrapVue',
            'vue-clipboard2': 'VueClipboard',
            axios: 'axios',
            'vue-router': 'VueRouter',
            'vee-validate': 'VeeValidate',
            'zh_CN': 'zh_CN'
        }
    },
})