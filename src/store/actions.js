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
    localStorage.setItem("username", data.username);
    commit("setUser", {
      token: data.token,
      id: data.id,
      username : data.username,
    });
    
  },

  async registerForm(store, payload) {
    const response = await axios.post("/auth/register", {
      username: payload.username,
      password: payload.password,
    });
    console.log(response);
  },
  logout({ commit }) {
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    localStorage.removeItem("username")
    commit("setUser", {
      token: null,
      id: null,
      username : null,
    })
  },
  tryLogin({ commit }) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("id");
    const username = localStorage.getItem("username");

    if (token && userId) {
      commit("setUser", {
        token: token,
        id: userId,
        username: username,
      });
    }
  },
  //todos
  async getApiTodos({ commit }) {
    const response = await axios.get("/api/tasks", {
      params: {
        page: 1,
        limit: 1000000,
      },
    });
    commit("setTodos", {
      todos : response.data.items
    });
  },
  async addTodo({commit} ,payload) {
    const response = await axios.post('/api/tasks' ,{
      title : payload
    })
    commit('addTodos',response.data);
  } ,
  
  async deleTodo({commit} , id) {
     await axios.delete(`/api/tasks/${id}`)
    commit('deleteTodo',id)
  } ,
  
};


