<template>
  <div style="background:#f0f3ef;">
		<!-- 顶部定位部分 -->
		<div class="ding">
			<div class="ding1">
				<div class="ding2">
					<span>你好，请登录</span>
					<span>免费注册</span>
				</div>
				<ul class="ding3">
					<li>我的订单</li>
					<li>
						<el-dropdown size="mini" split-button type="primary">
							我的账号
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>待处理订单</el-dropdown-item>
								<el-dropdown-item>消息</el-dropdown-item>
								<el-dropdown-item>我的关注</el-dropdown-item>
								<el-dropdown-item>我的回答</el-dropdown-item>
								<el-dropdown-item>我的D豆</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li>D会员</li>
					<li>
						<el-dropdown size="mini" split-button type="primary">
							客户服务
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>在线客服</el-dropdown-item>
								<el-dropdown-item>电话客服</el-dropdown-item>
								<el-dropdown-item>意见建议</el-dropdown-item>
								<el-dropdown-item>客服邮箱</el-dropdown-item>
								<el-dropdown-item>帮助中心</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li>手机师兄</li>
				</ul>
			</div>
		</div>
		<!-- 头部部分 -->
		<div class="tou">
			<div class="tou1">
				<div class="tou1-1"><img src="../imges/log.png" alt=""></div>
				<ul class="tou1-2">
					<li>首页</li>
					<li>商城</li>
					<li>关于我们</li>
					<li>征师令</li>
						<el-dropdown>
							<el-button type="primary">
								入口<i class="el-icon-arrow-down el-icon--right"></i>
							</el-button>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>学生</el-dropdown-item>
								<el-dropdown-item>商家</el-dropdown-item>
								<el-dropdown-item>个人</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
  name: 'index',
  props: {},
}
</script>

<style scoped lang="less">
	@kuan:1400px;
	@yanse:#409EFF;
.ding{
	width: 100%;
	background: @yanse;
	height: 50px;
	color: #fff;
	font-size: 14px;
	position: fixed;
	top: 0;
}
.ding1{
	width: 1000px;
	margin: 0 auto;
	line-height: 50px;
}
.ding2{
	margin-left: 170px;
	float: left;
}
.ding2 span{
	margin-right:10px; 
}
.ding2 span:nth-of-type(2){
	color: red;
}
.ding3{
	width: 600px;
	float: left;
	margin-left: 20px;
}
.ding3 li{
	float: left;
	margin-left: 20px;
}
.tou{
	width: 100%;
}
.tou1{
	width: @kuan;
	margin: 0 auto;
	height: 180px; 
}
.tou1 .tou1-1{
	width: 250px;
	height: 150px;
	margin-left:150px; 
	margin-top: 50px;
	float: left;
}
.tou1-1 img{
	width: 250px;
	height: 120px;
}
.tou1-2{
	width: 800px;
	float: right;
	margin-top:130px; 
	margin-right: 100px;
}
.tou1-2 li{
	float: left;
	width: 150px;
	height: 40px;
	line-height: 40px;
	text-align: center;
}
.tou1-2 li:hover{
	background: @yanse;
	border-radius:4px;
	color: #fff;
}
.el-button{
	text-align: center;
	margin-left: 30px;
}
</style>
