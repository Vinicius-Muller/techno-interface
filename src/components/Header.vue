<template>
  <header class="header"> 
    <img class="logo" src="../assets/techno.svg" alt="Techno">

    <div class="carrinho_menu" @click="carrinhoAtivo = true">{{carrinhoTotal | numeroPreco}} | {{carrinho.length}}</div>
    
  </header>
</template>

<script>
export default {
  name:"Header",
  data() {
    return {
      carrinho:[],
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
</style>