<template>
	<div>
		<!-- 头部 -->
		<Head title="添加银行卡"></Head>
		<!-- 中间内容部分 -->
		<div class="addcards">
			<span>卡号</span>
			<input type="text" />
		</div>
		<div class="addcards" style="margin: 0 3%; border-bottom: 0; border-radius: 5px 5px 0 0;">
			<span>姓名</span>
			<input type="text" />
		</div>
		<div class="addcards" style="margin: 0 3%; border-radius:0 0 5px 5px;">
			<span>身份证</span>
			<input type="text" />
		</div>
		<div class="addcards">
			<span>手机号</span>
			<input type="text" />
		</div>
		<div class="agree">
			<input type="checkbox" name="checkbox" value="同意" checked="" />
			&nbsp;同意
			<a href="" class="register">《dashixiong协议》</a>
		</div>
		<input type="button" value="添加" class="btn" />
		<!-- 底部 -->
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../components/Foot.vue';
import Head from '../components/Head.vue';
export default {
	name: 'Addcards',
	components: {
		Foot,
		Head
	}
};
</script>

<style scoped lang="less">
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
.addcards {
  border: 1px solid #ddd;
  background: #fff;
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem 3%;
  overflow: hidden;
}
.register {
  color: #26a2ff;
}
.agree {
  margin: 0 3%;
  font-size: 1.4rem;
  color: #000;
}
.btn {
  margin: 1rem 3%;
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
