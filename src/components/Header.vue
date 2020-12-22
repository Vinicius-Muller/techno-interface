<template>
  <header class="header"> 
    <img class="logo" src="../assets/techno.svg" alt="Techno">
  
    <div class="carrinho_menu" @click="abrirCarrinho()">
      <p v-if="carrinho">{{carrinho.preco | numeroPreco}}</p>
    </div>

    <div v-if="carrinhoAtivo" class="modal_carrinho">
      {{carrinho}}
    </div>
    
  </header>
</template>

<script>
export default {
  name:"Header",
  props:["carrinho"],
  data() {
    return {
    carrinhoAtivo:false,
    }
  },
  
  methods:{
    abrirCarrinho() {
      this.carrinhoAtivo = true
    }
  },
    filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    }
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  padding: 20px 0;
  margin:0 auto;
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
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background:rgba(0, 0, 0, 0.8)
}
</style>