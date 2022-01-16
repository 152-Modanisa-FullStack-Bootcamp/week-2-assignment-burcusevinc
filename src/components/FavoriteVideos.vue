<template>
  <div class="main-container">
    <img
      id="video-img"
      @click="goToWatchPage"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
      :src="
        isHover ? favoriteVideoProps.hoverImage : favoriteVideoProps.coverImage
      "
    />
    <div class="video-info">
      <div class="video-title">
        <div>
          <strong> {{ favoriteVideoProps.title }}</strong>
        </div>
        <div>
          {{ favoriteVideoProps.viewCount }} views
          {{ favoriteVideoProps.publishDateInMonth }} months ago
        </div>
        <div>
          <img :src="favoriteVideoProps.ownerImage" id="owner-img" />
          {{ favoriteVideoProps.ownerName }}
        </div>
        <div>{{ favoriteVideoProps.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoriteVideos",
  data() {
    return {
      isHover: false,
    };
  },
  props: ["favoriteVideoProps"],
  methods: {
    goToWatchPage() {
      this.$router.push({ path: '/watch', query: { id: this.favoriteVideoProps.id }});
    },
  },
};
</script>


<style scoped>
.main-container {
  display: flex;
  width: 850px;
  height: 200px;
  margin-left: 200px;
  margin-top: 50px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
}

#video-img {
  width: 360px;
  height: 200px;
}
.video-info {
  display: flex;
  flex-direction: row;
  width: 490px;
  height: 80px;
}

#owner-img {
  vertical-align: middle;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.video-title {
  margin-top: 3px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>