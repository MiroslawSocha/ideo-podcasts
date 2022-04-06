<template>
  <Header />
  <Aside />
  <main>
    <div class="container">
      <div class="main-grid">
        <router-view />
        <Player />
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
import Player from "@/components/Player.vue";

export default {
  name: "App",
  components: {
    Header,
    Aside,
    Player,
  },
};
</script>

<style lang="scss">
@import "assets/styles/main";

.container {
  z-index: -5;
  .main-grid {
    position: relative;
    display: grid;
    grid-template-columns: 8fr 4fr;
    gap: 40px;
    padding-left: 100px;
    margin-bottom: 40px;
    z-index: 0;
  }
}
</style>
