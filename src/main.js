import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import { focusDirective, clickOutsideDirective } from './directives'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import './styles/styles.css'

const app = createApp(App)

app.directive('focus', focusDirective)
app.directive('click-outside', clickOutsideDirective)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCkGvOiUSEqM5BMxvFVJq2kTDQ-gWzGvTE',
  },
})

app.mount('#app')
