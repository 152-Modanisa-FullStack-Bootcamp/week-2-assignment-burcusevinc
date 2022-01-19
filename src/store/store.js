import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const URL = "https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos"

const store = new Vuex.Store({
  state: { //data
    allVideos: [],
  },
  actions: {
     fetchVideos({ commit }) {
        axios.get(URL).then(response=>{
        commit('setVideos', response.data)
      })
    }
  },
  mutations: {
    setVideos(state,payload){
      state.allVideos = payload;
    }
  },
  getters: { 
    favoritedVideos(state) {
      return state.allVideos.filter((video) => video.favorite === true);
    },
  },
})

export default store;