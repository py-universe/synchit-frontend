import type { MutationTree } from 'vuex';
import type { RootState } from './state';

/** Mutations */
export const mutations: MutationTree<RootState> = {
  /**
   * Store loading
   *
   * @param s - Vuex state
   * @param display - Payload
   */
  storeLoading(s, display: boolean) {
    s.loading = display;
  },
  /**
   * Store progress
   *
   * @param s - Vuex state
   * @param progress - Payload
   */
  storeProgress(s, progress: number) {
    s.progress = progress;
    s.loading = true;
  },
  /**
   * Store snackbar text
   *
   * @param s - Vuex state
   * @param message - Payload
   */
  storeMessage(s, message: string) {
    s.message = message;
  },
  /**
   * Store error message
   *
   * @param s - Vuex state
   * @param error - Payload
   */
  storeError(s, error: string) {
    s.error = error;
  },
};
