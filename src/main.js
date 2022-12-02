import Vue from 'vue';
import LangFlag from 'vue-lang-code-flags';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.component('lang-flag', LangFlag);
library.add(faStar, faRegularStar);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
