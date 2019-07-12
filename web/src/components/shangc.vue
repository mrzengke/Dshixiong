<template>
	<div class="sdiv1">
		<!-- 当前位置 -->
		<div class="stou">
			<div class="stou1">
				<el-breadcrumb separator-class="el-icon-arrow-right">
				  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>商城</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
		<div class="stou2">
			<div class="stou2-1">
				<ul class="stou2-2">
					<li class="yangshi2" id="yangshi2" @click="a">全部</li>
					<li class="yangshi2" @click="a">企业</li>
					<li class="yangshi2" @click="a">App</li>
					<li class="yangshi2" @click="a">商铺</li>
					<li class="yangshi2" @click="a">个人</li>
					<li class="yangshi2" @click="a">H5网页</li>
					<li class="yangshi2" @click="a">网站首页</li>
				</ul>
				<div class="stou2-3" id="stou2-3">
					<ul>
						<li  v-for="(item,index) in sc">
							<img :src="item.img1" alt="">
							<div class="stou2-4">
								<p>{{item.name1}}</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button ><i class="el-icon-download"></i>立即下载</button>
									<button @click="pos(index)"><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
					</ul>
					<div class="stou2-6">
						<div class="block">
							<el-pagination
							  @size-change="handleSizeChange"
							  @current-change="handleCurrentChange"
							  :current-page.sync="currentPage1"
							  :page-size="100"
							  layout="prev, pager, next, jumper"
							  :total="1000">
							</el-pagination>
						</div>
					</div>
				</div>
				<div class="stou2-3">
					<ul>
						<li v-for="(item,index) in sc">
							<img :src="item.img2" alt="">
							<div class="stou2-4">
								<p>{{item.name2}}</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button @click="pos2(index)"><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
					</ul>
					<div class="stou2-6">
						<div class="block">
							<el-pagination
							  @size-change="handleSizeChange"
							  @current-change="handleCurrentChange"
							  :current-page.sync="currentPage1"
							  :page-size="100"
							  layout="prev, pager, next, jumper"
							  :total="1000">
							</el-pagination>
						</div>
					</div>
				</div>
				<div class="stou2-3">
					<ul>
						<li v-for="(item,index) in sc">
							<img :src="item.img3" alt="">
							<div class="stou2-4">
								<p>{{item.name3}}</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button @click="pos3(index)"><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
					</ul>
					<div class="stou2-6">
						<div class="block">
							<el-pagination
							  @size-change="handleSizeChange"
							  @current-change="handleCurrentChange"
							  :current-page.sync="currentPage1"
							  :page-size="100"
							  layout="prev, pager, next, jumper"
							  :total="1000">
							</el-pagination>
						</div>
					</div>
				</div>
				<div class="stou2-3">
					<ul>
						<li v-for="(item,index) in sc">
							<img :src="item.img4" alt="">
							<div class="stou2-4">
								<p>{{item.name4}}</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button @click="pos4(index)"><i class="el-icon-shopping-cart-1"></i></button>
								</div>
							</div>
						</li>
					</ul>
					<div class="stou2-6">
						<div class="block">
							<el-pagination
							  @size-change="handleSizeChange"
							  @current-change="handleCurrentChange"
							  :current-page.sync="currentPage1"
							  :page-size="100"
							  layout="prev, pager, next, jumper"
							  :total="1000">
							</el-pagination>
						</div>
					</div>
				</div>
				<div class="stou2-3">
					<ul>
						<li v-for="(item,index) in sc">
							<img :src="item.img5" alt="">
							<div class="stou2-4">
								<p>{{item.name5}}</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button @click="pos5(index)"><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
					</ul>
					<div class="stou2-6">
						<div class="block">
							<el-pagination
							  @size-change="handleSizeChange"
							  @current-change="handleCurrentChange"
							  :current-page.sync="currentPage1"
							  :page-size="100"
							  layout="prev, pager, next, jumper"
							  :total="1000">
							</el-pagination>
						</div>
					</div>
				</div>
				<div class="stou2-3">
					<ul>
						<li v-for="(item,index) in sc">
							<img :src="item.img6" alt="">
							<div class="stou2-4">
								<p>{{item.name6}}</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button @click="pos6(index)"><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
					</ul>
					<div class="stou2-6">
						<div class="block">
							<el-pagination
							  @size-change="handleSizeChange"
							  @current-change="handleCurrentChange"
							  :current-page.sync="currentPage1"
							  :page-size="100"
							  layout="prev, pager, next, jumper"
							  :total="1000">
							</el-pagination>
						</div>
					</div>
				</div>
				<div class="stou2-3">
					<ul>
						<li v-for="(item,index) in sc">
							<img :src="item.img7" alt="">
							<div class="stou2-4">
								<p>{{item.name7}}</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button @click="pos7(index)"><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
					</ul>
					<div class="stou2-6">
						<div class="block">
							<el-pagination
							  @size-change="handleSizeChange"
							  @current-change="handleCurrentChange"
							  :current-page.sync="currentPage1"
							  :page-size="100"
							  layout="prev, pager, next, jumper"
							  :total="1000">
							</el-pagination>
						</div>
					</div>
				</div>
		
			</div>
		</div>
		<!-- 推荐模板 -->
		<div class="stou3">
			<div class="stou3-1">
				<h3>— 推荐模板 —</h3>
				<div class="stou3-2">
					<el-carousel :interval="4000" type="card" height="300px">
						<el-carousel-item v-for="item in imagesbox1" :key="item.id">
						  <img :src="item.idView" class="image" width="600px;">
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
		</div>
		<MyDi></MyDi>
	</div>
