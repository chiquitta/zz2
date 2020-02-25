import Vue from 'vue';
import Vuex from 'vuex';
import {
  localSave,
  localRead,
} from '@/utils';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    local: localRead('local'),
  },
  mutations: {
    setLocal: (state, lang) => {
      localSave('local', lang);
      state.local = lang;
    },
  },
  actions: {
  },
  modules: {
  },
});
