<template>
  <div>
    <FavoriteVideos
      v-for="video in favoritedVideos"
      :key="video.id"
      :favoriteVideoProps="video"
    ></FavoriteVideos>
  </div>
</template>

<script>
import FavoriteVideos from "@/components/FavoriteVideos";

export default {
  name: "FavoritePage",
  props: ["allVideosProps"],
  components: {
    FavoriteVideos,
  },
  computed: {
    favoritedVideos() {
      return this.allVideosProps.filter((video) => video.favorite === true);
    },
  },
};
</script>


<style scoped>
</style>