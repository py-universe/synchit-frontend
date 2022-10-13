import { useStore } from '@logue/vue2-helpers/vuex';

const API_URL = 'http://127.0.0.1:8000';

/**
 *
 */
async function apiService(endpoint, method, data) {
  const store = useStore();
  const TKN = store.state.user.accessToken;

  let token = '';

  if (TKN !== undefined && TKN !== '' && TKN !== null) {
    token = `Token ${TKN}`;
  }

  endpoint = `${API_URL}/${endpoint}`;

  const response = await fetch(endpoint, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: data !== undefined ? JSON.stringify(data) : null,
  });

  return response.json();
}

export { apiService };
