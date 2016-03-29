import Vue from 'vue';
import VueRouter from 'vue-router';
import Counter from './components/counter.vue';
import Reverse from './components/reverse.vue';
import './components/hello/hello-component';

Vue.use(VueRouter);

var App = Vue.extend({});

var router = new VueRouter();

router.map({
  '/reverse': {
    component: Reverse
  },
  '/counter': {
    component: Counter
  },
  '/hello' : {
    component : {
      template: '<div><hello-component /></div>'
    }
  }
});

router.start(App, '#app');
