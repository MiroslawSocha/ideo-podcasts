<template>
  <div class="my-podcasts">
    <div class="component-header">
      <h2 class="title">My podcasts</h2>
      <a
        aria-current="page"
        href="/"
        class="router-link-active router-link-exact-active see-more"
      >
        <span>See more</span>
        <font-awesome-icon icon="arrow-right" />
      </a>
    </div>
    <div class="books-list">
      <router-link
        to="/podcast/2"
        class="single-book"
        v-for="podcast in myPodcasts"
        :key="podcast.title"
        :style="{ background: podcast.color }"
      >
        <div class="cover-wrapper">
          <img :src="podcast.coverUrl" :alt="podcast.title" />
        </div>
        <div class="info">
          <span class="title">{{ podcast.title }}</span>
          <span class="author">Author: {{ podcast.author }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const myPodcasts = ref([]);
onMounted(() => {
  getMyPodcasts();
});

async function getMyPodcasts() {
  const response = await axios.get("https://node.michalkuncio.com/my-podcasts");
  myPodcasts.value = response.data;
}
</script>

<style lang="scss" scoped>
.my-podcasts {
  .component-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .title {
      margin-top: 0;
      color: var(--text-light);
    }
    .see-more {
      color: var(--text-light);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
  }
  .books-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    .single-book {
      padding: 25px;
      border-radius: 10px;
      text-align: center;
      .cover-wrapper {
        border-radius: 15px;
        overflow: hidden;
        height: 250px;
        display: inline-flex;
        img {
          border-style: none;
          display: inline-block;
          max-width: 100%;
          height: auto;
        }
      }
      .info {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: var(--text);
        .title {
          font-size: 22px;
        }
        .author {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
