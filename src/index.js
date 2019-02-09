import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
