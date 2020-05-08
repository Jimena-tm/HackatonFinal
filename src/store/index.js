import Vue from 'vue';
import Vuex from 'vuex';
import authStore from '@/views/auth/store'
import accountStore from '@/views/account/store'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    authStore,
    accountStore,
  },
});
