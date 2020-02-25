import Vue from 'vue';
import VueI18n from 'vue-i18n';
import localeZhCn from 'element-ui/lib/locale/lang/zh-CN';
import localeZhTw from 'element-ui/lib/locale/lang/zh-TW';
import localeEn from 'element-ui/lib/locale/lang/en';
import langZhCn from './lang/zh-cn';
import langZhTw from './lang/zh-tw';
import langEn from './lang/en';
import { localRead } from '@/utils';

Vue.use(VueI18n);

const navLang = navigator.language;
const localLang = (navLang === 'zh-TW' || navLang === 'en') ? navLang : false;
const lang = localRead('local') || localLang || 'zh-TW';

Vue.config.lang = lang;

Vue.locale = () => {};
const messages = {
  'zh-TW': { ...localeZhTw, ...langZhTw },
  'zn-cn': { ...localeZhCn, ...langZhCn },
  en: { ...localeEn, ...langEn },
};

const i18n = new VueI18n({
  locale: lang,
  messages,
});

export default i18n;
