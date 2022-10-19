import type { GetterTree } from 'vuex';
import type { RootState } from '@/store/state';
import type { UserState } from './state';

/** Getters */
export const getters: GetterTree<UserState, RootState> = {
  isAuthenticated: (state): boolean => state.isAuthenticated,
  displayName: (state): string => state.displayName,
  accessToken: (state): string => state.accessToken,
  refreshToken: (state): string => state.refreshToken,
  userId: (state): string => state.userId,
};
