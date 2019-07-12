<template>
	<div>
		<!-- 头部 -->
		<Head title="个人中心"></Head>
		<!-- 中间内容部分 -->
		<div class="toux">
			<img src="images/1.jpg"/>
			<p>
				<a href="">未登录</a>
			</p>
		</div>
		<ul class="naver">
			<li>
				<a href="wallet.html">
					<p>0</p>
					<p>余额</p>
				</a>
			</li>
			<li>
				<a href="">
					<p>0</p>
					<p>积分</p>
				</a>
			</li>
			<li>
				<a href="">
					<p>0</p>
					<p>优惠券</p>
				</a>
			</li>
		</ul>
		<ul class="naver">
			<router-link tag="li" to="/Wallet">
				<a href="">
					<img src="images/i1.png" alt="">
					<span>钱包</span>
					<i class="am-icon-angle-right"></i>
				</a>
			</router-link>
		</ul>
		<ul class="naver">
			<router-link tag="li" to="/Opinion">
				<a href="">
					<img src="images/i3.png" alt="">
					<span>意见反馈</span>
					<i class="am-icon-angle-right"></i>
				</a>
			</router-link>
			<router-link tag="li" to="/About">
				<a href="">
					<img src="images/i4.png" alt="">
					<span>关于我们</span>
					<i class="am-icon-angle-right"></i>
				</a>
			</router-link>
			<li>
				<a href="">
					<img src="images/i5.png" alt="">
					<span>呼叫客服</span>
					<i class="am-icon-angle-right"></i>
					<p>800-820-8820</p>
				</a>
			</li>
		</ul>
		<!-- 底部 -->
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../components/Foot.vue';
import Head from '../components/Head.vue';
export default {
	name: 'Personal',
	components: {
		Foot,
		Head
	}
};
</script>

<style scoped lang="less">
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
/* --------------------------中间内容------------------------- */
/* 头像部分*/
.toux {
	width: 100%;
	background-color: #26a2ff;
	text-align: center;
	padding-top: 10px;
	img {
		border-radius: 100%;
		width: 120px;
		height: 120px;
		margin: 0 auto;
		display: block;
	}
	p {
		text-align: center;
		line-height: 50px;
		a {
			background: #26a2ff;
			color: #fff;
			border-radius: 20px;
			padding: 5px 20px;
		}
	}
}
/* 余额/积分/优惠券 */
.naver {
	width: 94%;
	margin: 10px 3%;
	overflow: hidden;
	border-radius: 5px;
	border: 1px solid #ddd;
	background: #fff;
	&:nth-of-type(1) {
		li {
			width: 33%;
			float: left;
			border-right: 1px solid #ddd;
			text-align: center;
			margin: 10px 0;
			&:nth-last-of-type(1) {
				border: none;
			}
			a {
				p {
					&:nth-of-type(1) {
						color: #26a2ff;
						font-size: 15px;
					}
					&:nth-of-type(2) {
						font-size: 15px;
					}
				}
			}
		}
	}
	img {
		width: 30px;
		height: 31px;
		float: left;
	}
	&:nth-of-type(2) {
		li {
			border-bottom: 1px solid #ddd;
			margin: 0 1rem;
			padding: 1rem 0;
			overflow: hidden;
			a {
				display: block;
				overflow: hidden;
				line-height: 31px;
			}
			span {
				font-size: 15px;
				margin-left: 2%;
			}
			i {
				float: right;
			}
		}
	}
	&:nth-of-type(3) {
		li {
			border-bottom: 1px solid #ddd;
			margin: 0 1rem;
			padding: 1rem 0;
			overflow: hidden;
			a {
				display: block;
				overflow: hidden;
				line-height: 31px;
			}
			span {
				font-size: 15px;
				margin-left: 2%;
			}
			p {
				float: right;
				font-style: normal;
				color: #666;
				margin-right: 2%;
			}
			i {
				float: right;
			}
		}
	}
}
</style>
