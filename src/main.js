import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUserSecret,
  faPodcast,
  faSignOutAlt,
  faStar,
  faHeart,
  faCalendar,
  faBookmark,
  faSearch,
  faCog,
  faArrowRight,
  faHome,
  faBell,
  faPlayCircle,
  faPauseCircle,
  faFileAudio,
  faListAlt,
  faBook,
  faBookOpen,
  faUser,
  faClock,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);
library.add(faPodcast);
library.add(faSignOutAlt);
library.add(faStar);
library.add(faHeart);
library.add(faCalendar);
library.add(faBookmark);
library.add(faSearch);
library.add(faCog);
library.add(faArrowRight);
library.add(faHome);
library.add(faBell);
library.add(faPlayCircle);
library.add(faPauseCircle);
library.add(faFileAudio);
library.add(faListAlt);
library.add(faBook);
library.add(faBookOpen);
library.add(faUser);
library.add(faClock);
library.add(faMusic);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
