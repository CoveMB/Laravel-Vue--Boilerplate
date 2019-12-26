import VueRouter from 'vue-router';

// Importing conponent for the router with lazyloading
const WelcomeComponent = (resolve) => {
  require.ensure(['./components/WelcomeComponent/WelcomeComponent.vue'], () => {
    resolve(require('./components/WelcomeComponent/WelcomeComponent.vue'));
  }, 'user');
};


const routes = [
  {
    path: '/',
    component: WelcomeComponent,
    name: 'welcomecomponent',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
