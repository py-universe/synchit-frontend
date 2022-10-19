import type { GetterTree } from 'vuex';
import type { RootState } from './state';

/** Getters */
export const getters: GetterTree<RootState, RootState> = {
  loading: (s): boolean => s.loading,
  progress: (s): number => s.progress,
  message: (s): string | undefined => s.message,
  error: (s): string | undefined => s.error,
};
