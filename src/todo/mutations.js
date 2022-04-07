export default {
  setTodo(state, payload) {
      state.createdAt = payload.cre;
      state.userId = payload.id;
  }
};

