<template>
	<div>
		<Head title="首页"></Head>
		<!-- 轮播 -->
		<mt-swipe :auto="2000">
			<mt-swipe-item v-for="item in scroll1" :key="item"><img :src="item" class="img" /></mt-swipe-item>
		</mt-swipe>
		<!-- 各种入口 -->
		<ul class="naver">
			<!-- <li v-for="item in entrance" :key="item">
				<div class="am-gallery-item">
					<a v-link="{ path: entrance.path }">
						<i :style="{ backgroundImage: 'url(' + item.img + ')', backgroundSize: '100% 100%' }"></i>
						<h2>{{ item.h2 }}</h2>
						<p>{{ item.p }}</p>
					</a>
				</div>
			</li> -->
			<router-link tag="li" to="/Geren">
				<div class="am-gallery-item">
					<a href="">
						<img src="images/1.jpg" alt="" />
						<h2>个人</h2>
						<p>针对个人提供</p>
					</a>
				</div>
			</router-link>
			<router-link tag="li" to="/Qiye">
				<div class="am-gallery-item">
					<a href="">
						<img src="images/2.jpg" alt="" />
						<h2>企业</h2>
						<p>针对企业提供</p>
					</a>
				</div>
			</router-link>
			<router-link tag="li" to="/Shpu">
				<div class="am-gallery-item">
					<a href="">
						<img src="images/3.jpg" alt="" />
						<h2>商家</h2>
						<p>针对商家提供</p>
					</a>
				</div>
			</router-link>
			<router-link tag="li" to="/Wye">
				<div class="am-gallery-item">
					<a href="">
						<img src="images/4.jpg" alt="" />
						<h2 class="geng">更多</h2>
					</a>
				</div>
			</router-link>
		</ul>
		<div class="wm">
			<h2>我们的一些作品</h2>
			<p>这是我们工作人员平时写的一些网页。</p>
			<ul class="naver1">
				<router-link tag="li" to="/Details" v-for="work in works" :key="work">
					<i :style="{ backgroundImage: 'url(' + work.img + ')', backgroundSize: '100% 100%' }"></i>
					<h2>{{ work.h2 }}</h2>
					<p>{{ work.p }}</p>
				</router-link>
			</ul>
		</div>
		<div class="wm">
			<h2>关于我们</h2>
			<!-- <p>这是我们工作人员平时写的一些网页。</p> -->
			<mt-swipe :auto="4000" id="mint-swipe1">
				<mt-swipe-item v-for="item in scroll2" :key="item"><img :src="item" class="img" /></mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="container">
			<h2>—时事通讯—</h2>
			<p>订阅我们的时事通讯，我们绝不会发送垃圾邮件或强调您！</p>
			<input type="text" class="shuru" />
			<input type="button" value="订阅" class="btn" />
			<hr />
			<p>版权所有2015.模板在线</p>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../components/Foot.vue';
import Head from '../components/Head.vue';
export default {
	name: 'Index',
	components: {
		Foot,
		Head
	},
	data() {
		return {
			scroll1: ['images/qxwy5.jpg', 'images/qxwy6.jpg', 'images/qxwy7.jpg', 'images/qxwy8.jpg', 'images/qxwy9.jpg'],
			/*
			entrance: [
				{ img: 'images/1.jpg', h2: '个人', p: '针对个人提供',path: '/Geren'  },
				{ img: 'images/2.jpg', h2: '企业', p: '针对企业提供', path: '/Qiye' },
				{ img: 'images/3.jpg', h2: '商家', p: '针对商家提供',path: '/Shpu' },
				{ img: 'images/4.jpg', h2: '更多', path: '/Wye' }
			],*/
			works: [
				{ img: 'images/5.jpg', h2: '管易云', p: '利用响应式布局编写的网页' },
				{ img: 'images/5.jpg', h2: '管易云', p: '利用响应式布局编写的网页' },
				{ img: 'images/5.jpg', h2: '管易云', p: '利用响应式布局编写的网页' },
				{ img: 'images/5.jpg', h2: '管易云', p: '利用响应式布局编写的网页' },
				{ img: 'images/5.jpg', h2: '管易云', p: '利用响应式布局编写的网页' },
				{ img: 'images/5.jpg', h2: '管易云', p: '利用响应式布局编写的网页' }
			],
			scroll2: ['images/7.jpg', 'images/8.jpg', 'images/9.jpg']
		};
	}
};
</script>

<style scoped lang="less">
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
/* --------------------------中间内容------------------------- */
.naver {
	width: 100%;
	margin: 10px 0;
	border-radius: 5px;
	border: 1px solid #ddd;
	background: #fff;
	overflow: hidden;
	text-align: center;
	padding: 15px 0;
	li {
		float: left;
		width: 50%;
		a {
			color: #666;
		}
		img {
			width: 25%;
			display: block;
			margin: 5px auto;
		}
		/*i {
			width: 25%;
			height: 60px;
			display: inline-block;
			margin: 5px auto;
		}*/
		h2 {
			text-align: center;
		}
		.geng {
			margin-top: 20px;
		}
		p {
			text-align: center;
		}
	}
}
.wm {
	width: 100%;
	margin: 10px 0;
	border-radius: 5px;
	border: 1px solid #ddd;
	background: #fff;
	overflow: hidden;
	padding: 15px 0;
	h2 {
		text-align: center;
		color: #666;
	}
	p {
		text-align: center;
	}
	.naver1 {
		background: #fff;
		overflow: hidden;
		padding: 15px 0;
		li {
			float: left;
			width: 33%;
			a {
				color: #666;
			}
			i {
				width: 90%;
				height: 65px;
				display: block;
				margin: 5px auto;
			}
			h2 {
				font-size: 14px;
				text-align: center;
			}
			p {
				font-size: 12px;
				text-align: center;
			}
		}
	}
}

// 轮播
.mint-swipe {
	overflow: hidden;
	position: relative;
	height: 270px;
	width: 100%;
	// margin: 0 3%;
	text-align: center;
	img {
		height: 270px;
		width: 100%;
	}
}

#mint-swipe1 {
	overflow: hidden;
	position: relative;
	height: 100px;
	width: 100%;
	// margin: 0 3%;
	text-align: center;
}

.container {
	width: 100%;
	margin: 10px 0;
	border-radius: 5px;
	border: 1px solid #ddd;
	background: #fff;
	overflow: hidden;
	text-align: center;
	padding: 15px 0;
	h2 {
		color: #666;
		margin-bottom: 15px;
	}
	p {
		color: #666;
	}
	.shuru {
		background-color: rgba(255, 255, 255, 0.4);
		font-size: 12px;
		color: #666;
		border: solid 1px #cacaca;
		margin: 3% 3%;
		width: 94%;
		font-size: 14px;
		margin-bottom: 30px;
		padding: 1rem;
		border-radius: 5px;
		border: 1px solid #ddd;
	}
	.btn {
		margin: 1rem 3%;
		color: #fff;
		margin: 0 auto;
		text-align: center;
		display: block;
		width: 50%;
		font-size: 1.4rem;
		padding: 1rem;
		border-radius: 5px;
		background: #26a2ff;
		border: 0;
	}
}
</style>
