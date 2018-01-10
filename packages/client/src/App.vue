<template>
	<div class="content">
		<login></login>	
	</div>
</template>
<script>
	import  login  from './login';
	export default {
		name: 'app',
		components: {
			login
		}
	}
</script>
<style>
	body {
		margin: 0;
		padding: 0;
	}
	.content {
		margin: 0 auto;
	}
</style>