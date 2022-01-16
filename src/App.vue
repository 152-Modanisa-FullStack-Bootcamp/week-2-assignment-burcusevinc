<template>
  <div id="app">
    <router-view :allVideosProps="allVideos"></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return {
      allVideos: []
    }
  },
  async mounted(){
    const response = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos");
    //console.log(response)
    this.allVideos = response.data;
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

html,body {
  height: 100%;
  width:100%;
}

#app{
  display: flex;
  justify-content: center;
}
</style>
