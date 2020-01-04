import { stateEnhance, mutationsEnhance } from 'vuex-simplify-action';

const state = {};
const getters = {};
const mutations = {};
const actions = {};

const store = {
  namespaced: true,
  @stateEnhance('foo')
  state,
  getters,
  @mutationsEnhance('foo')
  mutations,
  actions
};

export default store;
