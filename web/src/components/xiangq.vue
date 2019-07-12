<template>
	<div class="zdiv1">
		<!-- 当前位置 -->
		<div class="ztou">
			<div class="ztou1">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>当前作品</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
		<div class="ztou2">
			<div class="ztou2-1">
				<h3>{{mingz}}</h3>
				<div class="ztou2-2">
					<div class="ztou2-3">
						<div>
							<!-- v-for="item in xiangq" -->
							<!-- <img v-bind:src="item.img" alt=""> -->
							<img :src="this.tup" alt="">
						</div>
						<div class="ztou3">
							<p>模板水印：模板水印仅用于防盗防刷，无其他含义。</p>
							<p>大师兄提供精美好看的网站模板下载，本次网站模板是有关网页设计，主题是UI设计高级西服定制web界面，格式是rap。</p>
							<p>UI设计高级西服定制web界面是由网页界面效果图设计师</p>
						</div>
					</div>
					<div class="ztou2-4">
						<button class="el-icon-download">立即下载</button>
						<button class="el-icon-star-off" title="加入购物车"></button>
						<div class="ztou2-5">
							<span v-for="tiem in xiangq1">
								<p>{{tiem.name}}</p>
							</span>
							<a href="javascript:void(null)" class="el-icon-warning-outline">侵权投诉</a>
						</div>
						<div class="ztou2-6">
							<p>版权所有：大师兄</p>
							<p>图片版权：作品中的人物、字体、产品图仅作为整体效果展示，如需商用请获得相关权利人授权后使用。</p>
							<p>授权方式：大师兄独家授权</p>
							<p>授权协议：商用许可授权协议</p>
							<button class="el-icon-s-check">获取企业商用授权</button>
						</div>
						<div class="ztou2-7">
							<span class="ztou2-8" v-for="tiem in xiangq2">
								<img v-bind:src="tiem.img" alt="">
							</span>
							<span v-for="tiem in xiangq3">
								<h3>{{tiem.name}}</h3>
							</span>
							<button class="el-icon-plus">关注</button>
						</div>
					</div>
					<div class="ztou2-9">
						<div style="overflow: hidden;">
							<p>他的作品</p>
							<a href="javascript:void(null)">更多 ></a>
						</div>
						<div v-for="tiem in xiangq4">
							<img :src="tiem.img" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	<MyDi></MyDi>
	</div>
</template>

<script>
export default	{
	data(){
		return{
			// img:'',
			mingz:name,
			tup:'',
			// xiangq:[
			// 	{img:require('../imges/xiangq/1.png')},
			// 	{img:require('../imges/xiangq/2.png')},
			// 	{img:require('../imges/xiangq/3.png')},
			// 	{img:require('../imges/xiangq/4.png')},
			// 	{img:require('../imges/xiangq/5.png')},
			// 	{img:require('../imges/xiangq/6.png')},
			// ],
			xiangq1:[
				{name:"作者：三三"},
				{name:"文件格式：.red .zip"},
				{name:"大小：10M"},
				{name:"免费"},
			],
			xiangq2:[
				{img:require('../imges/xiangq/touxiang.jpg')},
			],
			xiangq3:[
				{name:"三三"},
			],
			xiangq4:[
				{img:require("../imges/xiangq/7.jpg")},
				{img:require("../imges/xiangq/8.jpg")},
				{img:require("../imges/xiangq/9.jpg")},
			]
		}
	},
	created(){
	   this.getParams()
	},
	methods: {
	  getParams () {
		// 取到路由带过来的参数 
		var routerParams = this.$route.params.img
		var name = this.$route.params.name
		// 将数据放在当前组件的数据内
		console.log(name)
		this.mingz = name
		this.tup = routerParams
	  }
	},
	watch: {
	// 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
	  '$route': 'getParams'
	},
}	
</script>

<style scoped lang="less">
	@kuan:1200px;
	@yanse:#409EFF;
	@xkuan:1400px;
a{
	color: #000;
}
// 商品详情
.zdiv1{
	background:#f0f3ef;
	width: 100%;
	min-width: @xkuan;
}
// 我的位置
.ztou{
	width: 100%;
	min-width: @xkuan;
	border-top: 2px solid #67C23A;
}
.ztou1{
	width: @kuan;
	margin: 0 auto;
	padding-top: 15px;
	padding-bottom: 15px;
}
// 页面
.ztou2{
	width: 100%;
	min-width: @xkuan;
	margin-bottom: 20px;
}
.ztou2-1{
	width: @kuan;
	margin: 0 auto;
}
.ztou2-1 h3{
	margin-bottom: 20px;
}
.ztou2-2{
	width: 100%;
	margin: 0 auto;
	box-shadow: 0 0 10px #f00;
	border-radius: 8px;
	overflow: hidden;
}
.ztou2-3{
	width: 850px;
	margin-top: 20px;
	margin-left: 20px;
	overflow: hidden;
	float: left;
}
.ztou2-3 img{
	width: 850px;
	float: left;
}
.ztou2-4,.ztou2-9{
	width: 300px;
	float: left;
	margin-top: 20px;
	margin-left: 14px;
}
.ztou2-4 button{
	height: 50px;
	border: none;
	background: #67c23a;
	border-radius:8px; 
	font-size: 25px;
	color: #fff;
	margin-top: 20px;
	outline: none;
}
.ztou2-4 button:hover{
	background: rgb(133, 206, 97)
}
.ztou2-4 button:nth-of-type(1){
	width: 200px;
	margin-left: 22px;
}
.ztou2-4 button:nth-of-type(2){
	width: 50px;
	margin-left: 5px;
}
.ztou2-5,.ztou2-6,.ztou2-7{
	margin-top: 20px;
	margin-left: 22px;
}
.ztou2-5 p,.ztou2-5 a,.ztou2-6 p,.ztou3 p{
	color: #a2a2a2;
	font-size: 13px;
	margin-bottom: 5px;
}
.ztou2-5 a{
	text-align: right;
	display: block;
	margin-right: 5px;
}
.ztou2-6 p{
	margin-bottom: 10px;
}
.ztou2-6 button{
	font-size: 15px;
	height: 30px;
}
.ztou2-7{
	border-top: 2px solid #67C23A;
	border-bottom: 2px solid #67C23A;
	overflow: hidden;
}
.ztou2-8{
	width: 80px;
	height: 80px;
	border-radius:50%;
	display: block;
	margin-top: 20px;
	margin-bottom: 20px;
	border: 1px solid #000;
	float: left;
}
.ztou2-8 img{
	width: 80px;
	height: 80px;
	border-radius:50%;
}
.ztou2-7 h3{
	float: left;	
	margin-top: 46px;
	margin-left: 30px;
}
.ztou2-7 button:nth-of-type(1){
	width: 70px;
	height: 30px;
	font-size: 15px;
	margin-top: 46px;
	margin-left: 50px;
	background: red;
}
.ztou2-9{
	height: 200px;
	overflow: hidden;
	font-size: 14px;
	float: right;
}
.ztou2-9 p{
	float: left;
	margin-top:10px;
	margin-left:22px;
	color: #a2a2a2;
}
.ztou2-9 a{
	float: right;
	margin-top:10px;
	color: #a2a2a2;
	margin-right: 20px;
}
.ztou2-9 a:hover{
	color: #666;
}
.ztou2-9 img{
	float: left;
	width: 90px;
	margin-left: 7.5px;
	margin-top: 10px;
}
.ztou3{
	float: left;
	margin-top: 20px;
}
.ztou3 p{
	margin-bottom: 10px;
}
</style>
