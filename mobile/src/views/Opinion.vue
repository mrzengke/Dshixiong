<template>
	<div>
		<!-- 头部 -->
		<Head title="意见反馈"></Head>
		<!-- 中间内容部分 -->
		<div class="toux"><img src="../assets/logo.jpg" /></div>
		<textarea class="opinion" placeholder="请输入反馈内容"></textarea>
		<input type="button" value="确定" class="btn" >
		<!-- 底部 -->
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../components/Foot.vue';
import Head from '../components/Head.vue';
export default {
	name: 'Opinon',
	components: {
		Foot,
		Head
	}
};
</script>

<style scoped lang="less">
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
.toux {
	width: 100%;
	// background-color: #26a2ff;
	text-align: center;
	padding-top: 10px;
	padding-bottom:40px;
	img {
		border-radius: 100%;
		width: 120px;
		height: 120px;
		margin: 0 auto;
		display: block;
	}
}
.opinion {
  width: 94%;
  height: 25%;
  margin: 3%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.btn {
  margin: 16px 3% 0 3%;
  color: #fff;
  text-align: center;
  display: block;
  width: 94%;
  font-size: 1.6rem;
  padding: 1rem;
  border-radius: 5px;
  background: #26a2ff;
  border: 0;
}

</style>
