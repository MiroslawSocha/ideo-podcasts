<template>
  <div class="keep-listening">
    <div class="component-header">
      <span class="title">Keep Listening</span>
      <a
        aria-current="page"
        href="/"
        class="router-link-active router-link-exact-active see-more"
      >
        <font-awesome-icon icon="arrow-right" />
      </a>
    </div>
    <div class="component-body">
      <ul class="popular-podcasts-list">
        <li
          class="popular-podcast-item"
          v-for="keepListening in keepListenings"
          :key="keepListening.id"
        >
          <div class="cover-wrapper">
            <img :src="keepListening.coverUrl" :alt="keepListening.title" />
          </div>
          <div class="info-wrapper">
            <span class="podcast-title">{{ keepListening.title }}</span>
            <span class="podcast-author">{{ keepListening.author }}</span>
            <div class="progress">
              <div
                class="progress-inner"
                :style="{ width: keepListening.progress }"
              ></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Keep Listening",
  setup() {
    const keepListenings = ref([
      {
        id: "1",
        coverUrl: "https://picsum.photos/200/300",
        title: "Abc",
        author: "John Doe",
        progress: "40%",
      },
      {
        id: "2",
        coverUrl: "https://picsum.photos/200/301",
        title: "Long title",
        author: "John Doe",
        progress: "80%",
      },
      {
        id: "3",
        coverUrl: "https://picsum.photos/200/302",
        title: "Even Long title",
        author: "John Doe",
        progress: "50%",
      },
      {
        id: "4",
        coverUrl: "https://picsum.photos/200/303",
        title: "Even Long title",
        author: "John Doe",
        progress: "70%",
      },
    ]);

    return { keepListenings };
  },
};
</script>

<style lang="scss" scoped>
.keep-listening {
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
            font-weight: 700;
          }
          .podcast-author {
            color: var(--text-light);
          }
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
        }
      }
    }
  }
}
</style>