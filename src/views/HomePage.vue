<template>
<div class="header-container">
    <Header></Header>
<div class="main-container">
    <Video v-for="video in allVideosProps" :key="video.id" :videoProps="video"></Video>
</div>
</div>
</template>

<script>
import Video from "@/components/Video"
import Header from '../components/Header.vue';

export default {
    name:"HomePage",
    props:["allVideosProps"],
    components: {
        Video,
        Header
    },
};
</script>


<style scoped>
.header-container{
    width: 1600px;
}
.main-container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: space-evenly;
}
</style>