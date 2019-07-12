<template>
	<div>
		<!-- 头部 -->
		<Head title="我的银行卡"></Head>
		<!-- 中间内容部分 -->
		<ul class="bankcard">
			<li>
				<img src="images/zgyh.png" alt="" />
				<div class="show">
					<p>中国银行</p>
					<p>尾号4770储蓄卡</p>
				</div>
				<i class="am-icon-angle-right"></i>
			</li>
			<li>
				<img src="images/jtyh.png" alt="" />
				<div class="show">
					<p>交通银行</p>
					<p>尾号4551储蓄卡</p>
				</div>
				<i class="am-icon-angle-right"></i>
			</li>
			<li>
				<img src="images/gsyh.png" alt="" />
				<div class="show">
					<p>工商银行</p>
					<p>尾号4336储蓄卡</p>
				</div>
				<i class="am-icon-angle-right"></i>
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
	name: 'Backcard',
	components: {
		Foot,
		Head
	}
};
</script>

<style scoped lang="less">
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
.bankcard {
	border-top: 1px solid #ddd;
	background: #fff;
	margin-top: 1rem;
	li {
		border-bottom: 1px solid #ddd;
		overflow: hidden;
		padding: 1rem;
		img {
			float: left;
			width: 40px;
			height: 40px;
			margin-top: 5px;
		}
	}
	.show {
		float: left;
		width: 80%;
		margin-left: 0.5rem;
		p {
			&:nth-of-type(1) {
				font-size: 18px;
				color: #323232;
			}
			&:nth-of-type(2) {
				font-size: 12px;
				color: #9c9c9c;
			}
		}
	}
	.am-icon-angle-right {
		float: right;
		margin-top: 10px;
		color: #666;
	}
}
</style>
