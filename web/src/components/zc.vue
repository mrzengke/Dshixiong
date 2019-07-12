<template>
	<div class="aaaa">
		<div id="logo"> 
			<h1 class="hogo"><i> STARK INDUSTRIES</i></h1>
		</div> 
		<section class="stark-login">
			<form>	
				<div id="fade-box">
					<p>用户名：</p>
					<input type="text" placeholder="用户名" v-model="inp">
					<p>电话：</p>
					<input type="text" placeholder="电话" v-model="sho">
					<p>邮箱：</p>
					<input type="text" placeholder="邮箱" v-model="you">
					<p>密码：</p>
					<input type="password" placeholder="密码" v-model="pass">
					<button type="button" @click="oo()">注册</button>
					<button type="button"><router-link tag='a' to='/dl'>返回登录</router-link></button>
	
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
				<h2></h2>
			</div>
		</div>
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<MyDi></MyDi>
	</div>
	
</template>

<script>
export default {
  data () {
    return {
		inp:'',
		pass:'',
		sho:'',
		you:''
    }
  },
  methods:{
	oo(){
		if(this.inp === ''||this.sho === ''||this.you === ''||this.pass === ''){
			this.$message({
			  message: '请正确填写注册信息',
			  type: 'warning'
			});
		}else{
			if(this.inp.length<2){
				this.$message({
				  message: '用户名不能少于2个字符',
				  type: 'warning'
				});
			}else{
				if(this.pass.length<5){
					this.$message({
					  message: '密码不能少于5个字符',
					  type: 'warning'
					});
				}else{
					if(this.sho.length!=11){
						this.$message({
						  message: '请输入正确的手机号',
						  type: 'warning'
						});
					}else{
						var params = new URLSearchParams();
						params.append('usrename', this.inp);
						params.append('usrepasswrod', this.pass);
						axios.post('/dlzc',params)
						.then(res=>{
							this.$message({
							  message: res.data,
							  type: 'warning'
							});
							 this.$router.push({
							   path:'/dl',
							 })
						})
						.catch(err=>{ console.log(err) })
						
					}
				}
			}
		}
		
	}
  },
  
}
</script>

<style  scoped lang="less">
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
	.stark-login form{
		height: 400px;
		margin: 170px 350px;
		animation: form-entry 3s ease-in-out;
	}
	.stark-login input{
		width: 345px;
		margin-left: -30px;
	}
	.stark-login p{
		display: block;
		width: 70px;
		float: left;
		color: #00fffd;
		text-align: center;
		margin-top: 15px;
		margin-left: 30px;
	}
	.stark-login p:nth-child(1){
		margin-top: 10px;
	}
	@keyframes form-entry {
	  0% {
	    height: 0;
	    width: 0;
	    opacity: 0;
	    padding: 0;
	  }
	  20% {
	    height: 0;
	    border: 1px solid #00a4a2;
	    width: 0;
	    opacity: 0;
	    padding: 0;
	  }
	  40% {
	    width: 0;
	    height: 220px;
	    border: 6px solid #00a4a2;
	    opacity: 1;
	    padding: 0;
	  }
	  100% {
	    height: 400px;
	    width: 500px;
	  }
	}
	.hexagons {
		top: 472px;
		left: 710px;
	}
</style>