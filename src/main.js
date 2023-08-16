import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

// import "bootstrap/dist/css/bootstrap.min.css"

import '@coreui/coreui/dist/css/coreui.min.css'

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// import "bootstrap/dist/js/bootstrap.js"

createApp(App).use(router).use(VueAxios, axios).mount('#app')