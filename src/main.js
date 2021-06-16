import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/sass/Base/_base.scss";

createApp(App).use(router).mount('#app')
