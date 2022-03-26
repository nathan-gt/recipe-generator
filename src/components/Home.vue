<template>
  <div class="accordion" id="accordion">
    <div v-for="(item, index) in this.$store.state.recipeList.values" :key="item" href="#" class="accordion-item">
        <h2 class="accordion-header" :id="'heading'+index">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
          :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse'+index">
            <div class="flexbox-item">{{ item[0] }}</div>
            <img v-if="item[2]==='X'" class="leaf" src="../assets/leaf-solid.svg" alt="Vege"/>
         </button>
       </h2>
       <div :id="'collapse'+index" class="accordion-collapse collapse" :aria-labelledby="'heading'+index" data-bs-parent="#accordion">
         <div class="accordion-body">
            <ul v-for="i in item[1].split(',')" :key="i">
              <li>{{i}}</li>
            </ul>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
// Hex to css filter: https://codepen.io/sosuke/pen/Pjoqqp
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.leaf {
  filter: invert(86%) sepia(37%) saturate(5962%) hue-rotate(35deg) brightness(110%) contrast(79%);
  display:inline-flex;
  width: 30px;
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
</style>
