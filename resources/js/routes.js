import VueRouter from 'vue-router';

// Importing conponent for the router with lazyloading
const FirstComponent = (resolve) => {
  require.ensure(['./components/FirstComponent/FirstComponent.vue'], () => {
    resolve(require('./components/FirstComponent/FirstComponent.vue'));
  }, 'user');
};


const routes = [
  {
    path: '/',
    component: FirstComponent,
    name: 'firstcomponent',
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
