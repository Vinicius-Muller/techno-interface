<template>
  <header class="header"> 
    <img class="logo" src="../assets/techno.svg" alt="Techno">
  
    <div class="carrinho_menu" @click="abrirCarrinho()">
      <p>{{carrinhoTotal | numeroPreco}}</p>
    </div>

    <div v-if="carrinhoAtivo" class="modal_carrinho" @click="fecharCarrinho">
      <section class="carrinho_content">
        <div class="carrinho_item">
          <Carousel :carrinho="carrinho"/>
          <div style="width:50%; padding:10px;">
          <div class="item" v-for="(info, index) in carrinho" :key="index">
            <h2>{{info.nome}}</h2>
            <p>{{info.preco | numeroPreco}}</p>
            <button class="delete" @click="removerItem(index)">
              <img src="@/assets/remove.svg" alt="deletar item">
            </button>
          </div>
          </div>
        </div>
        <div style="display:flex;">
        <div style="display:flex; flex-direction:column; align-items: center; margin-left:130px;">
          <input type="checkbox">
          <img class="card" src="@/assets/visa.svg" alt="pague com visa">
        </div>
        <div style="display:flex; flex-direction:column; align-items: center; margin-left:30px;">
          <input type="checkbox">
          <img class="card" src="@/assets/mastercard.svg" alt="pague com mastercard">
        </div>
        <p style="margin-left:220px;">Total | {{carrinhoTotal | numeroPreco}}</p>
        </div>
        <div style="display:flex; justify-content:center;">
        <button class="buy">Comprar</button>
        </div>
      </section>
    </div>
  </header>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
export default {
  name:"Header",
  components: {
    Carousel
  },
  props:["carrinho"],
  data() {
    return {
    carrinhoAtivo:false,
    }
  },

  computed: {
    carrinhoTotal() {
      let total = 0
      if(this.carrinho.length) {
        this.carrinho.forEach(item => {
          total += item.preco;
        })
      }
      return total;
    }
  },
  
  methods:{
    abrirCarrinho() {
      this.carrinhoAtivo = true
    },
    fecharCarrinho({target, currentTarget}) {
      if(target === currentTarget) {
      this.carrinhoAtivo = false
    }
    },
    removerItem(index) {
      this.carrinho.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  height:50px;
}

.logo {
  width: 80px;
}

.carrinho_menu::after {
content: "";
display: inline-block;
background: url("../assets/carrinho.svg") no-repeat center center;
width: 25px;
height: 25px;
margin-left: 10px;
}

.carrinho_menu {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.modal_carrinho {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  background:rgba(0, 0, 0, 0.8);
  display:flex;
  justify-content: center;
  align-items: center;
}

.modal_carrinho .carrinho_content {
  width: 80%;
  height: 80%;
  background: white;
  position: relative;
}

.modal_carrinho .carrinho_content .carrinho_item {
  display:flex;
}

.modal_carrinho .carrinho_content .card {
  width:50px;
  height: 30px;
}

.modal_carrinho .carrinho_content .buy {
  width: 30%;
  height: 50px;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  font-size: 1.4rem;
  color: white;
  background-color: #00bfff;
  margin-top: 50px;
  transition: 0.3s all;
}

.modal_carrinho .carrinho_content .buy:hover {
  color:#00bfff;
  background-color: white;
  border:1px solid #00bfff;
}

.modal_carrinho .carrinho_content .carrinho_item .item {
  display: flex;
  justify-content: space-between;
}

.modal_carrinho .carrinho_content .carrinho_item .item h2 {
  font-size: 1.2rem;
  margin-left: 10px;
}

.modal_carrinho .carrinho_content .carrinho_item .item .delete {
  background-color: #00bfff;
  margin-right: 10px;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
}

.modal_carrinho .carrinho_content .carrinho_item .item .delete img {
  width:12px;
}
</style>