import Vue from 'vue';
import LangFlag from 'vue-lang-code-flags';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.component('lang-flag', LangFlag);
// library.add(faHatWizard);
// Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
