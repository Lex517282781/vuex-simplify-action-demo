import service from '@/service';
import { actionEnhance } from 'vuex-simplify-action';

const state = {};
const getters = {};
const mutations = {};
const actions = {
  @actionEnhance('foo', state, mutations)
  async getfoo() {
    const res = await service.getfoo();
    if (!res) return false;

    return res;
  },
  @actionEnhance('baz', state, mutations)
  async getbaz() {
    const res = await service.getbaz();
    if (!res) return false;

    return res;
  },
  @actionEnhance('bar', state, mutations)
  async getbar({ dispatch }) {
    const res = await service.getbar();
    if (!res) return false;

    const next = function() {
      dispatch('getbaz');
    };
    return {
      res,
      next
    };
  }
};

const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default store;
