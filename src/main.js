import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import { focusDirective, clickOutsideDirective } from './directives'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChartLine,
  faChildren,
  faHome,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons'
import './styles/styles.scss'

const app = createApp(App)

library.add(faChartLine, faChildren, faHome, faAddressCard)

app.directive('focus', focusDirective)
app.directive('click-outside', clickOutsideDirective)

app.use(router)
app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCkGvOiUSEqM5BMxvFVJq2kTDQ-gWzGvTE',
  },
})

app.mount('#app')
