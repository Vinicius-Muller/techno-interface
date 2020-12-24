<template>
  <splide :options="options" class="carousel_box">
    <splide-slide v-for="(item, index) in carrinho" :key="index">
      <img :src="require(`@/assets/produtos/${item.img}`)">
    </splide-slide>
  </splide>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
  export default { 
    name:"Carousel",
    props:["carrinho"],
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
 .carousel_box {
   width: 50%;
   margin-left: 10px;
   margin-top: 10px;
   margin-bottom: 10px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
 }

</style>