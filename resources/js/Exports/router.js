import { createRouter, createWebHistory } from "vue-router";
import Default from '../Pages/Default.vue';
import Login from '../Pages/Login.vue';
import Register from '../Pages/Register.vue';
import Dashboard from '../Pages/Dashboard.vue';
import Surveys from '../Pages/Surveys.vue';

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: Default,
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/surveys',
                name: 'Surveys',
                component: Surveys
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;