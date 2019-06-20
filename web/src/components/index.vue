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
							我的大师兄
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
					<li>大师兄App</li>
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
					<li>更多精品</li>
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
		<!-- 中间轮播大部分 -->
		<!-- 左边导航条部分 -->
		<div class="tou2">
			<div class="tou2-1">
				<div class="tou2-2">
					<el-container>
						<el-aside width="306px">
							<div class="qt">
								<img src="../imges/qtds.png" alt="">
							</div>
							<div id="anniu">
								<el-row>
									<el-button type="fff" round>品牌设计</el-button>
									<el-button type="primary" round>悟空严选</el-button>
									<el-button type="success" round>软件开发</el-button>
									<el-button type="info" round>网站建设</el-button>
									<el-button type="warning" round>解决方案</el-button>
									<el-button type="danger" round>新人专区</el-button>
								</el-row>
							</div>
						</el-aside>
						<el-main>
							<template>
								<el-carousel indicator-position="outside">
									<el-carousel-item v-for="item in imagesbox" :key="item.id">
										<img :src="item.idView" class="image">
									</el-carousel-item>
								</el-carousel>
							</template>
						</el-main>
					</el-container>
				</div>
			</div>
		</div>
		<!-- 作品商城部分 -->
		<div class="tou3">
			<div class="tou3-1">
				<h1><a href="#">— 网页模板 —</a></h1>
				<!-- 中间内容部分 -->
				<ul class="tou3-2">
					<li>
						<div class="tou3-3">
							<div class="tou3-4"><img src="../imges/muban.jpg" alt=""></div>
						</div>
					</li>
					<li class="zli">
						<a href="#">
							<img src="../imges/wangye1.png" alt="">
							<div class="zli1">
								<p>三维设计平台网站模板</p>
								<div class="zli2">
									<el-row>
										<el-button type="primary">使用</el-button>
										<el-button type="success">预览</el-button>
									</el-row>	
								</div>
							</div>
							<div class="zli3">
								<i class="el-icon-shopping-cart-1"></i>
								<i class="el-icon-download"></i>
								<i class="el-icon-share"></i>
								<i class="el-icon-star-off"></i>
							</div>
						</a>
					</li>
					<li class="zli">
						<a href="#">
							<img src="../imges/wangye2.png" alt="">
							<div class="zli1">
								<p>拖车救援服务公司模板</p>
								<div class="zli2">
									<el-row>
										<el-button type="primary">使用</el-button>
										<el-button type="success">预览</el-button>
									</el-row>	
								</div>
							</div>
							<div class="zli3">
								<i class="el-icon-shopping-cart-1"></i>
								<i class="el-icon-download"></i>
								<i class="el-icon-share"></i>
								<i class="el-icon-star-off"></i>
							</div>
						</a>
					</li>
					<li class="zli">
						<a href="#">
							<img src="../imges/wangye3.png" alt="">
							<div class="zli1">
								<p>灯具装饰公司网站模板</p>
								<div class="zli2">
									<el-row>
										<el-button type="primary">使用</el-button>
										<el-button type="success">预览</el-button>
									</el-row>	
								</div>
							</div>
							<div class="zli3">
								<i class="el-icon-shopping-cart-1"></i>
								<i class="el-icon-download"></i>
								<i class="el-icon-share"></i>
								<i class="el-icon-star-off"></i>
							</div>
						</a>
					</li>
					<li class="zli">
						<a href="#">
							<img src="../imges/wangye4.png" alt="">
							<div class="zli1">
								<p>美发在线服务网站模板</p>
								<div class="zli2">
									<el-row>
										<el-button type="primary">使用</el-button>
										<el-button type="success">预览</el-button>
									</el-row>	
								</div>
							</div>
							<div class="zli3">
								<i class="el-icon-shopping-cart-1"></i>
								<i class="el-icon-download"></i>
								<i class="el-icon-share"></i>
								<i class="el-icon-star-off"></i>
							</div>
						</a>
					</li>
					<li class="zli">
						<a href="#">
							<img src="../imges/wangye5.png" alt="">
							<div class="zli1">
								<p>精品卫浴商城网站模板</p>
								<div class="zli2">
									<el-row>
										<el-button type="primary">使用</el-button>
										<el-button type="success">预览</el-button>
									</el-row>	
								</div>
							</div>
							<div class="zli3">
								<i class="el-icon-shopping-cart-1"></i>
								<i class="el-icon-download"></i>
								<i class="el-icon-share"></i>
								<i class="el-icon-star-off"></i>
							</div>
						</a>
					</li>
				</ul>
				<!-- 页码部分 -->
				<div class="tou4">
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page.sync="currentPage3"
						:page-size="100"
						layout="prev, pager, next, jumper"
						:total="1000">
					</el-pagination>
					<div class="cakan">
						<p class="el-icon-s-unfold">点击查看更多</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 更多精品 -->
		<div class="tou5">
			<div class="tou5-1">
				<h1><a href="#">— 更多精品 —</a></h1>
				<div class="tou5-2">
					<el-tabs :tab-position="tabPosition">
						<el-tab-pane label="企业">
							<ul class="tou5-3">
								<li class="zli-1">
									<a href="#">
										<img src="../imges/wangye6.png" alt="">
										<div class="zli1-1">
											<h1>三维设计平台网站模板</h1>
											<div class="zli2-1">
												<el-row>
													<el-button type="primary">使用</el-button>
													<el-button type="success">预览</el-button>
												</el-row>	
											</div>	
										</div>
									</a>
								</li>
								<li class="zli-1">
									<a href="#">
										<img src="../imges/wangye7.png" alt="">
										<div class="zli1-1">
											<h1>三维设计平台网站模板</h1>
											<div class="zli2-1">
												<el-row>
													<el-button type="primary">使用</el-button>
													<el-button type="success">预览</el-button>
												</el-row>	
											</div>	
										</div>
									</a>
								</li>
								<li class="zli-1">
									<a href="#">
										<img src="../imges/wangye8.png" alt="">
										<div class="zli1-1">
											<h1>三维设计平台网站模板</h1>
											<div class="zli2-1">
												<el-row>
													<el-button type="primary">使用</el-button>
													<el-button type="success">预览</el-button>
												</el-row>	
											</div>	
										</div>
									</a>
								</li>
								
							</ul>
						</el-tab-pane>
						<el-tab-pane label="App">配置管理</el-tab-pane>
						<el-tab-pane label="商铺">角色管理</el-tab-pane>
						<el-tab-pane label="个人">定时任务补偿</el-tab-pane>
						<el-tab-pane label="H5网页">定时任务补偿</el-tab-pane>
						<el-tab-pane label="网页首页">定时任务补偿</el-tab-pane>
						<el-tab-pane label="节日设计">定时任务补偿</el-tab-pane>
					</el-tabs>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'index',
  props: {},
	// 页码
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
	data(){
		return {
			// 图片轮播
			imagesbox:[
				{id:0,idView:require("../imges/lun1.jpg")},
				{id:1,idView:require("../imges/lun2.jpg")},
				{id:2,idView:require("../imges/lun3.jpg")},
				{id:3,idView:require("../imges/lun4.jpg")},
			],
			// 页码
			currentPage3: 1,
			// 选项卡
			tabPosition: 'left',
		}
	}
}
</script>

