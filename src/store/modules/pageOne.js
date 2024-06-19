const state = {
	isLoading: false,
	errors: null,
	fields: [],
};

const getters = {};

const mutations = {
	loadDataStart() {},

	loadDataSuccess() {},

	loadDataFailure() {},

	updateFields(state, data) {
		const stateElem = state.fields
			.find(({ row, column }) => row === data.row && column === data.column);

		if (stateElem) {
			stateElem.value = data.value;
		} else {
			state.fields.push(data);
		}
	},
};

const actions = {
	loadData() {},

	saveFields(context, data) {
		context.commit('updateFields', data);
	},
};

export default {
	state,
	getters,
	mutations,
	actions,
	namespaced: true,
};
