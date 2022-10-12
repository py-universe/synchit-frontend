/** Config store */
import type { GetterTree } from 'vuex';
import type { RootState } from '@/store/state';
import type { ConfigState } from './state';

/** Getters */
export const getters: GetterTree<ConfigState, RootState> = {
  themeDark: (s): boolean => s.themeDark,
  locale: (s): string => s.locale,
};
