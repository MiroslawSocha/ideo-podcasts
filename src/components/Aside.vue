<template>
  <aside>
    <div class="logo">
      <router-link class="nav-link" to="/">
        <font-awesome-icon icon="podcast" />
      </router-link>
    </div>
    <Nav />
    <div class="logout">
      <router-link class="nav-link" to="/">
        <font-awesome-icon icon="sign-out-alt" />
      </router-link>
    </div>
  </aside>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Aside",
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
aside {
  background: var(--primary);
  position: fixed;
  height: calc(100vh - 60px);
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 10px;
  align-items: center;
  z-index: 1;
  .logo,
  .logout {
    a {
      font-size: 30px;
      color: white;
    }
  }
}
</style>