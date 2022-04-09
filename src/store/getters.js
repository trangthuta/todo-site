export default {
  isLoggedIn(state) {
    return !!state.token
  },
  isActive(state) {
    return state.todos.filter(todo => todo.status == 'IN_PROGRESS');
  },
  isCompleted(state) {
     return state.todos.filter(todo => todo.status == "COMPLETED")
  }
}