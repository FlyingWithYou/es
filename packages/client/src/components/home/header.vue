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
			        :height="setting.height"
			        class="banner-slider">
			        <CarouselItem v-for="(list, index) in bannerList" :key="index">
			            <div class="single">
							<a href="#">
								<img :src="list.imgUrl" alt="" />
							</a>
						</div>
			        </CarouselItem>
			   </Carousel>
			</div>
			<ul class="home-category">
				<li class="home-category-item" v-for="(nav, index) in navBar" v-on:mouseenter="showSecondLevel(index)" @mouseleave="hideSecondLevel(index)">
					<a href="#" class="home-category-link">{{nav.name}}</a>
					<div class="home-category-child" v-show="nav.secondVisible">
						<div class="home-category-child-list">
							<div class="single" v-for="item in nav.children">
								<div class="top">
									<a href="#">{{item.name}}<Icon type="ios-arrow-right"></Icon></a>
								</div>
								<div class="bottom">
									<a href="#">
										<img src="https://fms.res.meizu.com/dms/2018/03/05/2f25a5fa-1f9c-4c52-841a-f3aedffc54de.jpg" alt="" />
										<div>MLIVING东京asda阿萨的</div>
									</a>
									<a href="#">
										<img src="https://fms.res.meizu.com/dms/2018/03/05/2f25a5fa-1f9c-4c52-841a-f3aedffc54de.jpg" alt="" />
										<div>MLIVING东京asda阿萨的</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</li>
				<!--<li class="home-category-item"><a href="#" class="home-category-link">智能设备</a></li>
				<li class="home-category-item"><a href="#" class="home-category-link">智能穿戴</a></li>
				<li class="home-category-item"><a href="#" class="home-category-link">游戏设备</a></li>
				<li class="home-category-item"><a href="#" class="home-category-link">数码影音</a></li>
				<li class="home-category-item"><a href="#" class="home-category-link">手机配件</a></li>
				<li class="home-category-item"><a href="#" class="home-category-link">移动存储</a></li>
				<li class="home-category-item"><a href="#" class="home-category-link">生活周边</a></li>-->
			</ul>
		</div>
	</div>
</template>

<script>
	import {snatch} from "Utils/networker.js";
	import {createTree} from "Utils/tree.js";
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
                    arrow: 'always',
                    height: 480
                },
                bannerList: [],
                navBar: [],
			};
		},
		mounted:function(){
			this.getBanner();
			this.getNavigationBar();
		},
		methods:{
			getBanner(){
				snatch("banner",'get').then(res=>{
					console.log(res);
					this.bannerList = res;
				});
			},
			getNavigationBar(){
				snatch("menu",'get').then(res=>{
					var arr = createTree(res,'0');
					console.log(arr);
					for(var i = 0;i < arr.length;i++){
						arr[i].secondVisible = false;
					}
					this.navBar = arr;
				});
			},
			showSecondLevel(index){
				this.navBar[index].secondVisible = true; 
			},
			hideSecondLevel(index){
				this.navBar[index].secondVisible = false; 
			},
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
			position: relative;
			.banner-list{
				.banner-slider{
					width: 100%;
    				height: 480px;
					.left{
					    left: 570px;
					}
					.single{
						width: 100%;
						height: 100%;
						a{
							width: 100%;
							height: 100%;
							img{
								height: 100%;
								width: 100%;
							}
						}
					}
				}
			}
			.home-category{
				background-color: rgba(248,247,247,.8);
				position: absolute;
			    left: 50%;
			    top: 0;
			    margin-left: -620px;
			    height: 480px;
			    width: 244px;
			    background-color: rgba(248,247,247,.8);
			    background-color: #f8f7f7\9;
			    z-index: 2;
			    padding-top: 12px;
			    .home-category-item{
			    	height: 57px;
				    line-height: 57px;
				    background-color: transparent;
				    transition: all .5s;
				    .home-category-link{
				    	display: block;
					    color: #333;
					    padding: 0 30px;
					    height: 100%;
					    font-size: 14px;
				    }
				    .home-category-child{
				    	position: absolute;
					    height: 480px;
					    left: 244px;
					    top: 0px;
					    background-color: #fff;
					    white-space: nowrap;
					    font-size: 14px;
					    box-shadow: 1px 1px 2px rgba(0,0,0,.1);
					    .home-category-child-list{
					    	display: inline-block;
						    vertical-align: top;
						    margin: 15px 28px 15px 25px;
						    width: 320px;
						    height: 450px;
						    .single{
						    	.top{
						    		a{
						    			display: inline-block;
						    			position: relative;
									    width: 100%;
									    font-size: 14px;
									    border-bottom: 1px solid #F5F5F5;
									    margin-top: 4px;
									    height: 40px;
									    line-height: 40px;
									    color: #333;
									    margin-bottom: 16px;
									    transition: all .5s;
									    overflow: hidden;
									    .ivu-icon{
									    	position: absolute;
    										right: 10px;
    										top: 14px;
									    }
						    		}
						    		a:hover{
						    			color: #00c3f5;
						    		}
						    	}
						    	.bottom{
						    		display: flex;
						    		flex-wrap: wrap;
						    		a{
						    			font-size: 12px;
									    height: 40px;
									    width: 150px;
									    line-height: 40px;
									    color: #333;
									    margin-bottom: 16px;
									    transition: all .5s;
									    overflow: hidden;
						    			display: block;
						    			img{
						    				float: left;
										    width: 40px;
										    height: 40px
						    			}
						    			div{
						    				float: left;
										    margin-left: 6px;
										    width: 100px;
										    overflow: hidden;
										    white-space: nowrap;
										    word-break: keep-all;
										    text-overflow: ellipsis;
						    			}
						    			div:hover{
						    				color: #00c3f5;
						    			}
						    		}
						    	}
						    }
					    }
				    }
			    }
			    .home-category-item:hover{
			    	background: #fff;
			    }
			}
		}
		
	}
</style>