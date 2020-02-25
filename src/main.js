import Vue from 'vue';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from 'element-ui';
import VueFullPage from 'vue-fullpage.js';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import i18n from './locale';
import 'element-ui/lib/theme-chalk/index.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
// import 'vue-fullpage.js/vue-fullpage.css';

Vue.config.productionTip = false;

Vue.use(VueFullPage);

Vue.component(Button.name, Button);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(DropdownMenu.name, DropdownMenu);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
