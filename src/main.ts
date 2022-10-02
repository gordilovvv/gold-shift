import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import './assets/scss/app.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
