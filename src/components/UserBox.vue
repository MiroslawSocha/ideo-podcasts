<template>
  <div class="user-box">
    <router-link class="user-box-action" to="/">
      <font-awesome-icon icon="cog" />
    </router-link>
    <button class="user-box-action">
      <font-awesome-icon icon="bell" />
    </button>
    <div class="user">
      <div class="user-name">John Doe</div>
      <div class="avatar">
        <img
          src="https://i.picsum.photos/id/849/40/40.jpg?hmac=V8BUfahMGc4Ed8U8P4GsSNjGPQOtx5KVbeRgS-YrOho"
          alt="avatar"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserBox",
};
</script>

<style lang="scss" scoped>
.user-box {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-end;
  .user-box-action {
    color: var(--gray);
    font-size: 20px;
  }
  .user {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 20px;
    .user-name {
      color: var(--text);
      font-weight: bold;
    }

    .avatar {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
}
</style>