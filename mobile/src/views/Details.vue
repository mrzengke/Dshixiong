<template>
	<div>
		<!-- 头部 -->
		<Head title="详情"></Head>
		<!-- 中间内容部分 -->
			<section class="zk-scrollView">
				<div class="img_gallery" id="commodity">
					<div class="main_img">
						<mt-swipe :auto="4000">
							<mt-swipe-item><img src="images/qxwy1.jpg" /></mt-swipe-item>
							<mt-swipe-item><img src="images/qxwy2.jpg" /></mt-swipe-item>
							<mt-swipe-item><img src="images/qxwy3.jpg" /></mt-swipe-item>
						</mt-swipe>
					</div>
				</div>
				<div class="zk-flex zk-flex-clear-line">
					<div class="zk-flex-box">
						<h4>9.9</h4>
						<p>html静态简约清新个人博客网页模板毕业生简历作品展示简洁前端</p>
					</div>
					<div class="zk-share-box" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
						<i class="zk-icon-share"></i>
						<p>分享</p>
					</div>
				</div>
				<div class="qxwy">
					<div class="show">
						<p>发货地</p>
						<p>********************</p>
						<img src="images/youjiantou1.png" alt="">
					</div>
					<div class="show">
						<p>服务</p>
						<p>24小时自动发货百度网盘链接</p>
						<img src="images/youjiantou1.png" alt="">
					</div>
					<div class="anniu">
						<a href="">提交订单</a>
						<a href="">立即购买</a>
					</div>
				</div>
				<div class="zk-login-line"><h2>商品详情</h2></div>
				<div class="zk-page-box">
					<p><img src="images/qxwy1.jpg" /></p>
					<p><img src="images/qxwy2.jpg" /></p>
					<p><img src="images/qxwy3.jpg" /></p>
				</div>
			</section>
		</section>
		<div class="m-actionsheet" id="actionSheet">
			<div class="zk-show-box">
				<div class="zk-show-box-title zk-footer-flex">
					<div class="b-line zk-coll-share-box">
						<a href="javascript:;" class="zk-coll-share-item">
							<div class="zk-coll-share-img"><img src="images/icon-wx.png" alt=""></div>
							<div class="zk-coll-share-text">微信好友</div>
						</a>
						<a href="javascript:;" class="zk-coll-share-item">
							<div class="zk-coll-share-img"><img src="images/icon-pyq.png" alt=""></div>
							<div class="zk-coll-share-text">朋友圈</div>
						</a>
						<a href="javascript:;" class="zk-coll-share-item">
							<div class="zk-coll-share-img"><img src="images/icon-qq.png" alt=""></div>
							<div class="zk-coll-share-text">QQ</div>
						</a>
						<a href="javascript:;" class="zk-coll-share-item">
							<div class="zk-coll-share-img"><img src="images/icon-kj.png" alt=""></div>
							<div class="zk-coll-share-text">QQ空间</div>
						</a>
						<a href="javascript:;" class="zk-coll-share-item">
							<div class="zk-coll-share-img"><img src="images/icon-txw.png" alt=""></div>
							<div class="zk-coll-share-text">腾讯微博</div>
						</a>
						<a href="javascript:;" class="zk-coll-share-item">
							<div class="zk-coll-share-img"><img src="images/icon-wb.png" alt=""></div>
							<div class="zk-coll-share-text">新浪微博</div>
						</a>
					</div>
					<div class="zk-coll-cancel"><a href="javascript:;" id="cancel" class="">取消</a></div>
				</div>
			</div>
		</div>
		<!-- 底部 -->
		<Foot></Foot>
	</div>
</template>

<script src="../../public/js/layer.js"></script>
<script>
import Foot from '../components/Foot.vue';
import Head from '../components/Head.vue';
export default {
	name: 'Details',
	components: {
		Foot,
		Head
	}
};
</script>

<style scoped lang="less">
@import '../../public/css/collage-page.css';
@import '../../public/css/public.css';
.mint-swipe {
	overflow: hidden;
	position: relative;
	height: 280px;
	width: 94%;
	margin: 0 3%;
	text-align: center;
}
</style>
