<template>
	<div>
		<ul class="yid">
			<router-link tag="li" to="/Details" v-for="item in geren" :key="item">
				<i :style="{backgroundImage: 'url(' + item.img + ')',backgroundSize: '100% 100%'}"></i>
				<mt-button type="primary" size="small">{{item.button}}</mt-button>
			</router-link>
		</ul>
		<mt-button type="primary" size="large">查看更多</mt-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			geren: [
				{ img: 'images/wangye18.jpg', button: '立即下载' },
				{ img: 'images/wangye19.jpg', button: '立即下载' },
				{ img: 'images/wangye20.jpg', button: '立即下载' },
				{ img: 'images/wangye21.jpg', button: '立即下载' },
				{ img: 'images/wangye22.jpg', button: '立即下载' },
				{ img: 'images/wangye23.jpg', button: '立即下载' },
				{ img: 'images/wangye24.jpg', button: '立即下载' },
				{ img: 'images/wangye25.jpg', button: '立即下载' },
				{ img: 'images/wangye26.jpg', button: '立即下载' },
				{ img: 'images/wangye27.jpg', button: '立即下载' },
				{ img: 'images/wangye28.jpg', button: '立即下载' },
				{ img: 'images/wangye29.jpg', button: '立即下载' },
			],
		};
	}
};
</script>

<style scoped lang="less">
.yid {
	width: 100%;
	margin: 0 auto;
	text-align: center;
	overflow: hidden;
	margin-bottom: 10px;
	li {
		width: 125px;
		height: 170px;
		float: left;
		margin-bottom: 30px;
		margin-top: 10px;
		margin-left: 10px;
		text-align: center;
		i {
			display: inline-block;
			width: 125px;
			height: 160px;
			border-radius: 8px;
		}
	}
}
.yid-show {
	width: 125px;
	height: 0px;
	margin-top: 5px;
	text-align: center;
	border-radius: 8px;
	a {
		width: 100px;
		height: 25px;
		line-height: 25px;
		background: #26a2ff;
		color: rgba(255, 255, 255, 1);
		border-radius: 8px;
		display: inline-block;
	}
}
</style>
