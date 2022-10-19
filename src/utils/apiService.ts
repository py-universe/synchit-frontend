import instance from './axiosInstance';
import store from '@/store';

/**
 * Learn how to refresh tokens with axios interceptors
 * contains API calling utility functions
 */
async function apiService(endpoint, method, data) {
  const TKN = store.getters['user/accessToken'];
  let token = '';

  if (TKN !== undefined && TKN !== '' && TKN !== null) {
    token = `Token ${TKN}`;
  }

  const config = {
    url: endpoint,
    method: method,
    data: data !== undefined ? data : null,

    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
  };

  return instance(config).then(response => response.data);
}

export { apiService };
