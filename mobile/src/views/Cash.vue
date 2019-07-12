<template>
	<div>
		<!-- 头部 -->
		<Head title="提现"></Head>
		<!-- 中间内容部分 -->
		<div class="cash">
			<router-link tag="a" to="/Backcard">添加银行卡</router-link>
			<div class="drawal">
				<p>提现金额</p>
				<div class="show">
					<span>￥</span>
					<input type="text" />
				</div>
				<p>当前余额9.9元</p>
			</div>
		</div>
		<input type="button" value="提现" class="btn" />
		<!-- 底部 -->
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../components/Foot.vue';
import Head from '../components/Head.vue';
export default {
	name: 'Cash',
	components: {
		Foot,
		Head
	}
};
</script>

<style scoped lang="less">
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
.cash {
	margin: 1rem 3%;
	background: #fff;
	border-radius: 5px;
	overflow: hidden;
	a {
		font-size: 16px;
		color: #fff;
		line-height: 45px;
		background: #26a2ff;
		display: block;
		padding-left: 1rem;
		border-radius: 5px 5px 0 0;
	}
}
.drawal {
	p {
		&:nth-of-type(1) {
			font-size: 15px;
			text-indent: 1rem;
			line-height: 40px;
		}
		&:nth-last-child(1) {
			font-size: 15px;
			color: #666;
			text-indent: 1rem;
			line-height: 40px;
		}
	}
}
.show {
	border-bottom: 1px solid #dedede;
	overflow: hidden;
	span {
		font-size: 25px;
		line-height: 40px;
		float: left;
		margin-left: 5px;
	}
	input {
		float: left;
		line-height: 40px;
	}
}
.btn {
	margin: 2.5rem 3%;
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