<style scoped lang="less">
	@kuan:1200px;
	@yanse:#409EFF;
// 头部定位部分
a{
	color: #000;
}
.ding{
	width: 100%;
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
}
.tou1{
	width: @kuan;
	margin: 0 auto;
	height: 140px; 
	min-width: 1400px;
	// box-shadow: 0 0 10px #f00;
	margin-bottom: 10px;
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
// 导航条
.tou1-2{
	width: 800px;
	float: right;
	margin-top:90px; 
	margin-right: 100px;
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
}
.tou1-2 li:nth-of-type(4){
	margin-right: 30px;
}
.tou1-2 li:hover{
	background: @yanse;
	border-radius:4px;
	color: #fff;
}
.el-button{
	text-align: center;
}
// 中间轮播大部分
.tou2{
	width: 100%;
}
.tou2-1{
	width: @kuan;
	margin: 0 auto;
}
// 导航栏部分
.el-aside {
		border: 2px solid #fff;
		box-shadow: 0 0 10px #f00;
    text-align: center;
    line-height: 40px;
		border-radius: 8px;
}
.el-main {
		border: 2px solid #fff;
		box-shadow: 0 0 10px #f00;
    text-align: center;
    line-height: 20px;
		border-radius: 8px;
}
// 轮播部分
.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}
.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
}
.image{
	width: 860px;
	height: 300px;
}
// 左边按钮部分
.el-button.is-round {
    margin-left: 10px;
		margin-bottom: 13px;
}
.qt{
	width: 300px;
	margin-bottom: 17px;
}
.qt img{
	width: 250px;
	height: 150px;
	margin-top: 10px;
}
// 商城作品部分
.tou3{
	width: 100%;
}
.tou3-1{
	width: @kuan;
	margin: 0 auto;
}
.tou3-1 h1,.tou5-1 h1{
	height: 100px;
	text-align: center;
	line-height: 100px;
}
.cakan{
	text-align: right;
	margin-top: -28px;
	float: right;
	margin-right: 220px;
	color: darkgray;
}
.cakan:hover{
	color: #000;
}
.tou3-2 li{
	width: 340px;
	height: 400px;
	margin-left: 50px;
	margin-bottom: 30px;
	float: left;
	background: oldlace;
	border-radius: 8px; 
	box-shadow: 0 0 10px #f00;
}
.tou3-2 li:hover{
	box-shadow: 0 0 10px darkorange;
}
.tou3-2 li:nth-child(1){
	box-shadow: none;
	background: none;
}
.tou3-3{
	width:250px;
	height: 350px;
	border: 3px solid #000;
	margin-top: 45px;
	margin-left: 65px;
	position: relative;
}
.tou3-3 img{
	width:250px;
	height: 350px;
	position: absolute;
	top: -48px;
	left: -48px;
}
.zli img{
	width: 340px;
	height: 220px;
	border-radius: 8px; 
}
.zli p{
	text-align: center;
	margin-top: 10px;
}
.zli2{
	width: 190px;
	margin-left: 85px;
	margin-top: 20px;
}
.zli2 button{
	margin-right: 15px;
}
.zli3{
	height: 70px;
	margin-top: 15px;
	text-align: center;
	border-top: 2px solid #d3dce6;
}
.zli3 i{
	font-size: 30px;
	color: @yanse;
	line-height: 70px;
	margin-right: 30px;
	margin-left: 25px;
}
.zli3 i:hover{
	color: #d3dce6;
}
.tou4{
	width: @kuan+23px;
	margin: 0 auto;
	overflow: hidden;
	text-align: center;
}
// 更多精品
.tou5{
	width: 100%;
}
.tou5-1{
	width: @kuan;
	margin: 0 auto;
}
.tou5-2{
	box-shadow: 0 0 10px #f00;
	border-radius: 8px;
}
.tou5-3 li{
	width: 952px;
	margin-left:70px; 
	position: relative;
	margin-top: 30px;
	border-radius: 8px;
}
.tou5-3 li img{
	width: 952px;
	height: 426px;
	border-radius: 8px;
}
.zli1-1{
	width: 952px;
	height: 426px;
	position: absolute;
	top: 0px;
	left: 0px;
	color: #fff;
	background:rgba(0, 0, 0 ,0.6);
	display: none;
}
.tou5-3 li:hover .zli1-1{
	display: block;
}
.zli1-1 h1{
	height: 350px;
	text-align: center;
	line-height: 350px;
}
.zli2-1{
	width: 190px;
	margin: 0 auto;
}
.zli2-1 button:nth-child(2){
	margin-left: 40px;
}

</style>
