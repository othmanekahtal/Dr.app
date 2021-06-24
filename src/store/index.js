import {createStore} from 'vuex'

export default createStore({
    state: {
        username: localStorage.getItem('username') || null,
        id: localStorage.getItem("id") || null,
        token: localStorage.getItem('token') || null,
        id_record: null,
    },
    mutations: {
        changeState(state, param) {
            let [value,point]=param;
            state[point] = value;
        },
    },
    actions: {},
    modules: {}
})


