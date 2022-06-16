/* eslint-disable */
import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow:false
  },
  mutations: {
    toggleAuth: (state) => {
      state.authModalShow = !state.authModalShow
    },
    test()  {
      console.log('manage clicked')
    }
  },
  getters: {
    authModalShow: (state)   => {
      return state.authModalShow
    }
  },
  actions: {
  },
  modules: {
  },
});
