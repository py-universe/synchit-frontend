import type { ActionContext, ActionTree } from 'vuex';
import type { UserState } from './state';
import type { RootState } from '@/store/state';

/** Action */
export const actions: ActionTree<UserState, RootState> = {
  modifyAuthStateAction(context: ActionContext<UserState, RootState>, payload) {
    context.commit('modifyAuthState', payload);
  },

  modifyUserIdAction(context: ActionContext<UserState, RootState>, payload) {
    context.commit('modifyUserId', payload);
  },

  modifyAccessTokenAction(
    context: ActionContext<UserState, RootState>,
    payload
  ) {
    context.commit('modifyAccessToken', payload);
  },

  modifyRefreshTokenAction(
    context: ActionContext<UserState, RootState>,
    payload
  ) {
    context.commit('modifyRefreshToken', payload);
  },

  logoutAction(context: ActionContext<UserState, RootState>) {
    context.commit('logout');
  },

  loginAction: (context: ActionContext<UserState, RootState>, payload) => {
    context.commit('login', payload);
  },
};
