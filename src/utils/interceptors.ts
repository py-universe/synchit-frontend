import instance from './axiosInstance';

const axiosResponseInterceptor = store => {
  const TKN = store.getters['user/accessToken'];

  instance.interceptors.response.use(
    res => {
      return res;
    },
    async err => {
      const originalConfig = err.config;

      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await instance.post('api/v1/auth/refresh-token', {
            refreshToken: TKN,
          });

          const { accessToken } = rs.data;

          store.dispatch('user/modifyRefreshTokenAction', accessToken);

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }

      return Promise.reject(err);
    }
  );
};

export default axiosResponseInterceptor;
