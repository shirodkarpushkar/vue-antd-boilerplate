import Vue from 'vue'
import App from './App'
import router from '@router'
import store from '@state/store'
import Vuelidate from 'vuelidate'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad)
Vue.use(Vuelidate)

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'


const app = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
