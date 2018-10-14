import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'
import updateDataToMP from '@/utils/updateDataToMP'

Vue.config.productionTip = false

Vue.use(MpvueRouterPatch)
Vue.use(updateDataToMP)

const app = new Vue({
  store,
  ...App
})

app.$mount()
