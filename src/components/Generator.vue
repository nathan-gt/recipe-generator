<template>
  <div class="generator-container">
      <div id="nb">
        <label for="nb-txt">Nombre de recettes à générer: </label>
        <input maxlength="2" type="textbox" value="5" id="nb-txt"/>
      </div>
      <div id="nbvege">
        <label for="nb-txt">Nombre de recettes végées à inclure: </label>
        <input maxlength="2" type="textbox" value="0" id="nb-txt"/>
        <Vege :id="'generator-vege'"/>
      </div>
    <a id="adv-options" data-bs-toggle="collapse" href="#adv-options-body" role="button" aria-expanded="false" aria-controls="adv-options-body">
      Options avancées
    </a>
    <div class="collapse" id="adv-options-body">
      <div class="card card-body">
          <div id="doubles">
            <label for="doubles-chk">Éviter les doublons?</label>
            <input type="checkbox" checked="true" id="doubles-chk"/>
          </div>
          <div id="pins">
            <label for="pins-chk">Inclure absolument les recettes épinglées?</label>
            <input type="checkbox" checked="true" id="pins-chk"/>
          </div>
          <div id="blacklist">
            <label for="blacklist-chk">Ignorer les recettes mises sur la blacklist?</label>
            <input type="checkbox" checked="true" id="blacklist-chk"/>
          </div>
      </div>
    </div>
    <button type="button" class="btn btn-success" v-on:click="SubmitHandler()">Générer</button> 
  </div>
</template>

<script>
import $ from 'jquery';
import Vege from './Vege.vue'

export default {
  name: 'Generator',
  components: {
    Vege
  },
  methods: {
    /* params:
          -> nbRecipes : number of recipes to generate (required)
          -> nbVege : number of vege recipes to generate
          -> lstPinned : array of the ids of pinned recipes to absolutely include in the generation
    */
    Generate(params) {
      let recipes = [];
      let generated;
      if(typeof params.nbVege == "undefined")
      {
        for (let i = 0; i < params.nbRecipes; i++) {
          do {
            generated = Math.floor(Math.random()* this.$store.state.recipeList.values.length);
          } while (recipes.includes(generated))
          recipes[i] = generated;
        }
      }
      this.$store.dispatch("updateGeneratedList", {list: recipes});
    },

    SubmitHandler() {
      let params = {
        nbRecipes : $("#nb-txt").val()
      }
      this.Generate(params);
    },
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
