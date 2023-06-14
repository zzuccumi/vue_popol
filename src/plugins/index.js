import directives from '@/plugins/directives';
import dialog from '@/plugins/dialog';
import page from '@/plugins/page';
import vuetify from '@/plugins/vuetify';

export default {
  install(Vue) {
    Vue.use(directives);
    Vue.use(dialog);
    Vue.use(page);
    Vue.use(vuetify);
  },
};
