<template>
  <div class="generator-container" v-if="this.$store.state.generatedList.length > 0">
    Plats générés:
    <span v-for="(item) in this.$store.state.generatedList" :key="item">
        {{this.$store.state.recipeList.values[item][0]}}, 
    </span>
  </div>
</template>

<script>
import $ from 'jquery';
import Vege from './Vege.vue'

export default {
  name: 'Generator',
  components: {
    //Vege
  },
}
</script>

<style scoped>
.generator-container {
  display: flex;
  width: 100%;
  border: 2px solid rgb(120, 148, 126);
  border-radius: 5px;
  padding: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: center;
  justify-content: space-around;
}

.generator-container > div {
  margin:10px;
}

input[type=checkbox] {
  border-radius: 2px;
  transform: scale(1.25);
}
input[type=textbox] {
  width: 25px;
  border-radius: 4px;
  border: 1px solid gray;
  text-align: center;
  padding:0;
}
input[type=textbox]:focus {
  outline: rgba(25, 134, 49, 0.336) solid 1px;
  box-shadow: 0 0px 5px rgba(25, 134, 49, 0.678);
}

#adv-options {
  text-align: left;
  width:100%;
}
#adv-options-body {
  width:100%;
}

label {
  margin: 0px 10px 0px 10px;
}

button {
  margin-top:20px;
}

.leaf {
  width: 20px;
  margin-left: 10px;
}

</style>
