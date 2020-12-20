<template>

<div>
  <section class="produtos">

      <div v-for="produto in produtos" @click="abrirModal(produto.id)" :key="produto.id" class="produto">
        <img :src="require(`@/assets/produtos/${produto.img}`)" :alt="produto.nome" class="produto_img">

        <div class="produto_info">
        <span class="produto_preco">{{produto.preco | numeroPreco}}</span>
        <h2 class="produto_titulo">{{produto.nome}}</h2>
        </div>
        
      </div>

   </section>

   
</div>
</template>

<script>
export default {
  name:"Products",
   data() {
    return {
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
    abrirModal(id) {
      console.log(id)
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
</style>