import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.config.ignoredElements = ['a-image', 'a-sky', 'a-entity', 'a-cursor', 'a-scene', 'a-assets']

new Vue({
  render: (h) => h(App),
}).$mount("#app");
