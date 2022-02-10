<template>
  <header>
    <div class="container">
      <div class="header-grid">
        <SearchBox />
        <UserBox />
      </div>
    </div>
  </header>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import UserBox from "@/components/UserBox.vue";

export default {
  name: "Header",
  components: {
    SearchBox,
    UserBox,
  },
};
</script>

<style lang="scss" scoped>
header {
  margin-top: 50px;
  margin-bottom: 50px;
  .header-grid {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
    padding-left: 100px;
  }
}
</style>