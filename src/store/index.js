import { createStore } from "vuex";
import socketData from "./modules/socket-data";

export default createStore({
  modules: {
    socketData,
  },
});
