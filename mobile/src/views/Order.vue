<template>
	<div>
		<!-- 头部 -->
		<Head title="订单"></Head>
		<ul class="naver">
			<li v-for="item in order" :key="item">
				<h2>
					<i></i>
					<p>{{item.label}}</p>
					<p>{{item.payment}}</p>
					<p>{{item.time}}</p>
				</h2>
				<h3>
					<span>{{item.money}}</span>
					<a href="" class="current">{{item.zhifu}}</a>
					<a href="">{{item.quxiao}}</a>
				</h3>
			</li>
		</ul>
		<!-- 底部 -->
		<Foot></Foot>
	</div>
</template>

<script>
	import Foot from '../components/Foot.vue';
	import Head from '../components/Head.vue';
	export default{
		name:'Order',
		components:{
			Foot,
			Head,
		},
		data(){
			return{
				order:[				
					{label:'移动app网页',payment:'待支付',time:'剩余14分58秒',money:'￥9.9',zhifu:'立即支付',quxiao:'取消订单',},
					{label:'移动app网页',payment:'待支付',time:'剩余14分58秒',money:'￥9.9',zhifu:'立即支付',quxiao:'取消订单',},
				],
			}
		},
	}
</script>

<style scoped>
	/* --------------------------中间内容------------------------- */
	.naver {
		width:94%;
		margin:10px 3%;
	}
	.naver li {
		border-radius:5px;
		border:1px solid #ddd;
		background:#fff;
		overflow:hidden;
		margin-bottom:10px;
	}
	.naver li h2 {
		border-bottom:1px solid #ddd;
		line-height:45px;
		font-weight:normal;
		padding:0 10px;
		overflow:hidden;
	}
	.naver li h2 i {
		height:20px;
		width:2px;
		background:#26a2ff;
		float:left;
		display:block;
		margin-top:12px;
	}
	.naver li h2 p:nth-of-type(1) {
		float:left;
		margin-left:10px;
		font-size:16px;
	}
	.naver li h2 p:nth-of-type(2) {
		color:#26a2ff;
		float:right;
		margin-right:5px;
		font-weight:normal;
		font-size:16px;
	}
	.naver li h2 p:nth-of-type(3) {
		color:#999;
		float:right;
		font-size:1rem;
		font-style:normal;
		margin-right:8px;
	}
	.naver li p {
		line-height:45px;
		font-weight:normal;
		padding:0 10px;
		overflow:hidden;
	}
	.naver li p img {
		float:left;
		margin-top:8px;
		width:23px;
	}
	.naver li p span {
		float:left;
		border-bottom:1px solid #ddd;
		margin-left:15px;
		width:85%;
	}
	.naver li h3 {
		font-weight:normal;
		padding:10px;
		overflow:hidden;
	}
	.naver li h3 span {
		color:#26a2ff;
		float:left;
		line-height:35px;
		font-size:16px;
	}
	.naver li h3 a {
		float:right;
		border:1px solid #ddd;
		line-height:35px;
		border-radius:5px;
		padding:0 15px;
		margin-right:5px;
		display:inline-block;
	}
	.naver li h3 .current {
		background:#26a2ff;
		color:#fff;
	}
</style>
