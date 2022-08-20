import Vue from 'vue'
import VueRouter from 'vue-router'
import FormView from '@/views/FormView'
import StudentView from '@/views/StudentView'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'form',
        component: FormView
    },
    {
        path: '/student',
        name: 'student',
        component: StudentView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router