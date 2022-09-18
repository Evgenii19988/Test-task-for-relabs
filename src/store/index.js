import { createStore } from "vuex";
import events from "./modules/socket-data";

export default createStore({
  modules: {
    events,
  },
});
