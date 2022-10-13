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
    state.username = '';
  },

  login: (state, payload) => {
    const accessToken = payload['accessToken'];
    const refreshToken = payload['refreshToken'];
    const userId = payload['userId'];
    const username = payload['username'];

    state.isAuthenticated = true;
    state.accessToken = accessToken;
    state.refreshToken = refreshToken;
    state.userId = userId;
    state.username = username;
  },
};
