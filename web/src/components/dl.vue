<template>
	<!-- <div class="dtou">
		<div class="dtou1">
			
		</div>
		<MyDi></MyDi>
  </div> -->
	<div class="aaaa">
		<div id="logo"> 
			<h1 class="hogo"><i> STARK INDUSTRIES</i></h1>
		</div> 
		<section class="stark-login">
			<form>	
				<div id="fade-box">
					<input type="text" placeholder="用户名" v-model="inp">
					<input type="password" placeholder="密码" v-model="pass">
					<button type="button" @click="dd()">登录</button>
					<button type="button"><router-link tag='a' to='/zc'>注册</router-link></button>
				</div>
			</form>
			<div class="hexagons">
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<br>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<br>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span> 
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<br>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<br>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
				<span>&#x2B22;</span>
			</div>      
		</section> 	  
		<div id="circle1">
			<div id="inner-cirlce1">
				<h2> </h2>
			</div>
		</div>
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<div class="dingwei">
			<el-button type="info" round><router-link tag='a' to='/MyHtml'>返回首页</router-link></el-button>
		</div>
		<MyDi></MyDi>
	</div>
</template>

<script>
export default {
  data () {
    return {
		inp:'',
		pass:''
    }
  },
  methods:{
	dd(){		
		if(this.inp === '' & this.pass === ''){
			this.$message({
			  message: '请输入用户名与密码',
			  type: 'warning'
			});
		}else{
			if(this.inp === ''){
				this.$message({
				  message: '请输入用户名',
				  type: 'warning'
				});
			}else{
				if(this.pass === ''){
					this.$message({
					  message: '请输入密码',
					  type: 'warning'
					});
				}else{
					var dzhang = this.inp
					var dmi = this.pass
					 var params = new URLSearchParams();
						params.append('usrename', this.inp);
						axios.post('/dl',params)
						.then(res=>{
							if(res.data.length === 0){
								this.$message.error('账户密码输入错误');
							}else{
								if(dzhang = res.data[0].name){
									if(dmi === res.data[0].passw){
										this.$message({
										  message: '登录成功',
										  type: 'success'
										});
										this.GLOBAL.dl= res.data[0].name;
										this.GLOBAA.kaiguan= true;
										this.$router.push({
										  path:'/MyHtml',
										})
										 
									}else{
										this.$message.error('密码输入错误');
									}
								}else{
									this.$message.error('账户密码输入错误');
								}
							}
						})
						.catch(err=>{ console.log(err) })
				}
			}
		}
		
			
	}	
  }
}
</script>

<style  scoped lang="less">
	.dingwei{
		position: fixed;
		top: 30px;
		left: 30px;
	}
	.aaaa{
		background: #000;
		background-size: cover;
		font-size: 10px;
		height: 100%;
		overflow: hidden;
		position: absolute;
		text-align: center;
		width: 100%;
		z-index: 1;
	}	
</style>