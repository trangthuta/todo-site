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
};
