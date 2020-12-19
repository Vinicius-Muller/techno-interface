<template>
  <header>
    <img class="logo" src="@/assets/techno.svg" alt="Techno">
    <img class="wallet" src="@/assets/carrinho.svg" alt="Wallet">
  </header>
</template>

<script>
export default {
  name:"Header"
}
</script>

<style scoped>
header {
  width:100vw;
  height:100px;
  display: flex;
  justify-content: space-between;
  background: transparent;
}

header .logo {
  width: 100px;
  height: 50px;
  padding-left: 50px;
}

header .wallet {
  padding-right: 50px;
}
</style>