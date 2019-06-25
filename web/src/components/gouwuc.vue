<template>
	<div class="zdiv1">
		<div class="xtou">
			<div class="xtou1">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/shangc' }">商城</el-breadcrumb-item>
					<el-breadcrumb-item>购物车</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'index',
  props: {},
	data(){
		return {
			
		}
	}
 }
</script>

<style scoped lang="less">
	@kuan:1200px;
	@yanse:#409EFF;
	@xkuan:1400px;
a{
	color: #000;
}
// 购物车
.zdiv1{
	background:#f0f3ef;
	width: 100%;
	min-width: @xkuan;
}
// 当前位置
.xtou{
	width: 100%;
	min-width: @xkuan;
}
.xtou1{
	width: @kuan;
	margin: 0 auto;
	padding-top: 15px;
	padding-bottom: 15px;
}
	
</style>
