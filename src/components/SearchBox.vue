<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="search..." />
    <router-link class="search-btn" to="/">
      <font-awesome-icon icon="search" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
  .search-input {
    border: none;
    border-bottom: 1px solid gainsboro;
    padding: 15px;
    background: transparent;
    flex-grow: 1;
    &::placeholder {
      color: var(--placeholder);
    }
  }
  .search-btn {
    background: white;
    border-radius: 10px;
    font-size: 20px;
    color: var(--third);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>