import Vue from 'vue';
import VuetifyDialog from 'vuetify-dialog';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store';
import Vuetify from 'vuetify';
import vuetify from '@/plugins/vuetify';
import Plugins from '@/plugins';
import Button from '@/components/common/Button.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import Header from '@/components/common/Header';
import Snb from '@/components/common/Snb';
import Popups from '@/components/common/Popups.vue';
import VueMaterialIcon from 'vue-material-icon';
import VueGoodTablePlugin from 'vue-good-table';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
// import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuetify-dialog/dist/vuetify-dialog.css';
// import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import 'vue-good-table/dist/vue-good-table.css';
import 'vuetify/dist/vuetify.min.css';
import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false;

Vue.component('Button', Button);
Vue.component('AppLayout', AppLayout);
Vue.component('Header', Header);
Vue.component('Snb', Snb);
Vue.component('Popups', Popups);
Vue.use(Vuetify);
Vue.component(VueMaterialIcon.name, VueMaterialIcon);
Vue.component('menu-icon', MenuIcon);
// Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

Vue.use(VuetifyDialog, {
  context: {
    vuetify,
  },
});
Vue.use(Plugins);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueGoodTablePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
