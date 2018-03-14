<template>
	<div class="content">
		<login></login>	
	</div>
</template>
<script>
import  login  from "Components/login";
export default {
	name: "app",
	components: {
		login
	}
};
</script>
<style scoped>
	body {
		margin: 0;
		padding: 0;
	}
	.content{
		margin: 0 auto;
	}
</style>