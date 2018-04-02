import Vue from "vue";
import Vuex from 'vuex'
import store from "Store"
import VueRouter from "vue-router";
import App from "./App";
import Login from "Components/login";
import iView from 'iview';
import Home from 'Components/home';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);

const routes = [
	{ path: "/", name: "app", component: App },
	{ path: "/login", name: "login", component: Login },
	{ path: "/home", name: "home", component: Home}
];

const router = new VueRouter({
	// mode: 'history',
	routes
});


new Vue({
	router,
	store
}).$mount("#app");
