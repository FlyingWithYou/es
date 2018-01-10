<template>
	<div class="login-body">
		
	</div>
</template>
<style>
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
</style>
<script>
	export default {
		name: 'login-body'
	}
</script>