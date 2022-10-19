// Follow this tutorial to learn how to modularize the store
// https://medium.com/swlh/building-large-scale-applications-with-vuex-6d7e8ce0dfef

// Also follow this Stackoverflow link

// https://stackoverflow.com/questions/64404599/how-to-modularize-vuex-into-different-folders-and-files

import type { StoreOptions } from 'vuex';
import { createStore } from '@logue/vue2-helpers/vuex';
import VuexPersistence from 'vuex-persist';
import type { RootState } from './state';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

// Modules
import ConfigModule from './modules/config';
import UserModule from './modules/user';

/** VuexStore */
const store: StoreOptions<RootState> = {
  // https://vuex.vuejs.org/guide/strict.html#development-vs-production
  strict: import.meta.env.DEV,
  state,
  getters,
  mutations,
  actions,
  modules: {
    config: ConfigModule,
    user: UserModule,
  },
  plugins: [
    new VuexPersistence({
      key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE || 'vuex',
      storage: window.localStorage,
      modules: ['config', 'user'],
    }).plugin,
  ],
};

export default createStore(store);
