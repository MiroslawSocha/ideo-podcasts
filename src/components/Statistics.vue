<template>
  <div class="statistics">
    <div class="single-item">
      <div
        class="icon-wrapper"
        style="background-color: #f1eeff; color: #9d6ef7"
      >
        <font-awesome-icon icon="book" />
      </div>
      <div class="info-wrapper">
        <span class="value">{{ statistics.listenedPodcastsCount }}</span>
        <span class="label">listened podcasts</span>
      </div>
    </div>

    <div class="single-item">
      <div
        class="icon-wrapper"
        style="background-color: #e0f3ff; color: #41c1f4"
      >
        <font-awesome-icon icon="book-open" />
      </div>
      <div class="info-wrapper">
        <span class="value">{{ statistics.pagesEquivalent }}</span>
        <span class="label">pages equivalent</span>
      </div>
    </div>
    <div class="single-item">
      <div
        class="icon-wrapper"
        style="background-color: #e7faf3; color: #57e1bb"
      >
        <font-awesome-icon icon="user" />
      </div>
      <div class="info-wrapper">
        <span class="value">{{ statistics.listenedAuthors }}</span>
        <span class="label">listened authors</span>
      </div>
    </div>
    <div class="single-item">
      <div
        class="icon-wrapper"
        style="background-color: #fae3d7; color: #f59666"
      >
        <font-awesome-icon icon="clock" />
      </div>
      <div class="info-wrapper">
        <span class="value">{{ statistics.totalTime }}</span>
        <span class="label">total time</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const statistics = ref([]);
onMounted(() => {
  getStatistics();
});

async function getStatistics() {
  const response = await axios.get("https://node.michalkuncio.com/statistics");
  statistics.value = response.data;
}
</script>

<style lang="scss" scoped>
.statistics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  .single-item {
    background: white;
    // width: auto;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 1px 1px 1px 1px #00000008;
    display: flex;
    gap: 20px;
    align-items: center;
    .icon-wrapper {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }
    .info-wrapper {
      display: flex;
      flex-direction: column;
      .value {
        font-weight: bold;
        margin-bottom: 5px;
      }
      .label {
        color: var(--text-light);
      }
    }
  }
}

@media (max-width: 1200px) {
  .statistics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

// @media (max-width: 992px) {
//   .statistics {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//   }
// }

@media (max-width: 700px) {
  .statistics {
    grid-template-columns: repeat(1, minmax(0, 1fr));

    .single-item {
      width: 200px;
    }
  }
}
</style>