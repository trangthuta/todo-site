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
    commit('setTodos' , {
      todos : []
    })
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
    let todosResponse = response.data.items;
    
    let todoArrays = [];
    for (let i = 0; i <= todosResponse.length - 1; i++) {
      let newObject = {
        createdAt:todosResponse[i].createdAt ,
        id: todosResponse[i].id,
        title: todosResponse[i].title,
        status: todosResponse[i].status,
      }
      todoArrays.push(newObject)
    }
    commit("setTodos", {
      todos : todoArrays
    });
  },
  async addTodo({commit} ,payload) {
    const data = await axios.post('/api/tasks' ,{
      title : payload
    })
    console.log(data.data.items)
    commit('setTodo',data.data.items)
  } ,

  async updateTodo({commit} , payload) {
    const  data = await axios.patch(`/api/tasks/${payload.id}`,{
     title : payload.title,
     status : payload.status,
    })
    commit('setTodo',data.data.items)
  },
  async deleTodo({commit} , payload) {
    const  data = await axios.delete(`/api/tasks/${payload.id}`)
    commit('setTodo',data.data.items)
  } ,
  async updateTodoCompleted({commit} , payload) {
    const  data = await axios.put(`/api/tasks/${payload.id}` , {
      status : 'COMPLETED',
    })
    commit('setTodo',data.data.items)
  }
};


