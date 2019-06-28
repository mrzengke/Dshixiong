<template>
	<div style="background:#f0f3ef; width: 100%; min-width: 1400px;" id="app">
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
				<h1><a href="javascript:void(null)">— 网页模板 —</a></h1>
				<!-- 中间内容部分 -->
				<ul class="tou3-2">
					<li>
						<div class="tou3-3">
							<div class="tou3-4"><img src="../imges/muban.jpg" alt=""></div>
						</div>
					</li>
					<li class="zli" v-for="item in abc">
						<router-link tag="a" to="/xiangq">
								<img v-bind:src="item.img"  alt="">
								<div class="zli1">
									<p>{{item.name}}</p>
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
						</router-link>
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
				<h1><a href="javascript:void(null)">— 更多精品 —</a></h1>
				<div class="tou5-2">
					<el-tabs :tab-position="tabPosition">
						<el-tab-pane label="企业">
							<ul class="tou5-3">
								<li class="zli-1" v-for="item in jinp">
									<img v-bind:src="item.img" alt="">
									<div class="zli1-1">
										<h1>{{item.name}}</h1>
										<div class="zli2-1">
											<el-row>
												<el-button type="primary">使用</el-button>
												<el-button type="success">预览</el-button>
											</el-row>	
										</div>	
									</div>
								</li>
								<div class="tou5-4">查看更多</div>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="App">
							<ul class="tou5-5">
								<li v-for="item in jinp1">
									<img v-bind:src="item.img1" alt="">
									<div class="zhez">
										<p>{{item.name1}}</p>
									</div>
									<div class="shang">
										<el-button type="warning" icon="el-icon-star-off" circle></el-button>
										<el-button type="danger" round>立即下载</el-button>
									</div>
								</li>
							</ul>
							<div class="tou5-4">查看更多</div>
						</el-tab-pane>
						<el-tab-pane label="商铺">
							<ul class="tou5-3">
								<li class="zli-1" v-for="item in jinp2">
									<img v-bind:src="item.img2" alt="">
									<div class="zli1-1">
										<h1>{{item.name2}}</h1>
										<div class="zli2-1">
											<el-row>
												<el-button type="primary">使用</el-button>
												<el-button type="success">预览</el-button>
											</el-row>	
										</div>	
									</div>
								</li>
								<div class="tou5-4">查看更多</div>
							</ul>
						</el-tab-pane>
						<el-tab-pane label="个人">
							<ul class="tou5-5">
								<li v-for="item in jinp3">
									<img v-bind:src="item.img3" alt="">
									<div class="zhez">
										<p>{{item.name3}}</p>
									</div>
									<div class="shang">
										<el-button type="warning" icon="el-icon-star-off" circle></el-button>
										<el-button type="danger" round>立即下载</el-button>
									</div>
								</li>
							</ul>
							<div class="tou5-4">查看更多</div>
						</el-tab-pane>
						<el-tab-pane label="H5网页">
							<ul class="tou5-5">
								<li v-for="item in jinp4">
									<img v-bind:src="item.img4" alt="">
									<div class="zhez">
										<p>{{item.name4}}</p>
									</div>
									<div class="shang">
										<el-button type="warning" icon="el-icon-star-off" circle></el-button>
										<el-button type="danger" round>立即下载</el-button>
									</div>
								</li>
							</ul>
							<div class="tou5-4">查看更多</div>
						</el-tab-pane>
						<el-tab-pane label="网站首页">
							<ul class="tou5-3">
								<li class="zli-1" v-for="item in jinp5">
									<img v-bind:src="item.img5" alt="">
									<div class="zli1-1">
										<h1>{{item.name5}}</h1>
										<div class="zli2-1">
											<el-row>
												<el-button type="primary">使用</el-button>
												<el-button type="success">预览</el-button>
											</el-row>	
										</div>	
									</div>
								</li>
								<div class="tou5-4">查看更多</div>
							</ul>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>
		</div>
		<!-- 为什么选择我们 -->
		<div class="tou6">
			<div class="tou6-1">
				<h1><a href="javascript:void(null)">— 为什么选择我们 —</a></h1>
				<ul class="tou6-2">
					<li>
						<div>
							<img src="../imges/tubiao1.png" alt="">
						</div>
						<p>成本低</p>
						<p>成本节约95%以上</p>
						<p>大众价格尊享订制级品质</p>
					</li>
					<li>
						<div>
							<img src="../imges/tubiao2.png" alt="">
						</div>
						<p>上线快</p>
						<p>零门槛5分钟快速制作</p>
						<p>快速上线，抢占市场先机</p>
					</li>
					<li>
						<div>
							<img src="../imges/tubiao3.png" alt="">
						</div>
						<p>功能完备</p>
						<p>上百个功能行业</p>
						<p>满足日常App开发需求</p>
					</li>
					<li>
						<div>
							<img src="../imges/tubiao4.png" alt="">
						</div>
						<p>安全稳定</p>
						<p>大数据平台运营</p>
						<p>阿里云战略合作全球护航</p>
					</li>
					<li>
						<div>
							<img src="../imges/tubiao5.png" alt="">
						</div>
						<p>服务保障</p>
						<p>贴心服务，跟踪指导</p>
						<p>1v1专属客户经理及时响应</p>
					</li>
				</ul>
			</div>
		</div>
		<MyDi></MyDi>
	</div>
