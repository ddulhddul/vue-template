import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import Common from './common'
Vue.mixin(Common)

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
