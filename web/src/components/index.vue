<template>
  <div style="background:#f0f3ef; width: 100%; min-width: 1400px;">
		<!-- 头部 -->
		<!-- 顶部滑动滚轮出现部分 -->
		<div class="tou8">
			<div class="tou8-1">
				<img src="../imges/log.png" alt="">
				<div class="inp">
					<input type="text" v-model="input" placeholder="请输入内容">
					<button class="el-icon-search"></button>
				</div>
			</div>
		</div>
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
							我的大师兄
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>待处理订单</el-dropdown-item>
								<el-dropdown-item>消息</el-dropdown-item>
								<el-dropdown-item>我的关注</el-dropdown-item>
								<el-dropdown-item><router-link tag="a" to="/gouwuc" style="color: #606266;">我的购物车</router-link></el-dropdown-item>
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
					<li>大师兄App</li>
				</ul>
			</div>
		</div>
		<!-- 头部部分 -->
		<div class="tou" v-if="$route.path!=='/gouwuc'">
			<div class="tou1">
				<div class="tou1-1"><img src="../imges/log.png" alt=""></div>
				<div class="inp">
					<input type="text" v-model="input" placeholder="请输入内容">
					<button class="el-icon-search"></button>
				</div>
				<ul class="tou1-2">
					<li><router-link tag="a" to="/MyHtml" class="yangshi">首页</router-link></li>
					<li><router-link tag="a" to="/shangc">商城</router-link></li>
					<li><router-link tag="a" to="">关于我们</router-link></li>
					<li><router-link tag="a" to="">更多精品</router-link></li>
					<el-dropdown>
						<el-button type="primary">
							入口<i class="el-icon-arrow-down el-icon--right"></i>
						</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>学生</el-dropdown-item>
							<el-dropdown-item>商家</el-dropdown-item>
							<el-dropdown-item>个人</el-dropdown-item>
							<el-dropdown-item>企业</el-dropdown-item>
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
 	data(){
 		return {
			//input搜索框
 			input: '',
 		}
 	}
 }
// 顶部滑动滚轮出现部分
window.onscroll=function(){
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		var top = document.getElementsByClassName("tou8")[0];
	if(scrollTop>=600){
	  top.style.cssText="	transition:height 1s;height:80px";
	}
		if(scrollTop<=600){
			top.style.cssText="transition:height 1s;height:0px";
		}
}
window.onload = function(){
	let oUl = document.querySelector('.tou1-2');
	let oLi = oUl.querySelectorAll('a');
	// 添加点击事件
	for(let i=0;i<oLi.length;i++){
		oLi[i].index = i;
		oLi[i].onclick = function(){
			// 清除样式
			for(let j=0;j<oLi.length;j++){
				oLi[j].className = '';
			}
			this.className = 'yangshi';
		};
	}
};
</script>

<style scoped lang="less">
	@kuan:1200px;
	@yanse:#409EFF;
	@xkuan:1400px;
a{
	color: #000;
}
// 头部定位部分
.ding{
	width: 100%;
	min-width: @xkuan;
	background: @yanse;
	height: 50px;
	color: #fff;
	font-size: 14px;
	// position: fixed;
	// top: 0;
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
// 头部部分
// log部分
.tou{
	width: 100%;
	min-width: @xkuan;
	background:#f0f3ef;
}
.tou1{
	width: @kuan;
	margin: 0 auto;
	height: 140px; 
	min-width: @xkuan;
	// box-shadow: 0 0 10px #f00;
}
.tou1 .tou1-1{
	width: 250px;
	height: 130px;
	margin-left:130px; 
	margin-top: 5px;
	float: left;
}
.tou1-1 img{
	width: 250px;
	height: 120px;
}
// 搜索框
.inp{
	width: 500px;
	float: left;
	margin-top: 20px;
	margin-left: 180px;
}
.inp input{
	width: 420px;
	float: left;
	padding-left: 20px;
	height: 40px;
	border: 1px solid @yanse;
	border-radius: 8px 0px 0px 8px;
}
.inp button{
	width: 50px;
	height: 42px;
	float: left;
	background: @yanse;
	border: 1px solid @yanse;
	border-radius:0px 8px 8px 0px;
	font-size: 25px;
	color: #fff;
	outline: none; 
}
// 导航条
.tou1-2{
	width: 900px;
	float: left;
	margin-top:20px; 
	margin-left: 60px;
	// box-shadow: 0 0 10px #f00;
	height: 44px;
	line-height: 40px;
}
.tou1-2 li{
	float: left;
	width: 150px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	margin-left: 30px;
}
.tou1-2 li a{
	width: 150px;
	height: 40px;
	display: block;
}
.yangshi{
	background: @yanse;
	border-radius:4px;
	color: #fff;
}
.tou1-2 li:nth-of-type(4){
	margin-right: 30px;
}
.tou1-2 li a:hover{
	background: @yanse;
	border-radius:4px;
	color: #fff;
}

.el-button{
	text-align: center;
}
// 顶部定位滚轮滚动
.tou8{
	width: 100%;
	box-shadow: 0 0 10px #f00;
	overflow: hidden;
	position:fixed;
	top: 0;
	background: rgb(240, 243, 239);
	overflow: hidden;
	height: 0px;
	z-index: 1111111;
}
.tou8-1{
	width: 645px;
	margin: 0 auto;
}
.tou8-1 img{
	float: left;
	width: 60px;
	height: 55px;
	margin-top: 10px;
	margin-bottom: 10px;
}
.tou8-1 .inp{
	margin-left: 50px;
}
.div1{
	width: 100%;
	min-width: @xkuan;
}
</style>
