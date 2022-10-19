/** Vue main script */
import Vue from 'vue';

import router from '@/router/router';
import store from '@/store';
import vuetify from './plugins/vuetify';
import teleport from 'vue2-teleport';
import axiosResponseInterceptor from './utils/interceptors';

import App from '@/App.vue';

Vue.config.productionTip = false;
Vue.component('Teleport', teleport);

axiosResponseInterceptor(store);

const app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
});

app.$mount('#app');
