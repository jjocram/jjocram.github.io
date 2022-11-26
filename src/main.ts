import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faGithub,
  faGitlab,
  faTwitter,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faGitlab, faTwitter, faLinkedin, faTelegram);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/main.scss";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
