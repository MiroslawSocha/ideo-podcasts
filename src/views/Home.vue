<template>
  <div class="home">
    <MyPodcasts />
    <Statistics />
    <div class="home-bottom-grid">
      <PopularAuthors />
      <KeepListening />
    </div>
  </div>
</template>

<script>
import MyPodcasts from "../components/MyPodcasts.vue";
import Statistics from "../components/Statistics.vue";
import PopularAuthors from "../components/PopularAuthors.vue";
import KeepListening from "../components/KeepListening.vue";
export default {
  name: "Home",
  components: {
    MyPodcasts,
    Statistics,
    PopularAuthors,
    KeepListening,
  },
};
</script>

<style lang='scss' scoped>
.home {
  display: grid;
  gap: 40px;
  .home-bottom-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
  }
}

@media (max-width: 730px) {
  .home {
    .home-bottom-grid {
      grid-template-columns: auto;
    }
  }
}
</style>
