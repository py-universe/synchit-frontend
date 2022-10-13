import type { ActionContext, ActionTree } from 'vuex';
import type { RootState } from './state';

/** Actions */
export const actions: ActionTree<RootState, RootState> = {
  /**
   * Loading overlay visibility
   *
   * @param context - Vuex Context
   * @param display - Visibility
   */
  setLoading(
    context: ActionContext<RootState, RootState>,
    display: boolean = false
  ) {
    context.commit('storeLoading', display);
  },
  /**
   * Loading progress bar value
   *
   * @param context - Vuex Context
   * @param progress - Percentage(0~100)
   */
  setProgress(
    context: ActionContext<RootState, RootState>,
    progress: number = 0
  ) {
    context.commit('storeProgress', progress);
  },
  /**
   * Set snackbar message.
   *
   * @param context - Vuex Context
   * @param message - Message text
   */
  setMessage(context: ActionContext<RootState, RootState>, message?: string) {
    context.commit('storeMessage', message);
  },
  /**
   * Set Error message
   *
   * @param context - Vuex Context
   * @param error - Error message etc.
   */
  setError(context: ActionContext<RootState, RootState>, error) {
    context.commit('storeError', error);
  },
};
