// import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }
];

// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: HomeView
//         }
//     ]
// });

// export default router;