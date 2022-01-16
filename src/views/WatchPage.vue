<template>
<div>
    <div>Video's ID: {{$route.query.id}}</div>
</div>
</template>

<script>
export default {
    name:"WatchPage",
    props:["allVideosProps"]
};
</script>


<style scoped>
</style>