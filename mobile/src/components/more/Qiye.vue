<template>
	<div>
		<ul class="qiye">
			<li v-for="item in qiye" :key="item">
				<i :style="{ backgroundImage: 'url(' + item.img + ')', backgroundSize: '100% 100%' }"></i>
				<div class="qiye-show">
					<span class="good-btn-left">{{ item.shiyong }}</span>
					<span class="good-btn-right">{{ item.yulan }}</span>
					<h1>{{ item.h1 }}</h1>
				</div>
			</li>
			<mt-button type="primary" size="large">查看更多</mt-button>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			qiye: [
				{ img: 'images/wangye6.png', shiyong: '使用', yulan: '预览', h1: '汽车维护保养公司网站模板' },
				{ img: 'images/wangye7.png', shiyong: '使用', yulan: '预览', h1: '汽车维护保养公司网站模板' },
				{ img: 'images/wangye8.png', shiyong: '使用', yulan: '预览', h1: '汽车维护保养公司网站模板' },
				]
		};
	}
};
</script>

<style scoped lang="less">
.qiye {
	width: 100%;
	border-radius: 8px;
	overflow: hidden;
	li {
		width: 100%;
		border-radius: 8px;
		i {
			display: inline-block;
			width: 414px;
			height: 205px;
			border-radius: 8px;
		}
		h1 {
			font-size: 20px;
			text-align: center;
			color: #ccc;
		}
	}
}
.qiye-show {
	width: 100%;
	margin-bottom: 10px;
	overflow: hidden;
	.good-btn-left {
		display: block;
		float: left;
		width: 52px;
		height: 30px;
		line-height: 30px;
		background: #26a2ff;
		color: rgba(255, 255, 255, 1);
		font-size: 16px;
		text-align: left;
		top: -30px;
		left: -2px;
		padding-left: 4px;
		border-radius: 0 9px 9px 0;
	}
	.good-btn-right {
		display: block;
		float: right;
		width: 52px;
		height: 30px;
		line-height: 30px;
		background: rgba(255, 102, 0, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 16px;
		text-align: right;
		top: -30px;
		right: -2px;
		padding-right: 4px;
		border-radius: 9px 0 0 9px;
	}
}
</style>
