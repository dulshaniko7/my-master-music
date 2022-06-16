/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/css/main.css';
import VeeValidatePlugin from './includes/validation';
//import './includes/firebase';

createApp(App).use(store).use(router).use(VeeValidatePlugin)
  .mount('#app');
