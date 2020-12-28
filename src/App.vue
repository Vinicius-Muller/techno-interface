<template>
  <div id="app">
   <Products />
  </div>
</template>

<script>
import Products from '@/components/Products.vue';
export default {
  name: 'App',
  components:{
    Products
  }
}
</script>

<style>
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html {
  font-family:'Poppins', sans-serif;
}

body {
   background: linear-gradient(to right, #1a1a1a 30%, #ffffff 30%);
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.2s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>