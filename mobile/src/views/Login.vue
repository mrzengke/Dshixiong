<template>
	<div class="outer">
		<!-- header -->
		<Head title="登录"></Head>
		<!-- naver -->
		<div class="toux"><img src="../assets/logo.jpg" /></div>
		<input type="text" name="nickname" id="uname" placeholder="请输入用户名" class="name" />
			<input type="password" name="mobile" id="mobile" placeholder="请输入密码" class="password" />
			<button class="btn">登录</button>
			<p class="text">
				没有账号？点此
				<router-link tag="a" to="/Register" class="register">注册</router-link>
				<router-link tag="a" to="/Pdfind" class="register">忘记密码</router-link>
			</p>
		</div>
	</div>
</template>

<script>
import Head from '../components/Head.vue';
export default {
	name: 'Login',
	components: {
		Head
	},	
};
</script>

<style scoped lang="less">
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
// .outer{
// 	text-align: center;
// }
.mint-header-title {
	font-size: 16px;
}
.toux {
	width: 100%;
	// background-color: #26a2ff;
	text-align: center;
	padding-top: 10px;
	padding-bottom: 40px;
	img {
		border-radius: 100%;
		width: 120px;
		height: 120px;
		margin: 0 auto;
		display: block;
	}
}
#uname {
	margin-top: 3%;
}
.name {
	margin: 0 3%;
	width: 94%;
	font-size: 14px;
	padding: 1rem;
	border-radius: 5px;
	border: 1px solid #ddd;
}
.password {
	margin: 1rem 3%;
	width: 94%;
	font-size: 14px;
	padding: 1rem;
	border-radius: 5px;
	border: 1px solid #ddd;
}
.text {
	color: #656565;
	font-size: 14px;
	padding: 0 3%;
	margin-bottom: 20px;
	a {
		&:nth-of-type(2) {
			float: right;
			padding-right: 5px;
		}
	}
}
.register {
	color: #26a2ff;
}
.agree {
	padding: 0 3%;
	font-size: 14px;
	color: #000;
}
.btn {
	margin: 1rem 3%;
	color: #fff;
	text-align: center;
	display: block;
	width: 94%;
	font-size: 1.5rem;
	padding: 1rem;
	border-radius: 5px;
	background: #26a2ff;
	border: 0;
}
</style>
