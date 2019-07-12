<template>
	<div>
		<!-- header -->
		<Head title="注册"></Head>
		<!-- naver -->
		<div class="toux"><img src="../assets/logo.jpg" /></div>
		<form action="" method="post" class="form">
			<input type="text" name="uname" id="uname" placeholder="请输入用户名" class="name" />
			<input type="password" name="upwd" id="upwd" placeholder="请输入密码" class="name" />
			<input type="password" name="cpwd" id="cpwd" placeholder="再次输入密码" class="password" onblur="check_pwd()" />
			<span class="pwd-show"></span>
			<div class="agree">
				<input type="checkbox" name="checkbox" value="同意" checked="" />
				&nbsp;同意
				<a href="" class="register1">《dashixiong用户协议》</a>
			</div>
			<button class="btn">注册</button>
			<p class="text">
				已有账号,点此
				<router-link tag="a" to="/Login" class="register2">登录</router-link>
			</p>
		</form>
	</div>
</template>

<script>
import Head from '../components/Head.vue';
export default {
	name: 'Register',
	components: {
		Head
	}
};
</script>

<style scoped lang="less">
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
	// color: #26a2ff;
	font-size: 14px;
	padding: 0 3%;
	margin-bottom: 20px;
}
.register1 {
	color: #26a2ff;
}
.register2 {
	color: #26a2ff;
	text-decoration: underline;
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
