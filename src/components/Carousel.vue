<template>
  <splide :options="options">
    <splide-slide>
      <img :src="require(`@/assets/produtos/${item.img}`)">
    </splide-slide>
    <splide-slide>
      <img :src="require(`@/assets/produtos/${item.img}`)">
    </splide-slide>
    <splide-slide>
      <img :src="require(`@/assets/produtos/${item.img}`)">
    </splide-slide>
  </splide>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
  export default { 
    name:"Carousel",
    props:["item"],
    data() {
      return {
        options: {
          rewind : true,
          width  : 800,
          gap    : '1rem',
        },
      };
    },
  }
</script>

<style scoped>
 
</style>