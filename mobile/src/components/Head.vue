<template>
	<!-- 顶部标题 -->
	<header data-am-widget="header" class="am-header am-header-default "><!-- am-header-fixed -->
		<div class="am-header-left am-header-nav">
			<a href="javascript:history.back()"><i class="am-icon-caret-left"></i></a>
		</div>
		<h1 class="am-header-title">
			<a href="#title-link" id="tit">{{ title }}</a>
		</h1>
		<router-link tag="a" to="/Login">
			<div class="am-header-right am-header-nav"><i class="am-icon-user"></i></div>
		</router-link>
	</header>
</template>

<script type="text/javascript" src="../../public/js/jquery.min.js"></script>
<script type="text/javascript" src="../../public/js/amazeui.min.js"></script>
<script>
export default {
	name: 'Head',
	props: {
		title: {
			type: String,
			default: '首页'
		}
	}
};
</script>

<style>
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
</style>
