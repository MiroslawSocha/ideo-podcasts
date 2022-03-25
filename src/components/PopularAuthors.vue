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

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const popularAuthors = ref([]);
onMounted(() => {
  getPopularAuthors();
});

async function getPopularAuthors() {
  const response = await axios.get(
    "https://node.michalkuncio.com/popular-authors"
  );
  popularAuthors.value = response.data;
}
</script>

<style lang="scss" scoped>
.popular-authors {
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  .component-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      margin-top: 0;
      color: var(--text-light);
      font-size: 20px;
      font-weight: 700;
    }
    .see-more {
      color: var(--text-light);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
  .component-body {
    padding-top: 20px;
    .popular-authors-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 0;
      padding: 0;
      .popular-author-item {
        display: flex;
        align-items: center;
        gap: 15px;

        .cover-wrapper {
          height: 40px;
          width: 40px;
          border-radius: 10px;
          overflow: hidden;

          img {
            border-style: none;
            display: inline-block;
            max-width: 100%;
            height: auto;
          }
        }
        .author-name {
          font-weight: 700;
        }
      }
    }
  }
}
</style>