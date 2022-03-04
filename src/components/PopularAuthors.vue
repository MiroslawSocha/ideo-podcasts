<template>
  <div class="popular-authors">
    <div class="component-header">
      <span class="title">Popular authors</span>
      <router-link class="see-more" to="/">
        <font-awesome-icon icon="arrow-right" />
      </router-link>
    </div>
    <div class="component-body">
      <ul class="popular-authors-list">
        <li
          class="popular-author-item"
          v-for="author in popularAuthors"
          :key="author.id"
        >
          <div class="cover-wrapper">
            <img :src="author.authorPictureUrl" :alt="author.name" />
          </div>
          <span class="author-name">{{ author.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { ref, onMounted } from "vue";
// import axios from "axios";
export default {
  name: "PopularAuthors",
  components: {},
};
</script>

<style lang="scss" scoped>
</style>