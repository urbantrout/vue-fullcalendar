import Vue from 'vue';
import App from './app';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App,
  },
  render: h => h(App),
  template: '<App/>',
});
