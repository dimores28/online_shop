import { createRouter, createWebHistory } from 'vue-router'; 

import vCatalog from '@/components/v-catalog';
import vCart from '@/components/v-cart';

let routes = [
    {
        path: '/',
        name: 'catalog',
        component: vCatalog
    },
    {
        name: 'cart',
		path: '/cart',
        component: vCart, 
    }
];

export default createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
});