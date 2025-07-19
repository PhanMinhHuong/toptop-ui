import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

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
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
