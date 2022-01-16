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
import FavoriteVideos from "@/components/FavoriteVideos";
import Header from "@/components/Header";

export default {
  name: "FavoritePage",
  props: ["allVideosProps"],
  components: {
    FavoriteVideos,
    Header
  },
  computed: {
    favoritedVideos() {
      return this.allVideosProps.filter((video) => video.favorite === true);
    },
  },
};
</script>

<style scoped>
.header{
  width: 1530px;
  
}
</style>