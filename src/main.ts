import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './style.css';
import './index.css';
import App from './App.vue';
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App);
const pinia = createPinia();

app.use(Vue3Toasity);
app.use(pinia);
app.mount('#app');