</template>

<script>
export default {
  created:function(){
	var _that = this;
	this.axios.get('/shangc').then(function (response) {
		for(var i = 0 ;i<response.data.length;i++){
			if(response.data[i].img1){
				response.data[i].img1=require(`../imges/shangc/${response.data[i].img1}`)
			}
			if(response.data[i].img2){
				response.data[i].img2=require(`../imges/shangc/${response.data[i].img2}`)
			}
			if(response.data[i].img3){
				response.data[i].img3=require(`../imges/shangc/${response.data[i].img3}`)
			}
			if(response.data[i].img4){
				response.data[i].img4=require(`../imges/shangc/${response.data[i].img4}`)
			}
			if(response.data[i].img5){
				response.data[i].img5=require(`../imges/shangc/${response.data[i].img5}`)
			}
			if(response.data[i].img6){
				response.data[i].img6=require(`../imges/shangc/${response.data[i].img6}`)
			}
			if(response.data[i].img7){
				response.data[i].img7=require(`../imges/shangc/${response.data[i].img7}`)
			}
		}
		_that.sc = response.data;
		})
		.catch(function (error) {
		console.log(error);
		});
	},
	data() {
	  return {
		  sc:[],
		  ruleForm:{
			  pass:'1',
			  age:'2'
		  },
		activeName: 'second',
		currentPage1: 1,
		// 图片轮播
		imagesbox1:[
			{id:0,idView:require("../imges/smuban1.jpg")},
			{id:1,idView:require("../imges/smuban2.jpg")},
			{id:2,idView:require("../imges/smuban3.jpg")},
			{id:3,idView:require("../imges/smuban4.jpg")},
			{id:4,idView:require("../imges/smuban5.jpg")},
			{id:5,idView:require("../imges/smuban6.jpg")},
		],
	  };
	},
	methods: {
		handleClick(tab, event) {
			
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
		a(){
			let ol = document.querySelectorAll("li.yangshi2");
			let div1 = document.querySelectorAll('div.stou2-3');
		
			for(let i=0;i<ol.length;i++){
				ol[i].index = i;
				ol[i].onclick = function(){
					// 清除样式
					for(let j=0;j<ol.length;j++){
						ol[j].id = '';
						div1[j].id = '';
					}
					this.id = 'yangshi2';
					div1[this.index].id = 'stou2-3';
				};
			}
		},
		pos(index){
			this.$message({
				  message: '成功加入购物车',
				  type: 'success'
			});
			var yonghua = this.GLOBAL.dl
			var params = new URLSearchParams();
			params.append('image', this.sc[index].src1);
			params.append('name', this.sc[index].name1);
			params.append('price', 400);
			params.append('abc', 123);
			params.append('yonghu',this.GLOBAL.dl)
			params.append('num', 1);
			axios.post('/gouwuc',params).then(function (response) {
				alert(response.data)
			})
			.catch(function (error) {
			console.log(error);
			});
		},
		pos2(index){
			this.$message({
				  message: '成功加入购物车',
				  type: 'success'
			});
			var params = new URLSearchParams();
			params.append('image', this.sc[index].src2);
			params.append('name', this.sc[index].name2);
			params.append('price', 800);
			params.append('abc', 123);
			params.append('num', 1);
			axios.post('/gouwuc',params).then(function (response) {
				alert(response.data)
			})
			.catch(function (error) {
			console.log(error);
			});
		},
		pos3(index){
			this.$message({
				  message: '成功加入购物车',
				  type: 'success'
			});
			var params = new URLSearchParams();
			params.append('image', this.sc[index].src3);
			params.append('name', this.sc[index].name3);
			params.append('price', 200);
			params.append('abc', 123);
			params.append('num', 1);
			axios.post('/gouwuc',params).then(function (response) {
				alert(response.data)
			})
			.catch(function (error) {
			console.log(error);
			});
		},
		pos4(index){
			this.$message({
				  message: '成功加入购物车',
				  type: 'success'
			});
			var params = new URLSearchParams();
			params.append('image', this.sc[index].src4);
			params.append('name', this.sc[index].name4);
			params.append('price', 300);
			params.append('abc', 123);
			params.append('num', 1);
			axios.post('/gouwuc',params).then(function (response) {
				alert(response.data)
			})
			.catch(function (error) {
			console.log(error);
			});
		},
		pos5(index){
			this.$message({
				  message: '成功加入购物车',
				  type: 'success'
			});
			var params = new URLSearchParams();
			params.append('image', this.sc[index].src5);
			params.append('name', this.sc[index].name5);
			params.append('price', 500);
			params.append('abc', 123);
			params.append('num', 1);
			axios.post('/gouwuc',params).then(function (response) {
				alert(response.data)
			})
			.catch(function (error) {
			console.log(error);
			});
		},
		pos6(index){
			this.$message({
				  message: '成功加入购物车',
				  type: 'success'
			});
			var params = new URLSearchParams();
			params.append('image', this.sc[index].src6);
			params.append('name', this.sc[index].name6);
			params.append('price', 800);
			params.append('abc', 123);
			params.append('num', 1);
			axios.post('/gouwuc',params).then(function (response) {
				alert(response.data)
			})
			.catch(function (error) {
			console.log(error);
			});
		},
		pos7(index){
			this.$message({
				  message: '成功加入购物车',
				  type: 'success'
			});
			var params = new URLSearchParams();
			params.append('image', this.sc[index].src7);
			params.append('name', this.sc[index].name7);
			params.append('price', 1200);
			params.append('abc', 123);
			params.append('num', 1);
			axios.post('/gouwuc',params).then(function (response) {
				alert(response.data)
			})
			.catch(function (error) {
			console.log(error);
			});
		},
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
.sdiv1{
	background:#f0f3ef;
	width: 100%;
	min-width: @xkuan;
}
// 我的位置
.stou{
	width: 100%;
	min-width: @xkuan;
	border-top: 2px solid #67C23A;
}
.stou1{
	width: @kuan;
	margin: 0 auto;
	padding-top: 15px;
	padding-bottom: 15px;
}
.stou2{
	width: 100%;
	min-width: @xkuan;
}
.stou2-1{
	width: @kuan;
	margin: 0 auto;
}
.stou2-2{
	overflow: hidden;
	margin-left: 100px;
}
.stou2-2 li{
	float: left;
	width: 100px;
	height: 30px;
	margin-left: 20px;
	border-radius: 8px;
	text-align: center;
	line-height: 30px;
}
#yangshi2{
	background: @yanse;
	color: #fff;
}
.stou2-2 li:hover{
	background: @yanse;
	color: #fff;
}
.stou2-3{
	display: none;
}
#stou2-3{
	display: block;
}
.stou2-3 ul{
	margin-top: 15px;
	overflow: hidden;
	border-top: 2px solid #67C23A;
}
.stou2-3 ul li{
	float: left;
	width: 275px;
	height: 500px;
	margin-left: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
	box-shadow: 0 0 10px #f00;
	border-radius: 8px;
	position: relative;
}
.stou2-3 ul li img{
	width: 275px;
	height: 407px;
	border-radius: 8px 8px 0px 0px;
}
.stou2-3 ul li .stou2-4{
	width: 275px;
	height: 93px;
	background: #fff;
	border-radius: 0px 0px 8px 8px;
	margin-top: -4px;
}
.stou2-4 p{
	width: 225px;
	margin: 0 auto;
	padding-top: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid #eceff1;
	font-size: 13px;
}
.stou2-4 span{
	width: 225px;
	height: 45px;
	line-height: 45px;
	margin: 0 auto;
	display: block;
	font-size: 20px;
	overflow: hidden;
	color: rgb(168,168,168);
}
.stou2-4 span i:hover{
	color: red;
}
.stou2-4 span i:nth-of-type(2){
	float: right;
	margin-top: 11px;
}
.stou2-5{
	width: 275px;
	height: 0px;
	background: rgba(0, 0, 0, 0.5);
	position: absolute;
	top: 0;
	border-radius: 8px 8px 0px 0px;
	text-align: center;
	transition: height 0.5s;
	overflow: hidden;
}
.stou2-3 ul li:hover .stou2-5{
	height: 407px;
}
.stou2-5 button{
	width: 150px;
	height: 45px;
	margin-bottom: 20px;
	border-radius: 8px;
	border: none;
	background: #fff;
	font-size: 15px;
	outline: none;
}
.stou2-5 button:nth-of-type(2){
	background: red;
	color: #fff;
}
.stou2-5 button:nth-of-type(2) a{
	color: #fff;
}
.stou2-5 button:nth-of-type(1):hover{
	background: #eceff1;
}
.stou2-5 button:nth-of-type(2):hover{
	background: #d7000f;
}
.sbao{
	width: 275px;
	margin-top: 160px;
}
.sbao i{
	margin-right: 5px;
	font-size: 18px;
}
.stou2-6{
	width: 460px;
	margin: 0 auto;
}
.stou3{
	width: 100%;
	min-width: @xkuan;
	padding-top: 20px;
}
.stou3-1{
	width: @kuan;
	margin: 0 auto;
	margin-bottom: 20px;
}

</style>
