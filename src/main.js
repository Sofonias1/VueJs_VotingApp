import Vue from 'vue';
import App from './App';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import mdbvue from 'mdbvue';

Vue.config.productionTip = false;

Vue.use(VueMaterial)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
