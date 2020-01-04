import service from '@/service';
import actionsEnhance from 'vuex-simplify-action';

const state = {};
const getters = {};
const mutations = {};
const actions = {
  async getfoo() {
    const res = await service.getfoo();
    if (!res) return false;

    return res;
  },
  async getbaz() {
    const res = await service.getbaz();
    if (!res) return false;

    return res;
  },
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
  @actionsEnhance([
    { name: 'foo', action: 'getfoo' },
    { name: 'bar', action: 'getbar' },
    { name: 'baz', action: 'getbaz' }
  ])
  actions
};

export default store;
