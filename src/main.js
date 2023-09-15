import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import { registerGlobalComponents } from "./utils/import";

const app = createApp(App);

registerGlobalComponents(app);

app.use(router);

app.mount('#app');
