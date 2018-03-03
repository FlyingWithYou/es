<template>
	<footer class="footer">
		<div class="footer-nav">
			<ul class="footer-list">
				<li class="list-item">
					<a href="">关于魅族</a>
				</li>
				<li class="list-item">
					<a href="">工作机会</a>
				</li>
				<li class="list-item">
					<a href="">联系我们</a>
				</li>
				<li class="list-item">
					<a href="">法律声明</a>
				</li>
				<li class="list-item">
					<a href="">常见问题</a>
				</li>
				<li class="list-item">
					<a href="">简体中文</a>
				</li>
				<li class="list-item">
					<a href="#"></a>
				</li>
				<li class="list-item">
					<a href="#"></a>
				</li>
				<li class="list-item">
					<a href="#"></a>
				</li>
			</ul>
			<ul class="contact-list">
			   	<li class="list-icon weibo"></li>
				<li class="list-icon wechant"></li>
				<li class="list-icon mzone"></li>
			</ul>
		</div>
		<div class="site-info">
			<span>©2017 Meizu Telecom Equipment Co., Ltd. All rights reserved.</span>
			<a href="#">备案号: 粤ICP备13003602号-4</a>
			<a href="#">经营许可证编号: 粤B2-20130198</a>
			<span>营业执照</span>
			<a href="">粤公网安备 44049102496076号</a>
			</div>
	</footer>
</template>
<style media="screen" scoped>
	.footer {
		margin: 16px auto;
		max-width: 1120px;
		min-width: 860px;
	}
	.footer-nav {
		display: flex;
		flex-direction: row;
	}
	.footer-list {
		flex: 2;
	}
	.list-item {
		display: inline-block;
	}
	.list-item a {
		text-decoration: none;
	}
	.contact-list {
		flex: 1;
	}
	.list-icon {
		display: inline-block;
		width: 40px;
		height: 40px;
		margin: 4px;
		background-image: url('../resource/login/images/base.png');
		background-repeat: no-repeat;
	}
	.weibo {
		background-position: -218px -90px;
	}
	.weibox:hover {
		background-position: -218px -134px;
	}
	.wechant {
			background-position: -302px -90px;
	}
	.wechant:hover {
		background-position: -302px -143px;
	}
	.mzone {
			background-position: -338px  -90px;
	}
	.mzone:hover {
		background-position: -338px -90px;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.site-info {
		font-family: 微软雅黑;
		font-size: 12px;
		color: #666;
	}
	.site-info a {
		text-decoration: none;
	}
</style>
