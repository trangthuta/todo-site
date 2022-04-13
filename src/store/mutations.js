export default {
  setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.id;
      state.username = payload.username
  },
  setTodos(state,payload) {
    state.todos = payload.todos
  },
  addTodos(state, payload) {
    state.todos.unshift(payload);
},
 deleteTodo(state, id) {
  state.todos = state.todos.filter(t => t.id !== id);
}
};