<template>
  <div id="app">
   <Header />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: 'App',
  components:{
    Header
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
</style>