<template>
	<div>
		<!-- 头部 -->
		<Head title="商城"></Head>
		<!-- 中间内容部分 -->
		<mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1"><router-link tag="a" to="/Qiye">企业</router-link></mt-tab-item>
			<mt-tab-item id="2"><router-link tag="a" to="/Yidd">App</router-link></mt-tab-item>
			<mt-tab-item id="3"><router-link tag="a" to="/Shpu">商铺</router-link></mt-tab-item>
			<mt-tab-item id="3"><router-link tag="a" to="/Geren">个人</router-link></mt-tab-item>
			<mt-tab-item id="3"><router-link tag="a" to="/Wye">H5网页</router-link></mt-tab-item>
			<mt-tab-item id="3"><router-link tag="a" to="/Wzsy">网站首页</router-link></mt-tab-item>
		</mt-navbar>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<!-- 底部 -->
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../components/Foot.vue';
import Head from '../components/Head.vue';
export default {
	name: 'Shopping',
	components: {
		Foot,
		Head
	}
};
</script>

<style scoped lang="less">
.mint-search {
	height: 44px;
	// margin-top:50px;
}
</style>
