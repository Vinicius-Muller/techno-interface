import Vue from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';

Vue.use( VueSplide );

  Vue.filter('numeroPreco', function(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  }
  )

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
