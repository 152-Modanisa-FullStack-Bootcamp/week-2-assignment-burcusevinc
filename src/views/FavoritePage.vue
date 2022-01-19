<template>
  <div>
    <Header class="header"></Header>
    <FavoriteVideos
      v-for="video in favoritedVideos"
      :key="video.id"
      :favoriteVideoProps="video"
    ></FavoriteVideos>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FavoriteVideos from "@/components/FavoriteVideos";
import Header from "@/components/Header";

export default {
  name: "FavoritePage",
  components: {
    FavoriteVideos,
    Header
  },
  computed: {
    /*favoritedVideos() {
      return this.$store.state.allVideos.filter((video) => video.favorite === true);
    },*/
    ...mapGetters(["favoritedVideos"]),
  },
  created() {
    this.$store.dispatch("fetchVideos");
  },
};
</script>

<style scoped>
.header{
  width: 1530px;
  
}
</style>