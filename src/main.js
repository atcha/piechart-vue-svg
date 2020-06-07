import Vue from 'vue'
import App from './App.vue'
import VueCircleSlider from 'vue-circle-slider'
import VTooltip from 'v-tooltip'
import 'vue-swatches/dist/vue-swatches.css'
import './assets/css/tooltip.css'


Vue.config.productionTip = false

Vue.use(VueCircleSlider)
Vue.use(VTooltip)

new Vue({
  render: h => h(App),
}).$mount('#app')
