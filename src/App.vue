<template>
  <Header />
  <Aside />
  <main>
    <div class="container">
      <div class="main-grid">
        <router-view />
        <div class="player">
          <Player />
        </div>
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

.main-grid {
  position: relative;
  display: grid;
  grid-template-columns: 8fr 4fr;
  gap: 40px;
  padding-left: 100px;
  margin-bottom: 40px;
  .player {
    position: fixed;
    position: absolute;
    top: 0;
    width: 30%;
    right: 0;
    padding: 10px;
    margin: 10px;
  }
}

@media (max-width: 700px) {
  .player{
    width: 50%;
  }
}
</style>
