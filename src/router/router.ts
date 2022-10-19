/** Vue Router Configure */
import { nextTick } from 'vue';
import type { NavigationGuardNext, Route } from 'vue-router';
import type { Position, PositionResult } from 'vue-router/types/router';
import {
  createRouter,
  type Router,
  type RouteRecordRaw,
} from '@logue/vue2-helpers/vue-router';

import type { VuetifyGoToTarget } from 'vuetify/types/services/goto';
import goTo from 'vuetify/lib/services/goto';
import store from '@/store';

import HomePage from '@/views/Home/HomePage.vue';
import About from '@/views/Misc/AboutPage.vue';
import ErrorPage from '@/views/Misc/ErrorPage.vue';
import Auth from '@/views/Auth/Auth.vue';
import { guardMyroute } from '@/middlewares/protected';

/** Router Config */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    beforeEnter: guardMyroute,
    component: About,
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
  },
  {
    path: '*',
    name: 'error',
    component: ErrorPage,
  },
];

const router: Router = createRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  scrollBehavior: async (
    to: Route,
    _from: Route,
    savedPosition: void | Position
  ): Promise<PositionResult> => {
    // https://vuetifyjs.com/features/scrolling/#router3067306e4f7f7528
    let scrollTo: VuetifyGoToTarget = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return { x: 0, y: await goTo(scrollTo) };
  },
  routes,
});

router.beforeEach(
  async (_to: Route, _from: Route, next: NavigationGuardNext<Vue>) => {
    // Show Loading
    store.dispatch('setLoading', true);
    await nextTick();

    // @see https://github.com/championswimmer/vuex-persist#how-to-know-when-async-store-has-been-replaced
    // await store.restored;

    next();
  }
);

router.afterEach(() => {
  // Hide Loading
  store.dispatch('setLoading', false);
});

export default router;
