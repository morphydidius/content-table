import { createStore } from 'vuex';
import pageOne from '@/store/modules/pageOne';
import pageTwo from '@/store/modules/pageTwo';

export default createStore({
	state: {},
	modules: {
		pageOne,
		pageTwo,
	},
});
