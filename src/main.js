import Vue from 'vue';
import { Button } from 'view-design';
import VueI18n from 'vue-i18n';
import en from 'view-design/dist/locale/en-US';
import tw from 'view-design/dist/locale/zh-TW';
import VueFullPage from 'vue-fullpage.js';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'view-design/dist/styles/iview.css';
// import 'vue-fullpage.js/vue-fullpage.css';

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(VueFullPage);

Vue.locale = () => {};

const messages = {
  en: Object.assign({ hello: 'hello' }, en),
  tw: Object.assign({ hello: '你好' }, tw),
};

const i18n = new VueI18n({
  locale: 'tw',
  messages,
});

Vue.component('Button', Button);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
