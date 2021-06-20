import { createStore } from "vuex";

export default createStore({
	state: {
		unhandled: "There is an unhandled problem please contact me on github @dimasandhk"
	},
	mutations: {
		DATE_PARSER(state, payload) {
			return payload.split("T")[0];
		}
	},
	actions: {},
	modules: {}
});
