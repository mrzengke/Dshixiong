<template>
	<div>
		<!-- header -->
		<Head title="找回密码"></Head>
		<!-- naver -->
		<div class="toux"><img src="../assets/logo.jpg" /></div>
		<input type="text" name="mobile" id="mobile" placeholder="请输入手机号" class="password" />
		<div class="yzm">
			<input type="text" class="input-yzm" placeholder="输入验证码" />
			<input type="button" class="obtain-yzm" value="获取验证码" />
		</div>
		<input type="password" name="password" id="password" placeholder="请输入密码" class="password" />
		<input type="password" name="confirm_password" id="confirm_password" placeholder="确认密码" class="name" />
		<input type="button" value="立即提交" class="btn" />
	</div>
</template>

<script>
import Head from '../components/Head.vue';
export default {
	name: 'Pdfind',
	components: {
		Head
	}
};
</script>

<style scoped lang="less">
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
.yzm {
	overflow: hidden;
	margin: 0 3%;
	width: 94%;
	font-size: 1.4rem;
}
.input-yzm {
	float: left;
	width: 40%;
	border: 1px solid #ddd;
	border-radius: 5px;
	padding: 1rem;
}
.obtain-yzm {
	background: #26a2ff;
	color: #fff;
	padding: 1rem;
	border-radius: 5px;
	width: 55%;
	float: right;
}
.name {
	margin: 0 3%;
	width: 94%;
	font-size: 1.4rem;
	padding: 1rem;
	border-radius: 5px;
	border: 1px solid #ddd;
}
.password {
	margin: 1rem 3%;
	width: 94%;
	font-size: 1.4rem;
	padding: 1rem;
	border-radius: 5px;
	border: 1px solid #ddd;
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
