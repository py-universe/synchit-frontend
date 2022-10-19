import type { Module } from 'vuex';
import type { ConfigState } from './state';
import type { RootState } from '@/store/state';
import { state } from './state';
import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';

/** VuexStore */
const ConfigModule: Module<ConfigState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default ConfigModule;
