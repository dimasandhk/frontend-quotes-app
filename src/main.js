import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

// Static Assets
import "./assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

// Components
import Loading from "./components/Loading.vue";

createApp(App)
	.use(store)
	.component("Loading", Loading)
	.mount("#app");
