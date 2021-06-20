import { createStore } from 'vuex'

export default createStore({
  state: {
    username:'Othmane',
    id:1234
  },
  mutations: {
    // all methods in mutations take two parameters :state,payload
    changeState(state,param){
      state["username"] = param;
    }
  },
  actions: {
  },
  modules: {
  }
})
