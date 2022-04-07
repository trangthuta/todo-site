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
};
