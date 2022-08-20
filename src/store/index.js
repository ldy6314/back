import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)


var store = new Vuex.Store({
    state: {
        name: "",
        id: "",
    },
    mutations: {
        update_name(state, value) {
            state.name = value
        },
        update_id(state, value) {
            state.id = value
        }
    },
    actions: {
        get_class_numnbe() {

        }
    },
    getters: {

    }
})

export default store