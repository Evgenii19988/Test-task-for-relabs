import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueNativeSock from "vue-native-websocket-vue3";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .use(VueNativeSock, "wss://test.relabs.ru/event", {
    store: store,
  })
  .mount("#app");
