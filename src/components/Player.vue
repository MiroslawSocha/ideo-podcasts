<template>
  <header>
    <div class="player">
      Player
    </div>
  </header>
</template>

<script>
// https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_apc_64kb.mp3
export default {
  name: "Player",
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  right: 0;
  .player {
    background: #fff;
    position: absolute;
    width: 100%;
    margin: 0;
    padding: 0;
  }
}

@media (max-width: 1200px) {
  .header {
    width: 300px;
  }
}

@media (max-width: 600px) {
  .header {
    width: 100px;
  }
}
</style>