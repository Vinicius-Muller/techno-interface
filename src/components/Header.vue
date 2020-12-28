<template>
  <header class="header"> 
    <img class="logo" src="../assets/techno.svg" alt="Techno">
  
    <div class="carrinho_menu" @click="abrirCarrinho()">
      <p>{{carrinhoTotal | numeroPreco}}</p>
    </div>

    <div v-if="carrinhoAtivo" class="modal_carrinho" @click="fecharCarrinho">
      <section class="carrinho_conteudo">
        <div class="carrinho_item">
          <Carousel v-if="carrinho.length >= 1" :carrinho="carrinho"/>
          <div v-if="carrinho.length >= 1" class="item_caixa">
          <div class="item" v-for="(info, index) in carrinho" :key="index">
            <h2>{{info.nome}}</h2>
            <p>{{info.preco | numeroPreco}}</p>
            <button class="delete" @click="removerItem(index)">
              <img src="@/assets/remove.svg" alt="deletar item">
            </button>
          </div>
          </div>
        </div>
        <div class="cartao_secao" v-if="carrinho.length >= 1">
        <div class="cartao_caixa">
          <input style="cursor:pointer;" type="checkbox">
          <img class="card" src="@/assets/visa.svg" alt="pague com visa">
        </div>
        <div class="cartao_caixa">
          <input style="cursor:pointer;" type="checkbox">
          <img class="card" src="@/assets/mastercard.svg" alt="pague com mastercard">
        </div>
        <p class="carrinho_total">Total | {{carrinhoTotal | numeroPreco}}</p>
        </div>
        <div class="botao_caixa">
        <button v-if="carrinho.length >= 1" class="comprar">Comprar</button>
        </div>
        <p class="vazio" v-if="carrinho.length == 0">O carrinho esta vazio</p>
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
      this.carrinho.splice(index, 1);
       setTimeout(()=> {
        this.carrinhoAtivo = false
      }, 1)
      setTimeout(()=> {
        this.carrinhoAtivo = true
      }, 1)
    },

    recarregar() {
     
    }
  },
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
  min-height: 100%;
  background:rgba(0, 0, 0, 0.8);
  display:flex;
  justify-content: center;
  align-items: center;
}

.modal_carrinho .carrinho_conteudo {
  width: 60%;
  height: 80%;
  background: white;
  position: relative;
}

.modal_carrinho .carrinho_conteudo .cartao_secao {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal_carrinho .carrinho_conteudo .cartao_secao .carrinho_total {
  margin-left: 280px;
}

.modal_carrinho .carrinho_conteudo .cartao_secao .cartao_caixa {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal_carrinho .carrinho_conteudo .botao_caixa {
  display:flex;
  justify-content:center;
}

.modal_carrinho .carrinho_conteudo .carrinho_item {
  display:flex;
}

.modal_carrinho .carrinho_conteudo .carrinho_item .item_caixa {
  padding: 10px;
  display:flex;
  flex-direction: column;
  width: 50%;
}

.modal_carrinho .carrinho_conteudo .vazio {
  font-size: 1.5rem;
  margin-left: 33%;
  padding:20px;
}

.modal_carrinho .carrinho_conteudo .card {
  width:60px;
  height:40px;
}

.modal_carrinho .carrinho_conteudo .comprar {
  width: 30%;
  height: 50px;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  font-size: 1.4rem;
  color: white;
  background-color: #00bfff;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: 0.3s all;
}

.modal_carrinho .carrinho_conteudo .comprar:hover {
  color:#00bfff;
  background-color: white;
  border:1px solid #00bfff;
}

.modal_carrinho .carrinho_conteudo .carrinho_item .item {
  display: flex;
  justify-content: space-between;
}

.modal_carrinho .carrinho_conteudo .carrinho_item .item h2 {
  font-size: 1.2rem;
  margin-left: 10px;
}

.modal_carrinho .carrinho_conteudo .carrinho_item .item .delete {
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

.modal_carrinho .carrinho_conteudo .carrinho_item .item .delete img {
  width:12px;
}

@media screen and (max-width:900px) {
  .carrinho_total {
    margin-left: 200px !important;
  }

  .modal_carrinho .carrinho_conteudo .carrinho_item {
    flex-direction: column;
    align-items: center;
  }

  .modal_carrinho .carrinho_conteudo .carrinho_item .item_caixa {
    width: 90%;
    padding: 0;
    margin-top: 10px;
  }

  .modal_carrinho .carrinho_conteudo .comprar {
    margin-top: 0;
    margin-bottom: 20px;
    width: 40%;
  }
}

@media screen and (max-width:390px) {
  .carrinho_total {
    margin-left: 0px !important;
  }

  .modal_carrinho .carrinho_conteudo .comprar {
    width: 60%;
    margin-top: 20px;
  }

  .modal_carrinho .carrinho_conteudo {
    width: 90%;
    height: 90%;
  }
}
</style>