</template>

<script type="text/javascript">
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
		},
    },
	data(){
		return {
			abc:[
				{img:require("../imges/wangye1.png"),name:"三维设计平台网站模板"},
				{img:require("../imges/wangye2.png"),name:"拖车救援公司服务网站模板"},
				{img:require("../imges/wangye3.png"),name:"灯具装饰公司网站模板"},
				{img:require("../imges/wangye4.png"),name:"美发在线服务网站模板"},
				{img:require("../imges/wangye5.png"),name:"卫浴商铺网站模板"}
			],
			// 更多精品
			jinp:[
				{img:require("../imges/wangye6.png"),name:"汽车维护保养公司网站模板"},
				{img:require("../imges/wangye7.png"),name:"软件服务公司网站模板"},
				{img:require("../imges/wangye8.png"),name:"房车旅行租赁公司网站模板"},
			],
			// app
			jinp1:[
				{img1:require("../imges/wangye9.jpg"),name1:"外卖App开发模板"},
				{img1:require("../imges/wangye10.jpg"),name1:"生活服务App开发模板"},
				{img1:require("../imges/wangye11.jpg"),name1:"外卖App开发模板"},
				{img1:require("../imges/wangye12.jpg"),name1:"外卖App开发模板"},
				{img1:require("../imges/wangye13.jpg"),name1:"婚庆App开发模板"},
				{img1:require("../imges/wangye14.jpg"),name1:"母婴App开发模板"},
			],
			// 商铺
			jinp2:[
				{img2:require("../imges/wangye15.png"),name2:"雨伞阳伞商铺网站模板"},
				{img2:require("../imges/wangye16.png"),name2:"休闲食品商城网站模板"},
				{img2:require("../imges/wangye17.png"),name2:"冰淇淋品牌网站模板"}
			],
			//个人
			jinp3:[
				{img3:require("../imges/wangye18.jpg"),name3:"网格布局网站模板"},
				{img3:require("../imges/wangye19.jpg"),name3:"生活记录博客网站模板"},
				{img3:require("../imges/wangye20.jpg"),name3:"全屏音乐个人网站模板"},
				{img3:require("../imges/wangye21.jpg"),name3:"黑色背景设计师个人网站模板"},
				{img3:require("../imges/wangye22.jpg"),name3:"创意相册图片个人网站模板"},
				{img3:require("../imges/wangye23.jpg"),name3:"个人博客首页网站模板"},
			],
			//H5
			jinp4:[
				{img4:require("../imges/wangye24.jpg"),name4:"企业旅游网站模板"},
				{img4:require("../imges/wangye25.jpg"),name4:"生活记录博客网站模板"},
				{img4:require("../imges/wangye26.jpg"),name4:"唯美婚礼钻石珠宝首饰网站模板"},
				{img4:require("../imges/wangye27.jpg"),name4:"国外企业科技商务电子网站模板"},
				{img4:require("../imges/wangye28.jpg"),name4:"虚拟币与字母H2.5D网站模板"},
				{img4:require("../imges/wangye29.jpg"),name4:"国企全套门户网站模板"},
			],
			//网站首页
			jinp5:[
				{img5:require("../imges/wangye30.jpg"),name5:"数码维修网站首页模板"},
				{img5:require("../imges/wangye31.jpg"),name5:"公司首页网站模板"},
				{img5:require("../imges/wangye32.jpg"),name5:"简约旅游网站首页模板"},
			],
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
	@xkuan:1400px;
a{
	color: #000;
}

// 中间轮播大部分
.tou2{
	width: 100%;
	min-width: @xkuan;
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
	min-width: @xkuan;
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
	min-width: @xkuan;
}
.tou5-1{
	width: @kuan;
	margin: 0 auto;
}
.tou5-2{
	box-shadow: 0 0 10px #f00;
	border-radius: 8px;
}
.tou5-2 .el-tabs__item{
	height: 100px;
	line-height: 100px;
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
	height: 0px;
	position: absolute;
	top: 0px;
	left: 0px;
	color: #fff;
	background:rgba(0, 0, 0 ,0.6);
	border-radius: 8px;
	transition: height 0.5s;
	overflow: hidden;
}
.tou5-3 li:hover .zli1-1{
	height: 426px;
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
.tou5-4{
	width: 952px;
	margin: 0 auto;
	line-height: 50px;
	margin-top:10px; 
	height: 50px;
	background: #fff;
	text-align: center;
	color: darkgray;
	border-radius: 8px; 
	font-size: 18px;
	overflow: hidden;
	margin-bottom: 15px;
}
.tou5-4:hover{
	background:darkgray;
	color: #fff;
}
.tou5-5{
	width: 952px;
	margin: 0 auto;
}
.tou5-5 li{
	width: 250px;
	height: 380px;
	float: left;
	margin-bottom: 20px;
	margin-top: 20px;
	margin-left: 50px;
	position: relative;
}
.tou5-5 li img{
	width: 250px;
	height: 380px;	
	border-radius: 8px;
}
.zhez,.shang{
	width: 250px;
	height: 0px;
	background: rgba(0, 0, 0 ,0.6);
	position: absolute;
	bottom:0;
	left: 0;
	border-radius: 8px;
	transition:height 1s;
	overflow: hidden;
}
.tou5-5 li:hover .zhez,.tou5-5 li:hover .shang{
	height: 50px;
}
.shang{
	position: absolute;
	top: 0;
	left: 0;
}
.zhez p{
	text-align: center;
	color: #fff;
	line-height: 50px;
}
.shang button{
	margin-left: 50px;
	margin-top: 5px;
}
// 为什么选择我们
.tou6{
	width: 100%;
	min-width: @xkuan;
	padding-bottom:20px; 
}
.tou6-1{
	width: @kuan;
	margin: 0 auto;
}
.tou6-1 h1{
	text-align: center;
	height: 100px;
	line-height: 100px;
}
.tou6-2{
	box-shadow: 0 0 10px #f00;
	border-radius: 8px;
	overflow: hidden;
}
.tou6-2 li{
	width: 200px;
	height: 200px;
	float: left;
	margin-left: 33px;
}
.tou6-2 li div{
	width: 200px;
	margin-top:10px;
}
.tou6-2 li div img{
	width: 90px;
	height: 90px;
	margin: 0 auto;
	display: block;
}
.tou6-2 li p{
	text-align: center;
}
.tou6-2 li p:nth-of-type(1){
	font-size: 20px;
	margin-bottom: 20px;
}
.tou6-2 li p:nth-of-type(2),.tou6-2 li p:nth-of-type(3){
	color: #999999;
	font-size: 15px;
}
</style>
