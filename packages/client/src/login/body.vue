<template>
	<div class="login-body">
		<div class="main-form">
			<div class="accout">
				<Input v-model="value" placeholder="请输入账号" style="width: 300px"  size="large"></Input>
			</div>
		</div>
	</div>
</template>
<style scoped lang="less">
	.login-body {
		position: relative;
		min-height: 750px;
		max-height: 1080px;
		background: linear-gradient(to bottom, #f8fcff, #f8fcff, #f8fcff);
		.main-form {
		    width: 298px;
		    position: absolute;
		    top: 10%;
		    right: 380px;
		    background-color: #FFF;
		    padding: 35px 35px 10px;
		    border-radius: 2px;
		}
		
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
	name: "login-body",
	data () {
		return {
			value: ""
		};
	}
};
</script>