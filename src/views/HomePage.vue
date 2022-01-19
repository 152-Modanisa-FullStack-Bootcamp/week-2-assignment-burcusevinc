<template>
  <div class="header-container">
    <Header></Header>
    <div class="main-container">
      <Video v-for="video in getVideos" :key="video.id" :videoProps="video"></Video>
    </div>
  </div>
</template>

<script>
//import { mapGetters } from "vuex";
import Video from "@/components/Video";
import Header from "../components/Header.vue";

export default {
  name: "HomePage",
  //props:["allVideosProps"],
  components: {
    Video,
    Header,
  },
  computed: {
    getVideos() {
      return this.$store.state.allVideos;
    },
  },
  mounted() {
    this.$store.dispatch("fetchVideos");
  },
};
</script>


<style scoped>
.header-container {
  width: 1600px;
}
.main-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-evenly;
}
</style>