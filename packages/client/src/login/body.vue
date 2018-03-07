<template>
	<div class="login-body">
		<div class="main-form">
			<div>111</div>
		</div>
	</div>
</template>
<style scoped>
	.login-body {
		position: relative;
		min-height: 750px;
		max-height: 1080px;
		background: linear-gradient(to bottom, #f8fcff, #f8fcff, #f8fcff);
	}
	.login-body::before {
		position: absolute;
		background: url('../resource/login/images/banner.png') no-repeat center;
		width: 100%;
		height: 100%;
		content: ' ';
		top: 0;
		left: 0;
		background-size: contain;
	}
	.main-form {
	    width: 298px;
	    position: absolute;
	    top: 10%;
	    right: 380px;
	    background-color: #FFF;
	    padding: 35px 35px 10px;
	    border-radius: 2px;
	}
</style>
<script>
export default {
	name: "login-body"
};
</script>