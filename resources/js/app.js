import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import router from './routes';
import { store } from './store/store';

import Index from './Index.vue';

require('./bootstrap');

Vue.use(VueRouter);

Vue.use(VueResource);
Vue.http.options.root = 'https://api...';

const app = new Vue({
  el: '#app',
  store,
  router,
  components: {
    index: Index,
  },
});
