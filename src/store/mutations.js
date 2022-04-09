export default {
  setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.id;
  },
  setTodos(state,payload) {
    state.todos = payload.todos
  }
};