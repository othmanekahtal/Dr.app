import { createStore } from 'vuex'

export default createStore({
  state: {
    password:'',
    username:'',
  },
  mutations: {
    // all methods in mutations take two parameters :state,payload
    changeEmail(state,param){
      state.username = param
      state.username = param
    }
  },
  actions: {
  },
  modules: {
  }
})
