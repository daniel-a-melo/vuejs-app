import Vue from 'vue';

new Vue({
  el : "#app",
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
  }
});
