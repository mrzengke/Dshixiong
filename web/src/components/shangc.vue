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
						<li>
							<img src="../imges/shangc/1.jpg" alt="">
							<div class="stou2-4">
								<p>网站个人简历模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/2.jpg" alt="">
							<div class="stou2-4">
								<p>网站主页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/3.jpg" alt="">
							<div class="stou2-4">
								<p>音乐播放器模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/4.jpg" alt="">
							<div class="stou2-4">
								<p>网站建设联系我们模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/5.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/6.jpg" alt="">
							<div class="stou2-4">
								<p>扁平网站首页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/7.jpg" alt="">
							<div class="stou2-4">
								<p>商务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/8.jpg" alt="">
							<div class="stou2-4">
								<p>扁平响应式彩色模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/9.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/10.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/11.jpg" alt="">
							<div class="stou2-4">
								<p>食品网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/12.jpg" alt="">
							<div class="stou2-4">
								<p>网站创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/13.jpg" alt="">
							<div class="stou2-4">
								<p>滑板商店创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/14.jpg" alt="">
							<div class="stou2-4">
								<p>运动用品商店模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/15.jpg" alt="">
							<div class="stou2-4">
								<p>三维设计平台网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/16.jpg" alt="">
							<div class="stou2-4">
								<p>拖车救援服务公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/17.jpg" alt="">
							<div class="stou2-4">
								<p>精品卫浴商铺网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/18.jpg" alt="">
							<div class="stou2-4">
								<p>川菜外卖服务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/19.jpg" alt="">
							<div class="stou2-4">
								<p>建筑环艺公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/20.jpg" alt="">
							<div class="stou2-4">
								<p>灯具装饰公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
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
						<li>
							<img src="../imges/shangc/21.jpg" alt="">
							<div class="stou2-4">
								<p>网站个人简历模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/22.jpg" alt="">
							<div class="stou2-4">
								<p>网站主页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/23.jpg" alt="">
							<div class="stou2-4">
								<p>音乐播放器模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/24.jpg" alt="">
							<div class="stou2-4">
								<p>网站建设联系我们模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/25.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/26.jpg" alt="">
							<div class="stou2-4">
								<p>扁平网站首页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/27.jpg" alt="">
							<div class="stou2-4">
								<p>商务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/28.jpg" alt="">
							<div class="stou2-4">
								<p>扁平响应式彩色模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/29.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/30.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/31.jpg" alt="">
							<div class="stou2-4">
								<p>食品网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/32.jpg" alt="">
							<div class="stou2-4">
								<p>网站创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/33.jpg" alt="">
							<div class="stou2-4">
								<p>滑板商店创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/34.jpg" alt="">
							<div class="stou2-4">
								<p>运动用品商店模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/35.jpg" alt="">
							<div class="stou2-4">
								<p>三维设计平台网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/36.jpg" alt="">
							<div class="stou2-4">
								<p>拖车救援服务公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/37.jpg" alt="">
							<div class="stou2-4">
								<p>精品卫浴商铺网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/38.jpg" alt="">
							<div class="stou2-4">
								<p>川菜外卖服务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/39.jpg" alt="">
							<div class="stou2-4">
								<p>建筑环艺公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/40.jpg" alt="">
							<div class="stou2-4">
								<p>灯具装饰公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
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
						<li>
							<img src="../imges/shangc/41.jpg" alt="">
							<div class="stou2-4">
								<p>网站个人简历模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/42.jpg" alt="">
							<div class="stou2-4">
								<p>网站主页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/43.jpg" alt="">
							<div class="stou2-4">
								<p>音乐播放器模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/44.jpg" alt="">
							<div class="stou2-4">
								<p>网站建设联系我们模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/45.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/46.jpg" alt="">
							<div class="stou2-4">
								<p>扁平网站首页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/47.jpg" alt="">
							<div class="stou2-4">
								<p>商务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/48.jpg" alt="">
							<div class="stou2-4">
								<p>扁平响应式彩色模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/49.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/50.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/51.jpg" alt="">
							<div class="stou2-4">
								<p>食品网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/52.jpg" alt="">
							<div class="stou2-4">
								<p>网站创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/53.jpg" alt="">
							<div class="stou2-4">
								<p>滑板商店创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/54.jpg" alt="">
							<div class="stou2-4">
								<p>运动用品商店模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/55.jpg" alt="">
							<div class="stou2-4">
								<p>三维设计平台网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/56.jpg" alt="">
							<div class="stou2-4">
								<p>拖车救援服务公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/57.jpg" alt="">
							<div class="stou2-4">
								<p>精品卫浴商铺网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/58.jpg" alt="">
							<div class="stou2-4">
								<p>川菜外卖服务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/59.jpg" alt="">
							<div class="stou2-4">
								<p>建筑环艺公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/60.jpg" alt="">
							<div class="stou2-4">
								<p>灯具装饰公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
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
						<li>
							<img src="../imges/shangc/61.jpg" alt="">
							<div class="stou2-4">
								<p>网站个人简历模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/62.jpg" alt="">
							<div class="stou2-4">
								<p>网站主页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/63.jpg" alt="">
							<div class="stou2-4">
								<p>音乐播放器模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/64.jpg" alt="">
							<div class="stou2-4">
								<p>网站建设联系我们模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/65.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/66.jpg" alt="">
							<div class="stou2-4">
								<p>扁平网站首页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/67.jpg" alt="">
							<div class="stou2-4">
								<p>商务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/68.jpg" alt="">
							<div class="stou2-4">
								<p>扁平响应式彩色模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/69.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/70.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/71.jpg" alt="">
							<div class="stou2-4">
								<p>食品网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/72.jpg" alt="">
							<div class="stou2-4">
								<p>网站创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/73.jpg" alt="">
							<div class="stou2-4">
								<p>滑板商店创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/74.jpg" alt="">
							<div class="stou2-4">
								<p>运动用品商店模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/75.jpg" alt="">
							<div class="stou2-4">
								<p>三维设计平台网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/76.jpg" alt="">
							<div class="stou2-4">
								<p>拖车救援服务公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/77.jpg" alt="">
							<div class="stou2-4">
								<p>精品卫浴商铺网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/78.jpg" alt="">
							<div class="stou2-4">
								<p>川菜外卖服务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/79.jpg" alt="">
							<div class="stou2-4">
								<p>建筑环艺公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/80.jpg" alt="">
							<div class="stou2-4">
								<p>灯具装饰公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
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
						<li>
							<img src="../imges/shangc/81.jpg" alt="">
							<div class="stou2-4">
								<p>网站个人简历模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/82.jpg" alt="">
							<div class="stou2-4">
								<p>网站主页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/83.jpg" alt="">
							<div class="stou2-4">
								<p>音乐播放器模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/84.jpg" alt="">
							<div class="stou2-4">
								<p>网站建设联系我们模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/85.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/86.jpg" alt="">
							<div class="stou2-4">
								<p>扁平网站首页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/87.jpg" alt="">
							<div class="stou2-4">
								<p>商务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/88.jpg" alt="">
							<div class="stou2-4">
								<p>扁平响应式彩色模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/89.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/90.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/91.jpg" alt="">
							<div class="stou2-4">
								<p>食品网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/92.jpg" alt="">
							<div class="stou2-4">
								<p>网站创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/93.jpg" alt="">
							<div class="stou2-4">
								<p>滑板商店创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/94.jpg" alt="">
							<div class="stou2-4">
								<p>运动用品商店模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/95.jpg" alt="">
							<div class="stou2-4">
								<p>三维设计平台网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/96.jpg" alt="">
							<div class="stou2-4">
								<p>拖车救援服务公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/97.jpg" alt="">
							<div class="stou2-4">
								<p>精品卫浴商铺网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/98.jpg" alt="">
							<div class="stou2-4">
								<p>川菜外卖服务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/99.jpg" alt="">
							<div class="stou2-4">
								<p>建筑环艺公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/100.jpg" alt="">
							<div class="stou2-4">
								<p>灯具装饰公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
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
						<li>
							<img src="../imges/shangc/101.jpg" alt="">
							<div class="stou2-4">
								<p>网站个人简历模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/102.jpg" alt="">
							<div class="stou2-4">
								<p>网站主页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/103.jpg" alt="">
							<div class="stou2-4">
								<p>音乐播放器模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/104.jpg" alt="">
							<div class="stou2-4">
								<p>网站建设联系我们模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/105.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/106.jpg" alt="">
							<div class="stou2-4">
								<p>扁平网站首页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/107.jpg" alt="">
							<div class="stou2-4">
								<p>商务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/108.jpg" alt="">
							<div class="stou2-4">
								<p>扁平响应式彩色模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/109.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/100.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/110.jpg" alt="">
							<div class="stou2-4">
								<p>食品网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/112.jpg" alt="">
							<div class="stou2-4">
								<p>网站创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/113.jpg" alt="">
							<div class="stou2-4">
								<p>滑板商店创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/114.jpg" alt="">
							<div class="stou2-4">
								<p>运动用品商店模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/115.jpg" alt="">
							<div class="stou2-4">
								<p>三维设计平台网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/116.jpg" alt="">
							<div class="stou2-4">
								<p>拖车救援服务公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/117.jpg" alt="">
							<div class="stou2-4">
								<p>精品卫浴商铺网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/118.jpg" alt="">
							<div class="stou2-4">
								<p>川菜外卖服务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/119.jpg" alt="">
							<div class="stou2-4">
								<p>建筑环艺公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/120.jpg" alt="">
							<div class="stou2-4">
								<p>灯具装饰公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
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
						<li>
							<img src="../imges/shangc/1.jpg" alt="">
							<div class="stou2-4">
								<p>网站个人简历模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/2.jpg" alt="">
							<div class="stou2-4">
								<p>网站主页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/3.jpg" alt="">
							<div class="stou2-4">
								<p>音乐播放器模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/4.jpg" alt="">
							<div class="stou2-4">
								<p>网站建设联系我们模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/5.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/6.jpg" alt="">
							<div class="stou2-4">
								<p>扁平网站首页模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/7.jpg" alt="">
							<div class="stou2-4">
								<p>商务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/8.jpg" alt="">
							<div class="stou2-4">
								<p>扁平响应式彩色模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/9.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/10.jpg" alt="">
							<div class="stou2-4">
								<p>响应式网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/11.jpg" alt="">
							<div class="stou2-4">
								<p>食品网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/12.jpg" alt="">
							<div class="stou2-4">
								<p>网站创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/13.jpg" alt="">
							<div class="stou2-4">
								<p>滑板商店创意模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/14.jpg" alt="">
							<div class="stou2-4">
								<p>运动用品商店模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/15.jpg" alt="">
							<div class="stou2-4">
								<p>三维设计平台网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/16.jpg" alt="">
							<div class="stou2-4">
								<p>拖车救援服务公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/17.jpg" alt="">
							<div class="stou2-4">
								<p>精品卫浴商铺网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/18.jpg" alt="">
							<div class="stou2-4">
								<p>川菜外卖服务网站模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/19.jpg" alt="">
							<div class="stou2-4">
								<p>建筑环艺公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
								</div>
							</div>
						</li>
						<li>
							<img src="../imges/shangc/20.jpg" alt="">
							<div class="stou2-4">
								<p>灯具装饰公司模板</p>
								<span>
									<i class="el-icon-star-off"></i>
									<i class="el-icon-shopping-cart-1"></i>
								</span>
							</div>
							<div class="stou2-5">
								<div class="sbao">
									<button><i class="el-icon-download"></i>立即下载</button>
									<button><i class="el-icon-shopping-cart-1"></i>加入购物车</button>
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
	data() {
	  return {
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
			console.log(tab, event);
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
				console.log(ol[i]);
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
