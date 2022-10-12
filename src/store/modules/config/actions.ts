/** Config store */
import type { ActionContext, ActionTree } from 'vuex';
import type { ConfigState } from './state';
import type { RootState } from '@/store/state';

/** Action */
export const actions: ActionTree<ConfigState, RootState> = {
  /**
   * Switch Dark/Light mode.
   *
   * @param context - Vuex Context
   */
  setThemeDark(context: ActionContext<ConfigState, RootState>, mode: boolean) {
    context.commit('storeThemeDark', mode);
  },
  /**
   * Change locale.
   *
   * @param context - Vuex Context
   * @param locale - Locale code
   */
  setLocale(context: ActionContext<ConfigState, RootState>, locale: string) {
    context.commit('storeLocale', locale);
  },
};
