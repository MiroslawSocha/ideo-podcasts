<template>
  <nav>
    <router-link class="nav-link" to="/">
      <font-awesome-icon icon="home" />
    </router-link>
    <router-link class="nav-link" to="/favorites">
      <font-awesome-icon icon="heart" />
    </router-link>
    <router-link class="nav-link" to="/bookmarks">
      <font-awesome-icon icon="bookmark" />
    </router-link>
    <router-link class="nav-link" to="/starred">
      <font-awesome-icon icon="star" />
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  .nav-link {
    padding: 0.625rem;
    border-radius: 0.625rem;
    color: white;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    background: var(--primary);
    text-align: center;
    &.router-link-exact-active {
      background: white;
      color: var(--primary);
    }
  }
}
</style>