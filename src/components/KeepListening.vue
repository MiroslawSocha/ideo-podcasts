<template>
  <div class="keep-listening">
    <div class="component-header">
      <span class="title">Keep Listening</span>
      <router-link class="see-more" to="/">
        <font-awesome-icon icon="arrow-right" />
      </router-link>
    </div>
    <div class="component-body">
      <ul class="popular-podcasts-list">
        <li
          class="popular-podcast-item"
          v-for="podcast in currentlyListening"
          :key="podcast.id"
        >
          <div class="cover-wrapper">
            <img :src="podcast.coverUrl" :alt="podcast.title" />
          </div>
          <div class="info-wrapper">
            <span class="podcast-title">{{ podcast.title }}</span>
            <span class="podcast-author">{{ podcast.author }}</span>
            <Progress :value="podcast.progress"></Progress>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Progress from "@/components/Progress.vue";

export default {
  name: "PopularPodcasts",
  components: { Progress },
  setup() {
    const currentlyListening = ref([
      {
        id: 1,
        title: "Abc",
        author: "John Doe",
        coverUrl: "https://picsum.photos/200/300",
        progress: 40,
      },
      {
        id: 2,
        title: "Long title",
        author: "John Doe",
        coverUrl: "https://picsum.photos/200/301",
        progress: 80,
      },
      {
        id: 3,
        title: "Even Long title",
        author: "John Doe",
        coverUrl: "https://picsum.photos/200/302",
        progress: 50,
      },
      {
        id: 4,
        title: "Even Long title",
        author: "John Doe",
        coverUrl: "https://picsum.photos/200/303",
        progress: 70,
      },
    ]);

    return {
      currentlyListening,
    };
  },
};
</script>

<style lang="scss" scoped>
.keep-listening {
  background: white;
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
      font-weight: bold;
    }
    .see-more {
      color: var(--text-light);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
  }
  .component-body {
    padding-top: 20px;
    .popular-podcasts-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .popular-podcast-item {
        display: flex;
        align-items: center;
        gap: 15px;
        .cover-wrapper {
          height: 70px;
          width: 50px;
          border-radius: 10px;
          overflow: hidden;
        }
        .info-wrapper {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 5px;
          .podcast-title {
            font-weight: bold;
          }
          .podcast-author {
            color: var(--text-light);
          }
        }
      }
    }
  }
}
</style>
