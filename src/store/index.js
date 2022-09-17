import { createStore } from "vuex";
import events from "./modules/home-events";

export default createStore({
  modules: {
    events,
  },
});
