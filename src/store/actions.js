import axios from "axios";
export default {

  async login({ commit }, payload) {
    const response = await axios.post("/auth/login", {
      username: payload.username,
      password: payload.password,
    });
    const data = response.data;
    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.id);
    commit("setUser", {
      token: data.token,
      id: data.id,
    });
  },

  async registerForm(store, payload) {
    const response = await axios.post("/auth/register", {
      username: payload.username,
      password: payload.password,
    });
    console.log(response);
  },
logout({commit}) {
  localStorage.removeItem('token'),
  localStorage.removeItem('id')
  commit('setUser',{
    token: null ,
    id : null
  })
} ,
tryLogin({
  commit
}) {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('id');
  if (token && userId) {
      commit('setUser', {
          token: token,
          id: userId
      });
  }
},

////todos
 async getApiTodos({commit} ){
 const todos = await axios.get('/api/tasks', {
   params : {
     page : 1 ,
     limit : 10
   }
 })
 const dataResponse = todos.data.items 
 const todosData = [];
 for (const data of dataResponse) {
  todosData.push({
         id: data.id,
         content: data.content,
         status: data.status,
         createdAt: data.created_at
     });
 }
 commit('setTodos',  {
   todos :todosData
 });


 commit('setTodos' ,{
   todos : todos.data.items
 })
 }
};
