<template>
<img :id="Id" class="leaf" title="Plat végé"  data-bs-placement="top" src="../assets/leaf-solid.svg" alt="Vege"/>
</template>

<script>

// Hex to css filter: https://codepen.io/sosuke/pen/Pjoqqp
export default {
  name: 'Vege',
  props: {
    Id: String
  },
}
</script>

<style scoped>
.leaf {
  filter: invert(86%) sepia(37%) saturate(5962%) hue-rotate(35deg) brightness(110%) contrast(79%);
  width: 30px;
}
</style>
