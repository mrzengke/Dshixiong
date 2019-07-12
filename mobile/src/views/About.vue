<template>
	<div>
		<!-- 头部 -->
		<Head title="关于我们"></Head>
		<!-- 中间内容部分 -->
		<div class="toux"><img src="../assets/logo.jpg" /></div>
		<div class="edition">
			<p>大师兄</p>
			<p>V1.2.0</p>
		</div>
		<ul class="about">
			<li>
				<p>微信订阅</p>
				<p>ayjiabang</p>
			</li>
			<li>
				<p>新浪微博</p>
				<p>ajyazxl1314@sina.com</p>
			</li>
			<li>
				<p>邮箱</p>
				<p>1135800463@qq.com</p>
			</li>
			<li><p>...</p></li>
		</ul>
		<!-- 底部 -->
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../components/Foot.vue';
import Head from '../components/Head.vue';
export default {
	name: 'About',
	components: {
		Foot,
		Head
	}
};
</script>

<style scoped lang="less">
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
.toux {
	width: 100%;
	// background-color: #26a2ff;
	text-align: center;
	padding-top: 10px;
	padding-bottom: 40px;
	img {
		border-radius: 100%;
		width: 120px;
		height: 120px;
		margin: 0 auto;
		display: block;
	}
}
.edition {
	text-align: center;
	margin: 1rem;
	p {
		&:nth-of-type(1) {
			font-size: 18px;
			color: #999;
			font-weight: normal;
		}
		&:nth-of-type(2) {
			color: #999;
			font-weight: normal;
		}
	}
}
.about {
	width: 94%;
	margin: 10px 3%;
	border-radius: 5px;
	border: 1px solid #ddd;
	background: #fff;
	li {
		border-bottom: 1px solid #ddd;
		padding: 1rem 0 1rem 0;
		margin: 1rem;
		overflow: hidden;
		p {
			&:nth-of-type(1) {
				font-size: 16px;
				color: #333;
				float: left;
			}
			&:nth-of-type(2) {
				font-size: 14px;
				color: #999;
				float: left;
				padding-left: 1rem;
			}
		}
		&:nth-last-child(1) {
			border: none;
			p {
				font-size: 14px;
				color: #666;
			}
		}
	}
}
</style>
