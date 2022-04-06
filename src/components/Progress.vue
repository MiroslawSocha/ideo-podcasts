<template>
  <div class="progress">
    <div class="progress-inner" :style="`width: ${value}%`"></div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  components: {},
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.progress {
  height: 10px;
  width: 100%;
  background: var(--bg-gray);
  border-radius: 5px;
  overflow: hidden;
  .progress-inner {
    background: var(--primary);
    height: 100%;
  }
}
</style>
