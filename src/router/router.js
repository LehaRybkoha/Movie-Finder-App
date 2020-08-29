import Vue from 'vue';
import Router from 'vue-router'
import vSearch from '../components/v-search'

Vue.use(Router);

let router = new Router( {
    routes: [
        {
            name: 'index',
            path: '/',
            meta: {
                movieFilteredList: ''
            }
        },
        {
            path: '/:value',
            component: vSearch,
            props: true
        }
    ]
});

export default router;