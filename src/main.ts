// import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';
import { routes } from './router/index';
import { ViteSSG } from 'vite-ssg';

import './assets/scss/app.scss';

// const app = createApp(App);

// app.use(router);

// app.mount('#app');

export const createApp = ViteSSG(
    App,
    { routes }
);
