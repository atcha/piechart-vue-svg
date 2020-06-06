import Vue from 'vue'
import App from './App.vue'
import VueCircleSlider from 'vue-circle-slider'
import 'vue-swatches/dist/vue-swatches.css'

Vue.config.productionTip = false

Vue.use(VueCircleSlider)

new Vue({
  render: h => h(App),
}).$mount('#app')
