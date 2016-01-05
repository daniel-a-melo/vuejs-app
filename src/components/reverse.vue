<template>
  <p>{{message}}</p>
  <input v-model="message" />
  <button v-on:click="reverseMessage">Reverse Message</button>

  <ul>
     <li v-for="todo in todos">{{todo.text}}</li>
  </ul>
</template>

<script>

import Counter from './counter.vue';

export default {
  data () {
    return {
      message : 'Yay! Vued!',
      todos : [
        {text : 'Bla1'},
        {text : 'Bla2'}
      ]
    };
  },
  methods : {
    reverseMessage () {
      this.message = this.message.split('').reverse().join('');
    }
  }

}
</script>
