export default {
  setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.id;
      state.username = payload.username
  },
  setTodos(state,payload) {
    state.todos = payload.todos
  }
};