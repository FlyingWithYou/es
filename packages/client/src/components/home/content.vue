<template>
	<div class="content">{{changeValue}}</div>
</template>

<script>
	export default {
		name: "content-bar",
		data () {
			return {
				value: this.$store.state.count,
			};
		},
		beforeUpdate(){
			
		},
		updated(){
			this.value = this.$store.state.count;
		},
		mounted:function(){
			
		},
		computed:{
			changeValue: function(){
				return this.$store.state.count;
			}
		},
		/*methods:{
			
		}*/
	};
</script>

<style scoped>
	.content{
		width: 100%;
		height: 200px;
	}
</style>