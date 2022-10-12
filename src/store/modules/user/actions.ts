import type { ActionContext, ActionTree } from 'vuex';
import type { UserState } from './state';
import type { RootState } from '@/store/state';

/** Action */
export const actions: ActionTree<UserState, RootState> = {
  /**
   * Switch Dark/Light mode.
   *
   * @param context - Vuex Context
   */
  setThemeDark(context: ActionContext<UserState, RootState>, mode: boolean) {
    context.commit('storeThemeDark', mode);
  },
  /**
   * Change locale.
   *
   * @param context - Vuex Context
   * @param locale - Locale code
   */
  setLocale(context: ActionContext<UserState, RootState>, locale: string) {
    context.commit('storeLocale', locale);
  },
};
