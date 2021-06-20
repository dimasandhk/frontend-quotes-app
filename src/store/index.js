import { createStore } from "vuex";

export default createStore({
	state: {},
	mutations: {
		DATE_PARSER(state, payload) {
			return payload.split("T")[0];
		}
	},
	actions: {},
	modules: {}
});
