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
    SOCKET_ONOPEN(state) {
      state.socket.isConnected = true;
    },
    SOCKET_ONCLOSE(state) {
      state.socket.isConnected = false;
    },
    SOCKET_ONERROR(state, event) {
      console.error(state, event);
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE(state, message) {
      state.socket.message = message;
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
      console.info(state, count);
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
    },
  },
  modules: {},
};
