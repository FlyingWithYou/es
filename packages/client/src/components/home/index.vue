<template>
	<div>
		<div class="top" v-show="topIsShow">
			<img src="../../resource/home/top.jpg" alt="" />
			<a href="javascript:;" class="home-settlement-point close" title="关闭" @click="closeTop">
	            <Icon type="ios-close-outline" size="26"></Icon>
	       </a>
		</div>
		<header-bar></header-bar>
	</div>
	
</template>

<script>
	import {snatch} from "Utils/networker.js";
	import HeaderBar from "./header";
	export default {
		name: "home",
		data () {
			return {
				topIsShow: true,
			};
		},
		components: {
			HeaderBar,
		},
		mounted:function(){
			
		},
		methods:{
			closeTop: function(){
				this.topIsShow = false;
			}
		}
	};
</script>

<style scoped lang="less">
	.top{
		width: 100%;
		position: relative;
		img{
			width: 100%;
			display: block;
		}
		a{
			position: absolute;
			right: 350px;
		    top: 4px;
		    color: #BDBDBD;
		    z-index: 4;
		}
	}
</style>