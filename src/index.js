import Vue from 'vue';
import VueRouter from 'vue-router';
import Counter from './components/counter.vue';
import Reverse from './components/reverse.vue';

Vue.use(VueRouter);

var App = Vue.extend({});

var router = new VueRouter();

router.map({
  '/reverse': {
    component: Reverse
  },
  '/counter': {
    component: Counter
  }
});

router.start(App, '#app');
