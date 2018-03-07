<template>
	<div>
		<header-bar></header-bar>
		<login-body></login-body>
		<footer-bar></footer-bar>
	</div>
</template>
<script>
import HeaderBar from "./header";
import LoginBody from "./body";
import FooterBar from "./footer";
export default {
	name: "login",
	data: function(){
		return {
			show: "Login"
		};
	 	},
	components: {
		HeaderBar,
		LoginBody,
		FooterBar
	}
};
</script>
