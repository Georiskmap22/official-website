import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';   

const app = createApp(App)

AOS.init();

app.use(createPinia())
app.use(router)
app.use(createHead())
app.mount('#app')
document.title = 'Geohazards Risk Mapping Initiative'

