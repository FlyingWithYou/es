<template>
	<div class="container">
		<div class="content">
			<div class="header-logo">
				<img src="../../resource/home/logo.png" alt="" />
			</div>
			<div class="header-right">
				<ul class="header-nav">
					<li>
						<a href="">魅族商城</a>
					</li>
					<li>
						<a href="">魅族手机</a>
					</li>
					<li>
						<a href="">魅蓝手机</a>
					</li>
					<li>
						<a href="">魅族声学</a>
					</li>
					<li>
						<a href="">智能·配件</a>
					</li>
					<li>
						<a href="">服务</a>
					</li>
					<li>
						<a href="">专卖店</a>
					</li>
					<li>
						<a href="">Flyme</a>
					</li>
					<li>
						<a href="">社区</a>
					</li>
				</ul>
				<ul class="header-service">
					<li class="">
						<input class="autocomlete-input" placeholder="魅蓝 S6">
						<Icon type="ios-search" size="18" style="cursor: pointer;"></Icon>
					</li>
					<li class="header-login-img">
		                <a href="//me.meizu.com/member/index">
		                    <img src="../../resource/home/log.png">
		                </a>
		            </li>
		            <li>
		                <a href="//cart.meizu.com">
		                    <Icon type="ios-cart-outline" size="30"></Icon>
		                    <span class="layout-header-service-cart-num">0</span>
		                </a>
		            </li>
				</ul>
			</div>
		</div>
		
		<div class="banner">
			<div class="banner-list">
				<Carousel
			        v-model="value3"
			        :autoplay="setting.autoplay"
			        :autoplay-speed="setting.autoplaySpeed"
			        :dots="setting.dots"
			        :radius-dot="setting.radiusDot"
			        :trigger="setting.trigger"
			        :arrow="setting.arrow"
			        class="banner-slider">
			        <CarouselItem v-for="list in bannerList">
			            <div class="single">
							<a href="#">
								<img :src="list.imgUrl" alt="" />
							</a>
						</div>
			        </CarouselItem>
			   </Carousel>
			</div>
		</div>
	</div>
</template>

<script>
	import {snatch} from "Utils/networker.js";
	export default {
		name: "header-bar",
		data () {
			return {
				value3: 0,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: true,
                    trigger: 'click',
                    arrow: 'always'
                },
                bannerList: [],
			};
		},
		mounted:function(){
			this.getBanner();
		},
		methods:{
			getBanner: function(){
				snatch("banner",'get').then(res=>{
					console.log(res);
					this.bannerList = res;
				});
			}
		}
	};
</script>

<style scoped lang="less">
	.container{
		height: 80px;
		.content{
			width: 1240px;
			height: 80px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			.header-logo{
				height: 100%;
				img{
					height: 100%;
				}
			}
			.header-right{
				width: 1024px;
				height: 100%;
				display: flex;
				.header-nav{
					height: 100%;
					li{
						height: 100%;
						display: flex;
						float: left;
						align-items: center;
						margin: 0 15px;
						font-family: "PingFang SC","\5FAE\8F6F\96C5\9ED1","Microsoft Yahei",Arial,Helvetica,sans-serif,"\5B8B\4F53";
    					font-size: 14px;
    					a{
    						color: #000;
    					}
					}
				}
				.header-service{
					height: 100%;
					li{
						height: 100%;
						display: flex;
						float: left;
						align-items: center;
					}
					li:first-child{
						position: relative;
					    height: 30px;
					    border-radius: 20px;
					    padding: 0;
					    margin: 25px 17px 30px;
					    width: 180px;
					    text-align: right;
					    word-break: keep-all;
					    white-space: nowrap;
					    border: 1px solid #e5e5e5;
					    line-height: 28px;
					    transition: all .8s ease-in-out;
					    .autocomlete-input{
							vertical-align: middle;
						    border: none;
						    outline: 0;
						    width: 135px;
						    height: 20px;
						    margin-left: 15px;
						    transition: width .5s;
						    font-size: 12px;
						    line-height: 20px;
						    color: #333;
						}
					}
					.header-login-img{
						position: relative;
					    float: left;
					    padding: 0px 17px 0px 17px;
					    a{
					    	position: relative;
						    display: inline-block;
						    vertical-align: middle;
						    width: 24px;
						    height: 24px;
						    line-height: 24px;
						    overflow: hidden;
						    color: #666;
						    img{
						    	display: block;
							    width: 100%;
							    height: 100%;
							    border-radius: 100%;
						    }
					    }
					}
					li:last-child{
					    position: relative;
					    padding: 0 0 0 17px;
					    a{
					    	position: relative;
						    display: inline-block;
						    vertical-align: middle;
						    width: 30px;
						    height: 30px;
						    line-height: 24px;
						    overflow: hidden;
						    color: #666;
						    span{
					    	    position: absolute;
							    left: -3px;
							    top: 4px;
							    width: 100%;
							    height: 100%;
							    color: #e02b41;
							    font-size: 12px;
							    line-height: 14px;
							    text-align: center;
						    }
					    }
					}
				}
			}
		}
		.banner{
			.banner-list{
				.banner-slider{
					.left{
					    left: 570px;
					}
				}
			}
		}
		
	}
</style>