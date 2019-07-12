<template>
	<div>
		<!-- 头部 -->
		<Head title="充值"></Head>
		<!-- 中间内容部分 -->
		<div class="recharge">
			<p>账户充值：</p>
			<p>￥9.9</p>
		</div>
		<ul class="naver">
			<li>
				<label class="am-radio-inline">
					<input type="radio" checked="checked" name="radio10" value="1" data-am-ucheck="" class="am-ucheck-radio" />
					<span class="am-ucheck-icons">
						<i class="am-icon-unchecked"></i>
						<i class="am-icon-checked"></i>
					</span>
				</label>
				<img src="images/wx.jpg" alt="" />
				<span>微信支付</span>
			</li>
			<li>
				<label class="am-radio-inline">
					<input type="radio" checked="checked" name="radio10" value="1" data-am-ucheck="" class="am-ucheck-radio" />
					<span class="am-ucheck-icons">
						<i class="am-icon-unchecked"></i>
						<i class="am-icon-checked"></i>
					</span>
				</label>
				<img src="images/zfb.jpg" alt="" />
				<span>支付宝支付</span>
			</li>
			<li>
				<label class="am-radio-inline">
					<input type="radio" checked="checked" name="radio10" value="1" data-am-ucheck="" class="am-ucheck-radio" />
					<span class="am-ucheck-icons">
						<i class="am-icon-unchecked"></i>
						<i class="am-icon-checked"></i>
					</span>
				</label>
				<img src="images/yl.png" alt="" />
				<span>银联在线支付</span>
			</li>
		</ul>
		<input type="button" value="充值" class="btn" />
		<!-- 底部 -->
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../components/Foot.vue';
import Head from '../components/Head.vue';
export default {
	name: 'Recharge',
	components: {
		Foot,
		Head
	}
};
</script>

<style scoped lang="less">
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
.recharge {
	padding: 8px;
	overflow: hidden;
	p {
		font-size: 18px;
		color: #4b505a;
		float: left;
		&:nth-of-type(2) {
			color: #26a2ff;
		}
	}
}
.naver {
	background: #fff;
	border-radius: 5px;
	overflow: hidden;
	margin: 0 1rem 3rem;
	li {
		border-bottom: 1px solid #ddd;
		line-height: 40px;
		overflow: hidden;
		padding: 0.5rem 1rem;
		&:last-child {
			border-bottom: 0;
		}
	}
	label {
		float: left;
		height: 22px;
		margin-top: 10px;
	}
	img {
		float: left;
		margin-left: 5px;
		margin-top: 7px;
	}
	span {
		float: left;
		margin-left: 5px;
		display: block;
	}
}
.btn {
	margin: 1rem 3%;
	color: #fff;
	text-align: center;
	display: block;
	width: 94%;
	font-size: 1.6rem;
	padding: 1rem;
	border-radius: 5px;
	background: #26a2ff;
	border: 0;
}
</style>
