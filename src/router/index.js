import {
	createMemoryHistory,
	createRouter,
} from 'vue-router';

import CtHome from '@/pages/Home';
import CtTableOne from '@/pages/TableOne';
import CtTableTwo from '@/pages/TableTwo';

const routes = [
	{
		path: '/',
		name: 'home',
		component: CtHome,
		redirect: '/table-one',
	},
	{
		path: '/table-one',
		name: 'tableOne',
		component: CtTableOne,
	},
	{
		path: '/table-two',
		name: 'tableTwo',
		component: CtTableTwo,
	},
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
