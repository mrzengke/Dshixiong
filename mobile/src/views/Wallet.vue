<template>
	<div>
		<!-- 头部 -->
		<Head title="钱包"></Head>
		<!-- 中间内容部分 -->
		<div class="wallet">
			<h2>0.00</h2>
			<p>账号余额(元)</p>
		</div>
		<ul class="contact">
			<router-link tag="li" to="/Recharge"><a href="">充值</a></router-link>
			<router-link tag="li" to="/Cash"><a href="">提现</a></router-link>
		</ul>
		<ul class="contact">
			<router-link tag="li" to="/Backcard">
				<a href="">我的银行卡<i class="am-icon-angle-right"></i></a>
			</router-link>
		</ul>
		<!-- 底部 -->
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from '../components/Foot.vue';
import Head from '../components/Head.vue';
export default {
	name: 'Wallet',
	components: {
		Foot,
		Head
	}
};
</script>

<style scoped lang="less">
@import '../../public/css/amazeui.min.css';
@import '../../public/css/public.css';
.wallet {
  width: 375px;
  height: 130px;
  padding-top: 20px;
  text-align: center;
  border-bottom: 1px solid #e9e9e9;
  h2 {
    font-size: 40px;
    color: #26a2ff;
  }
}
.contact {
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 1rem 1rem;
  overflow: hidden;
  &:nth-of-type(1) {
    li {
      &:nth-of-type(1) {
        width: 177.5px;
        text-align: center;
        float: left;
        border-right: 1px solid #e9e9e9;
      }
      &:nth-of-type(2) {
        width: 177.5px;
        text-align: center;
        float: right;
      }
      a {
        font-size: 18px;
        color: #4b505a;
      }
    }
  }
  &:nth-of-type(2) {
    margin-top: 10px;
    li {
      a {
        color: #4b505a;
      }
    }
  }
}
.am-icon-angle-right {
  float: right;
}
</style>
