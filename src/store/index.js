import Vue from 'vue'
import Vuex from 'vuex'
import $http from './http.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wallpaper:[],  //wallpaper列表
  },
  mutations: {
    GET_WALLPAPER(state,res){
     state.wallpaper = state.wallpaper.concat(res.data.object_list);
     console.log('在这里改变状态',state.wallpaper)
    }
  },
  actions: {
    /* 获取wallpaper列表 */
    getWallPaper({commit},params){
      $http.get('dui/napi/blog/list/by_category/',params)
      .then((res)=>{
        console.log('请求到的数据',res)
        commit('GET_WALLPAPER',res)
      }) 
    }
    
  },
  modules: {
  }
})
