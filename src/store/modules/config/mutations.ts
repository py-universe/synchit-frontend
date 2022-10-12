/** Config store */
import type { MutationTree } from 'vuex';
import type { ConfigState } from './state';

/** Mutations */
export const mutations: MutationTree<ConfigState> = {
  storeThemeDark(s) {
    s.themeDark = !s.themeDark;
  },
  storeLocale(s, locale: string) {
    s.locale = locale;
  },
};
