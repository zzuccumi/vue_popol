import focus from '../directives/focus';

export default {
  install(Vue) {
    Vue.directive(focus.name, focus);
  },
};
