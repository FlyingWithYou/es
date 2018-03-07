import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Login from "./login";
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);

const routes = [
	{ path: "/", name: "app", component: App },
	{ path: "/login", name: "login", component: Login }
];

const router = new VueRouter({
	// mode: 'history',
	routes
});


new Vue({
	router
}).$mount("#app");
