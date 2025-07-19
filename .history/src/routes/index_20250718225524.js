import Home from '~/pages/Home';
import Following from '~/pages/Following';
// import { Component } from 'react';

//Piblic Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
