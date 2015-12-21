import Vue from 'vue';
import Counter from './components/counter.vue';

new Vue({
  el : '#app',
  data : {
    message : 'Yay! Vued!',
    todos : [
      {text : 'Bla1'},
      {text : 'Bla2'}
    ]
  },
  methods : {
    reverseMessage : function() {
      this.message = this.message.split('').reverse().join('');
    }
  },
  components : {
    counter : Counter
  }
});
