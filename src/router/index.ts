import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import ConversationsMainView from '../views/conversations/ConversationsMainView.vue';
import ChartsMainView from '../views/charts/ChartsMainView.vue';
import UsersMainView from '../views/users/UsersMainView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'conversations',
        component: ConversationsMainView
    },
    {
        path: '/charts',
        name: 'charts',
        component: ChartsMainView
    },
    {
        path: '/users',
        name: 'users',
        component: UsersMainView
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
