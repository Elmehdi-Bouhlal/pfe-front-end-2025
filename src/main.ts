import { createApp } from 'vue'
import App from './App.vue'
import router from './routing'
import './assets/styles/fonts.css'
import './style.css' ;

const app = createApp(App) ;
app.config.devtools = true;
app.use(router);
app.mount("#app");