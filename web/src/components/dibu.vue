<template>
	<div>
		<!-- 底部 -->
		<div class="tou7">
			<div class="tou7-1">
				<div class="tou7-2">
					<ul class="tou7-3">
						<li>
							<i class="el-icon-time"></i>
							<p>7*24</p>
							<p>多渠道服务支持</p>
						</li>
						<li>
							<i class="el-icon-document-delete"></i>
							<p>3天</p>
							<p>内无理由退订</p>
						</li>
						<li>
							<i class="el-icon-s-check"></i>
							<p>0元</p>
							<p>免费备案</p>
						</li>
						<li>
							<i class="el-icon-edit-outline"></i>
							<p>意见</p>
							<p>反馈与投诉建议</p>
						</li>
						<li>
							<i class="el-icon-medal-1"></i>
							<p>专业服务</p>
							<p>业务全流程支持</p>
						</li>
					</ul>
					<div class="tou7-4">
						<div class="tou7-5"><img src="../imges/log1.png" alt=""></div>
						<div class="tou7-6">
							<ul>
								<li>大师兄</li>
								<li>关于我们</li>
								<li>用户协议</li>
								<li>版权声明</li>
								<li>售后服务</li>
								<li>入驻签约</li>
							</ul>
							<div class="tou7-7">
								<p><i></i>川 | CP备88888888号</p>
								<p><i></i>川公网安备 31011124888888号</p>
								<p>大师兄-Copyright © 2019 版权所有</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	@kuan:1200px;
	@yanse:#409EFF;
// 底部
.tou7{
	width: 100%;
	min-width: 1400px;
	background: #000;
}
.tou7-1{
	width: @kuan;
	margin: 0 auto;
}
.tou7-3{
	overflow: hidden;
	border-bottom:1px solid #7d7d7d; 
	height: 145px;
}
.tou7-3 li{
	float: left;
	width: 200px;
	height: 100px;
	margin-left: 34px;
	margin-top: 22px;
}
.tou7-3 li i{
	width: 55px;
	height: 55px;
	font-size: 55px;
	color: rgba(255, 255, 255, 0.7);
	margin-top: 25px;
	float: left;
}
.tou7-3 li p{
	float: left;
	margin-left: 10px;
}
.tou7-3 li p:nth-of-type(1){
	font-size: 18px;
	color: #fff;
	margin-top: 30px;
	font-weight: bold;
	width: 110px;
}
.tou7-3 li p:nth-of-type(2){
	font-size: 15px;
	color: rgba(255, 255, 255, 0.7);
}
.tou7-4,.tou7-6 ul{
	overflow: hidden;
}
.tou7-4{
	height: 200px;
}
.tou7-5{
	width: 200px;
	height: 110px;
	margin-top: 55px;
	float: left;
}
.tou7-5 img{
	width: 200px;
	height: 100px;
}
.tou7-6{
	float: right;
	margin-top: 70px;
}
.tou7-6 ul li{
	width: 120px;
	float: left;
	color: #7d7d7d;
	text-align: center;
	border-right: 1px solid #7d7d7d;
	font-size:15px;
}
.tou7-6 ul li:nth-of-type(1),.tou7-6 ul li:nth-of-type(6){
	border: none;
}
.tou7-7 p{
	color: #7d7d7d;
	float: left;
	margin-left: 30px;
	margin-top: 30px;
	font-size: 14px;
}
.tou7-7 p i{
	display: block;
	width: 15px;
	height: 20px;
	float: left;
	margin-right: 5px;
	margin-top: 2px;
	background: url(../imges/govemblem.png) -15px 0px no-repeat;
}
.tou7-7 p:nth-of-type(2) i{
	background: url(../imges/govemblem.png) 0px 0px no-repeat;
}
</style>
