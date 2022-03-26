<template>
  <div class="container">
    <h1 class="display-1">Générateur de recettes familial</h1>
  <img alt="graphic design is my passion" src="./assets/graphic_design_is_my_passion.jpg" style="width:50%; margin-bottom:20px">
  <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import store from '@/store/index.js';

// Loads the state variable
store.dispatch('update');

export default {
  name: 'App',
  components: {
    Home
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
</style>
