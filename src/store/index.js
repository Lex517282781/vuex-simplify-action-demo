import Vue from 'vue';
import Vuex from 'vuex';

import home from '@/views/home/store';

Vue.use(Vuex);

let common = {
  state: {},
  getters: {},
  mutations: {},
  actions: {}
};

export default new Vuex.Store({
  ...common,
  modules: {
    home
  }
});
