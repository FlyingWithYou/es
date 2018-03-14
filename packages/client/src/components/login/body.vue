<template>
	<div class="login-body">
		<div class="main-form">
			<div class="title">账号登陆</div>
			<div class="accout">
				<Input class="accout-input" v-model="accout" placeholder="手机号Flyme账号" size="large"></Input>
				<Input class="psw-input" v-model="password" placeholder="密码" size="large"></Input>
			</div>
			<div class="login">
				<Button class="login-btn" type="primary" @click="submit" >登录</Button>
			</div>
			<div class="login-bottom">
				<div>注册</div>
				<div>忘记密码？</div>
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
		    width: 368px;
		    position: absolute;
		    top: 10%;
		    right: 380px;
		    background-color: #FFF;
		    padding: 35px 35px 10px;
		    border-radius: 2px;
		    .title{
		    	color: #32A5E7;
		    	font-size: 18px;
		    	text-align: center;
		    }
		    .accout{
		    	.accout-input{
		    		margin-top: 30px;
		    		margin-bottom: 20px;
		    	}
		    }
		    .login{
		    	margin: 30px 0 10px 0;
		    	.login-btn{
		    		width: 100%;
		    	}
		    }
		    .login-bottom{
		    	color: #008ec7;
		    	font-size: 14px;
		    	display: flex;
		    	justify-content: space-between;
		    }
		}
		
	}
	.login-body::before {
		position: absolute;
		background: url('../../resource/login/images/banner.png') no-repeat center;
		width: 100%;
		height: 100%;
		content: ' ';
		top: 0;
		left: 0;
		background-size: contain;
	}
	
</style>
<script>
import {snatch} from "Utils/networker.js";
export default {
	name: "login-body",
	data () {
		return {
			accout: "",
			password: "",
		};
	},
	mounted:function(){
		
	},
	methods:{
		submit: function(){
			if(!this.accout.trim()){
				this.$Message.error('请填写账号');
				return;
			}
			if(!this.password.trim()){
				this.$Message.error('请填写密码');
				return;
			}
			let data = {
				name: this.accout.trim(),
				pwd: this.password.trim()
			};
			/*snatch("http://localhost:3000/login",'post',data,'application/x-www-form-urlencoded').then(res=>{
				console.log(res);
				if(res.code == 0){
					this.$router.push('/home');
				}
			});*/
			this.$router.push('/home');
		}
	}
};
</script>