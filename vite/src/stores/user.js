import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useUserStore = defineStore("user", {
  state: () =>
    useLocalStorage("netflux_user", {
      username: null,
    }),
  getters: {
    isAuthenticated: (state) => state.username !== null,
  },
  actions: {
    login(username) {
      this.username = username;
    },
    logout() {
      this.username = null;
    },
  },
});
