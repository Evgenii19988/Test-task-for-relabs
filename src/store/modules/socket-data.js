import main from "/src/main";

export default {
  state: {
    socket: {
      isConnected: false,
      message: "",
      reconnectError: false,
      heartBeatInterval: 50000,
      heartBeatTimer: 0,
    },
  },
  getters: {
    socketData(state) {
      return state.socket.message;
    },
  },
  mutations: {
    SOCKET_ONOPEN(state, event) {
      main.config.globalProperties.$socket = event.currentTarget;
      state.socket.isConnected = true;
      state.socket.heartBeatTimer = setInterval(() => {
        const message = "";
        state.socket.isConnected &&
          main.config.globalProperties.$socket.sendObj({
            code: 200,
            msg: message,
          });
      }, state.socket.heartBeatInterval);
    },
    SOCKET_ONCLOSE(state, event) {
      state.socket.isConnected = false;

      clearInterval(state.socket.heartBeatTimer);
      state.socket.heartBeatTimer = 0;
      console.log(new Date());
      console.log(event);
    },

    SOCKET_ONERROR(state, event) {
      console.error(state, event);
    },

    SOCKET_ONMESSAGE(state, message) {
      state.socket.message = message;
    },

    SOCKET_RECONNECT(state, count) {
      console.info(state, count);
    },

    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
    },
  },
  modules: {},
};
