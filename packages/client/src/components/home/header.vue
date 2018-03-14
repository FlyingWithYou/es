<template>
	<div class="container">
		<div class="content">
			
		</div>
	</div>
</template>

<script>
	import {snatch} from "Utils/networker.js";
	export default {
		name: "header-bar",
		data () {
			return {
				
			};
		},
		mounted:function(){
			
		},
		methods:{
			
		}
	};
</script>

<style scoped lang="less">
	.container{
		height: 80px;
		background: blue;
		.content{
			width: 1240px;
			height: 80px;
			margin: 0 auto;
			background: red;
		}
	}
</style>