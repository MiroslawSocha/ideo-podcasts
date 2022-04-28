<template>
  <div class="player">
    <div class="mode-select">
      <button
        @click="selectMode('play')"
        class="mode-select-btn"
        :class="{ active: currentMode === 'play' }"
      >
        <font-awesome-icon icon="file-audio" />
      </button>
      <button
        @click="selectMode('list')"
        class="mode-select-btn"
        :class="{ active: currentMode === 'list' }"
      >
        <font-awesome-icon icon="list-alt" />
      </button>
    </div>

    <div v-if="currentMode === 'play'">
      <div class="waveform" id="waveform"></div>
      <div v-if="currentTrack" class="now-playing">
        <span class="title">{{ currentTrack.title }}</span>
        <span class="author">Author: {{ currentTrack.author }}</span>
      </div>
      <div class="audio-controls">
        <button @click="togglePlay" class="toggle-audio-btn">
          <font-awesome-icon v-if="isPlaying" icon="pause-circle" />
          <font-awesome-icon v-else icon="play-circle" />
        </button>
      </div>
      <div v-if="currentTrack" class="track-select">
        <div
          class="track"
          @click="selectTrack(track)"
          :class="{ active: (track.id = currentTrack.id) }"
          v-for="track in recentTracks"
          :key="track.id"
        >
          <span
            v-if="isPlaying && track.id === currentTrack.id"
            class="playing-indicator"
          >
            <font-awesome-icon icon="music" />
          </span>
          <div class="cover-wrapper">
            <img :src="track.coverUrl" :alt="track.title" />
          </div>
          <div class="info-wrapper">
            <span class="podcast-title">{{ track.title }}</span>
            <span class="podcast-author">{{ track.author }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>xd</h1>
    </div>
  </div>
</template>

<script>
import WaveSurfer from "wavesurfer.js";
import { ref, onMounted } from "vue";

export default {
  name: "Player",
  components: {},
  setup() {
    let wavesurferInstance = null;
    const currentMode = ref("play");
    const isPlaying = ref(false);
    const currentTrack = ref("test");
    const recentTracks = ref([
      {
        id: 1,
        title: "Abc",
        author: "John Doe",
        coverUrl: "https://picsum.photos/200/300",
        soundFileUrl:
          "https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_apc_64kb.mp3",
      },
      {
        id: 2,
        title: "Long title",
        author: "John Doe",
        coverUrl: "https://picsum.photos/200/301",
        soundFileUrl:
          "https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_ns.mp3",
      },
      {
        id: 3,
        title: "Even Long title",
        author: "John Doe",
        coverUrl: "https://picsum.photos/200/302",
        soundFileUrl:
          "https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_sdm.mp3",
      },
    ]);

    const recentTracksExtended = ref([
      {
        id: 1,
        title: "Abc",
        author: "John Doe",
        coverUrl: "https://picsum.photos/200/300",
        soundFileUrl:
          "https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_apc_64kb.mp3",
      },
      {
        id: 2,
        title: "Long title",
        author: "John Doe",
        coverUrl: "https://picsum.photos/200/301",
        soundFileUrl:
          "https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_ns.mp3",
      },
      {
        id: 3,
        title: "Even Long title",
        author: "John Doe",
        coverUrl: "https://picsum.photos/200/302",
        soundFileUrl:
          "https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_sdm.mp3",
      },
      {
        id: 4,
        title: "Wewew",
        author: "John Doe x",
        coverUrl: "https://picsum.photos/200/304",
        soundFileUrl:
          "https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_sdm.mp3",
      },
      {
        id: 5,
        title: "Even Long title 42242",
        author: "John Doe",
        coverUrl: "https://picsum.photos/200/305",
        soundFileUrl:
          "https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_sdm.mp3",
      },
    ]);

    onMounted(() => {
      currentTrack.value = recentTracks.value[0];
      initWaveformPlayer();
    });

    function initWaveformPlayer() {
      wavesurferInstance = WaveSurfer.create({
        container: "#waveform",
        waveColor: "violet",
        progressColor: "purple",
        cursorWidth: 2,
        cursorColor: "#f7a206",
      });

      wavesurferInstance.load(
        "https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_apc_64kb.mp3"
      );
    }

    function selectMode(mode) {
      currentMode.value = mode;
    }

    function togglePlay() {
      isPlaying.value = !isPlaying.value;
      if (!isPlaying.value) {
        wavesurferInstance.pause();
      } else {
        wavesurferInstance.play();
      }
    }

    function selectTrack(track) {
      isPlaying.value = false;
      currentTrack.value = track;
      wavesurferInstance.load(track.soundFileUrl);
    }

    function selectTrackFromExtended(track) {
      isPlaying.value = false;
      currentTrack.value = track;
      wavesurferInstance.load(track.soundFileUrl);
    }

    return {
      currentMode,
      selectMode,
      isPlaying,
      togglePlay,
      recentTracks,
      recentTracksExtended,
      selectTrack,
      selectTrackFromExtended,
      currentTrack,
    };
  },
};
</script>

<style lang="scss" scoped>
.player {
  background: white;
  border-radius: 20px;
  padding: 20px;
  .mode-select {
    display: flex;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 40px;
    .mode-select-btn {
      padding: 20px;
      width: 50%;
      color: white;
      background: var(--bg-gray);
      color: var(--text);
      &.active {
        background: var(--primary);
        color: white;
      }
    }
  }
  .now-playing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .title {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 5px;
    }
    .author {
      font-size: 16px;
      color: var(--text-light);
    }
  }
  .audio-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    .toggle-audio-btn {
      font-size: 50px;
      color: orange;
    }
  }

  .track-select {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .track {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 10px 20px;
      border-radius: 10px;
      background: var(--bg-gray);
      position: relative;
      cursor: pointer;
      &.active {
        border: 1px solid var(--primary);
      }
      .playing-indicator {
        background: white;
        padding: 5px;
        border-radius: 50%;
        position: absolute;
        left: 0;
        transform: translateX(-50%);
      }
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
</style>
