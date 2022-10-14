import type { MutationTree } from 'vuex';
import type { UserState } from './state';

/** Mutations */
export const mutations: MutationTree<UserState> = {
  modifyAuthState: (state, payload) => {
    state.isAuthenticated = payload;
  },

  modifyUserId: (state, payload) => {
    state.userId = payload;
  },

  modifyAccessToken: (state, payload) => {
    state.accessToken = payload;
  },

  modifyRefreshToken: (state, payload) => {
    state.refreshToken = payload;
  },

  logout: state => {
    state.isAuthenticated = false;
    state.accessToken = '';
    state.refreshToken = '';
    state.userId = '';
    state.displayName = '';
  },

  login: (state, payload) => {
    const accessToken = payload.access_token;
    const refreshToken = payload.refresh_token;
    const userId = payload.uid;
    const displayName = payload.display_name;

    state.isAuthenticated = true;
    state.accessToken = accessToken;
    state.refreshToken = refreshToken;
    state.userId = userId;
    state.displayName = displayName;
    // then do all the route change here... router.push()
  },
};
