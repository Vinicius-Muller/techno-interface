<template>
  <header class="header"> 
    <img class="logo" src="../assets/techno.svg" alt="Techno">
  
    <div class="carrinho_menu" @click="abrirCarrinho()">
      <p>{{carrinhoTotal | numeroPreco}}</p>
      
    </div>

    <div v-if="carrinhoAtivo" class="modal_carrinho">
      <section class="carrinho_content">
        <div class="carrinho_item" v-for="(item, index) in carrinho" :key="index">
          {{carrinho.length}}
        </div>
      </section>
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
    }
  },
    filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    }
  }
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
</style>