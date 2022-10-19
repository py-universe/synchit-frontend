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
    // keep track of the route just before visiting the login page
    const loginPath = window.location.pathname;
    next({ name: 'auth', query: { redirect: loginPath } }); // go to '/login';
  }
}

export { guardMyroute };
