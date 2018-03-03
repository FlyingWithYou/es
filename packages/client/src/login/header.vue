<template>
	<header><a href="/" class="meizu-logo"><i class="logo-icon"></i></a></header>
</template>
<style scoped>
header {
	margin: 0;
	top:0;
	left: 0;
	height: auto;
	padding-top: 24px;
	padding-bottom: 40px;
	max-width: 1200px;
}
header a.meizu-logo {
	float: left;
	position: relative;
	left: 10vw;
	display: block;
	height: 20px;
	width: 110px;
	overflow: hidden;
}
.meizu-logo i.logo-icon {
	width: 100%;
	height: 100%;
	display: block;
	background-image: url("../resource/login/images/base.png");
	background-repeat: no-repeat;
	background-position: -2px -4px;
}
	
</style>
<script>
export default {
	name: "header-bar",
};
</script>