<template>
  <div class="accordion" id="accordion">
    <div v-for="(item, index) in this.$store.state.recipeList.values" :key="item" href="#" class="accordion-item">
        <h2 class="accordion-header" :id="'heading'+index">
         <button class="accordion-button collapsed" type="button" v-on:click="accordionClick(index)" data-bs-toggle="collapse" 
          :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse'+index">
            <div class="flexbox-item">{{ item[0] }}</div>
            <Vege v-if="item[2]==='X'" :id="'vege-'+index"/>
         </button>
       </h2>
       <div :id="'collapse'+index" class="accordion-collapse collapse" :aria-labelledby="'heading'+index" data-bs-parent="#accordion">
         <div v-if="item.hasOwnProperty(1) && !isEmptyOrSpaces(item[1])" class="accordion-body">
            <ul v-for="i in item[1].split(',')" :key="i">
              <li>{{i}}</li>
            </ul>
         </div>
         <div v-else class="accordion-body">
           Aucun ingrédient n'est présent dans la recette.
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Vege from './Vege.vue'

// Hex to css filter: https://codepen.io/sosuke/pen/Pjoqqp
export default {
  name: 'List',
  components: {
    Vege,
  },
  methods: {
    accordionClick(index) {
      window.scrollTo(0,($("#collapse"+index)[0].getBoundingClientRect().top + 100));
    },
    isEmptyOrSpaces(str) {
      return str === null || str.match(/^ *$/) !== null;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.leaf {
  margin-right:20px;
}
.accordion-button
{
  display:flex;
  align-content: center;
  justify-content: space-between;
}
.flexbox-item {
  width:100%;
  color: #42b983;
  font-size: 1.2em;
}
ul {
  text-align: left;
}
.accordion {
  margin-top:5%;
  margin-bottom:10%;
}
</style>
