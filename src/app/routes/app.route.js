import VueRouter from 'vue-router';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'todos',
            component: () => import('./todos/TodosRoute')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./about/AboutRoute')
        }
    ]
});
