import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app/App';
import AppRoute from './app/routes/app.route';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    router: AppRoute,
    render: h => h(App)
}).$mount('#app');
