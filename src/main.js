import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import { BootstrapVue } from 'bootstrap-vue'
//import VueClipBoard from 'vue-clipboard2'
import '@/validateform'

//Vue.use(BootstrapVue)
//Vue.use(VueClipBoard)


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')