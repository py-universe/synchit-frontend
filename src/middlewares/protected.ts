import store from '@/store';

/**
 * protect necessary routes
 * contains API calling utility functions
 */
function guardMyroute(to, from, next) {
  const isAuthenticated = store.getters['user/isAuthenticated'];
  console.log('AUTHENTICATED? :', isAuthenticated);
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next('/auth'); // go to '/login';
  }
}

export { guardMyroute };
