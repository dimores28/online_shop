import { createRouter, createWebHistory } from 'vue-router'; 

import vCatalog from '@/components/catalog/v-catalog';
import vCart from '@/components/cart/v-cart';
import vMainPage from '@/components/main-page/v-main-page';

let routes = [
    {
        path: '/',
        name: 'mainPage',
        component: vMainPage
    },
    {
        path: '/catalog',
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