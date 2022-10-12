import type { Module } from 'vuex';
import type { UserState } from './state';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import type { RootState } from '@/store/state';

/** VuexStore */
const UserModule: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default UserModule;
