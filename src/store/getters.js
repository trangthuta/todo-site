export default {
  isLoggedIn(state) {
    return !!state.token
  },
  getUsername(state){
    return state.username
  },
  isActive(state) {
    return state.todos.filter(todo => todo.status == 'IN_PROGRESS');
  },
  isCompleted(state) {
     return state.todos.filter(todo => todo.status == "COMPLETED")
  },
  getTodos(state){
    return state.todos
  }

}