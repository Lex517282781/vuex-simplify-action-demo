import { stateEnhance } from 'vuex-simplify-action';

const state = {};
const getters = {};
const mutations = {};
const actions = {};

const store = {
  namespaced: true,
  @stateEnhance('foo')
  state,
  getters,
  mutations,
  actions
};

export default store;
