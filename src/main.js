import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import { focusDirective, clickOutsideDirective } from './directives'

import './styles/styles.css'

const app = createApp(App)

app.directive('focus', focusDirective)
app.directive('click-outside', clickOutsideDirective)

app.use(router)
app.use(store)

app.mount('#app')
