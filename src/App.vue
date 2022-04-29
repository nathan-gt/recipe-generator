<template>
  <div class="container">
    <h1 class="display-1">Générateur de recettes familial</h1>
  <Generator/>
  <List/>
  </div>
</template>

<script>
import Generator from './components/Generator.vue';
import List from './components/List.vue';
import store from '@/store/index.js';

// Loads the data in the state variable
store.dispatch('updateData');

export default {
  name: 'App',
  components: {
    Generator,
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 60%;
}

@media screen and (max-width: 750px) {
  .container {
    max-width: 100%;
  }
}
</style>
