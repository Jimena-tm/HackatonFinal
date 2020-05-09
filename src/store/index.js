import Vue from "vue";
import Vuex from "vuex";
import authStore from "@/views/auth/store";
import accountStore from "@/views/account/store";
import messagesStore from "@/views/messages/store";
import usersStore from "@/views/home/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authStore,
    accountStore,
    messagesStore,
    usersStore,
  },
});
