import Vue from 'vue'
import Vuex from 'vuex'
//import state from './state'
//import mutations from './mutations'
//import actions from './actions'
//import broadbandailure from './modules/broadbandailure'


Vue.use(Vuex)
const store = new Vuex.Store({
  namespaced: true,
  //state,
  state: {
    count: 0
  },
  mutations: {
    increment (state,data) {
    	console.log(data,'mutations');
      	state.count = data;
    }
  },
  actions: {
    increment (context,data) {
    	console.log(data,'action');
      	context.commit('increment',data)
    }
  }
  //mutations,
  //actions,
  //getters,
//modules: {
//	
//}
    //broadbandailure: broadbandailure,
})

export default store
