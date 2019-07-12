<template>
	<!-- 底部导航栏 -->
	<div data-am-widget="navbar" class="am-navbar  gm-foot am-no-layout" id="">
		<ul class="am-navbar-nav am-cf am-avg-sm-4">
			<router-link tag="li" to="/">
				<a href="" class="curr">
					<span class="am-icon-home"></span>
					<span class="am-navbar-label">首页</span>
				</a>
			</router-link>
			<router-link tag="li" to="/Shopping">
				<a href="" class="">
					<span class="am-icon-th-large"></span>
					<span class="am-navbar-label">商城</span>
				</a>
			</router-link>
			<router-link tag="li" to="/Order">
				<a href="" class="">
					<span class="am-icon-reorder"></span>
					<span class="am-navbar-label">订单</span>
				</a>
			</router-link>
			<router-link tag="li" to="/Personal">
				<a href="" class="">
					<span class="am-icon-user"></span>
					<span class="am-navbar-label">我的</span>
				</a>
			</router-link>
		</ul>
	</div>
</template>

<script type="text/javascript" src="../../public/js/jquery.min.js"></script>
<script type="text/javascript" src="../../public/js/amazeui.min.js"></script>
<script>
export default {
	name: 'Foot'
};
</script>

<style>
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
.am-navbar ul li.active{
	color: #26a2ff;
}
.am-navbar ul li.router-link-active{
	color: #26a2ff;
} 
</style>
