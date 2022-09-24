// import Vue from "vue";
// import Vuex from "vuex";
import { createStore } from "vuex";

import axios from "axios";
console.log("Hello");
// Vue.use(Vuex);
console.log("Hello");
const store = createStore({
  state: {},
  actions: {
    GET_USERS_FROM_API({ commit }) {
      return axios("http://localhost:3000/users", {
        method: "GET",
      }).then((response) => {
        commit("SET_USERS_TO_VUEX", response.data);
      });
    },
  },
  mutations: {
    //Change
    SET_USERS_TO_VUEX: (state, users) => {
      state.users = users;
    },
  },
  getters: {
    USERS(state) {
      return state.users;
    },
  },
});

export default store;
