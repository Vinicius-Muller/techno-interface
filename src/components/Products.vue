<template>

<div>
  <Header :carrinho="carrinho" />
  <section class="produtos">

      <div v-for="(produto,index) in produtos" @click="abrirModal(index)" :key="index" class="produto">
        <img :src="require(`@/assets/produtos/${produto.img}`)" :alt="produto.nome" class="produto_img">

        <div class="produto_info">
        <span class="produto_preco">{{produto.preco | numeroPreco}}</span>
        <h2 class="produto_titulo">{{produto.nome}}</h2>
        </div>
        
      </div>

      <div v-if="modalActive" class="modal" v-bind="{modal}" @click="fecharModal">
        <div class="modal-conteudo">
          <img @click="fecharModal" class="close" src="@/assets/cancel.svg" alt="fechar modal">
          <img :src="require(`@/assets/produtos/${modal.img}`)" :alt="modal.nome">
          <div class="preco-caixa">
            <h2>{{modal.nome}}</h2>
            <p>{{modal.preco | numeroPreco}}</p>
            <button @click="Comprar()" class="comprar">Comprar</button>
          </div>
        </div>
      </div>

   </section>
</div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name:"Products",
  components: {
    Header
  },
   data() {
    return {
      modal:[],
      carrinho:[],
      modalActive:false,
      produtos:[
        {
    id: "notebook",
    nome: "Notebook",
    preco: 2999,
    img: "notebook.jpg"
  },
  {
    id: "smartphone",
    nome: "Smartphone",
    preco: 1299,
    img: "smartphone.jpg"
  },
  {
    id: "tablet",
    nome: "Tablet",
    preco: 899,
    img: "tablet.jpg"
  },
  {
    id: "smartwatch",
    nome: "Smartwatch",
    preco: 1199,
    img: "smartwatch.jpg"
  },
  {
    id: "speaker",
    nome: "Speaker",
    preco: 599,
    img: "speaker.jpg"
  }
      ]
    }
  },
  methods: {
    abrirModal(index) {
      this.modal = this.produtos[index]
      this.modalActive = true
    },
    fecharModal({target, currentTarget}) {
      if(target === currentTarget) {
      this.modalActive = false
    }
    },
    Comprar() {
      this.modalActive = false
      this.carrinho.push(this.modal);
    }
  }
}
</script>

<style scoped>

.modal {
  display: flex;
  align-items:center;
  justify-content: center;
  position:fixed;
  z-index:2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .8);
}

.modal-conteudo {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 80%;
  height: 80%;
  background: linear-gradient(to right, black 250px, white 250px);
}

.modal-conteudo .close {
  width:30px;
  height:30px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor:pointer;
  transition: 0.2s all;
}

.modal-conteudo .close:hover {
  transform: scale(1.1);
}

.modal-conteudo img {
  width: 60%;
  height: 80%;
}

.modal-conteudo .preco-caixa {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-conteudo .preco-caixa h2 {
  font-size: 2rem;
  letter-spacing: 2px;
}

.modal-conteudo .preco-caixa p {
  font-size: 1.4rem;
  color: #00bfff;
}

.modal-conteudo .preco-caixa .comprar {
  width: 50%;
  height: 40px;
  margin-top: 50px;
  border-radius: 5px;
  border:1px solid #00bfff;
  font-size: 1.3rem;
  cursor: pointer;
  background-color: #00bfff;
  color: white;
  transition: 0.2s all;
}

.modal-conteudo .preco-caixa .comprar:hover {
  background-color: white;
  color: #00bfff;
  border:1px solid #00bfff;
}

.produtos {
  max-width: 900px;
  margin-top: 100px;
  margin-left:auto;
  margin-right: auto;
}

.produto {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  background: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, .1);
  cursor: pointer;
}

.produto_img {
  max-width: 300px;
  margin-right: 40px;
}

.produto_titulo {
  font-size: 3rem;
  line-height: 1;
}

.produto_preco {
  color: rgba(0, 0, 0, .5);
}

@media screen and (max-width:800px) {
  .produtos {
    width: 60%;
  }

  .produto {
    flex-direction: column;
    padding: 20px;
  }

  .produto_img {
    margin: 0;
    margin-bottom: 20px;
  }

  .produto_info {
    display:flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .modal-conteudo {
    flex-direction: column;
    width: 90%;
    padding: 20px;
  }

  .modal-conteudo img {
    width: 100%;
    object-fit:cover;
  }

  .modal-conteudo .preco-caixa h2 {
    color: #00bfff;;
  }

  .modal-conteudo .preco-caixa .comprar {
    margin-top: 10px;
    width: 80%;
  }
}

@media screen and (max-width:470px) {
  .produtos {
    width: 90%;
    margin-top: 50px;
  }

  .produto_titulo {
    font-size: 2.5rem;
  }

  .produto_preco {
    font-size: 1.4rem;
  }
}
</style>