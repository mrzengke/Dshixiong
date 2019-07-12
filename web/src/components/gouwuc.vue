<template>
	<div class="zdiv1">
		<div class="xtou">
			<div class="xtou1">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/shangc' }">商城</el-breadcrumb-item>
					<el-breadcrumb-item>购物车</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
		<div class="xtou2">
			<div class="xtou2-1">
				<img src="../imges/log.png" alt="">
				<h2>购物车</h2>
			</div>
		</div>
		<div class="xtou3">
			<div class="xtou3-1" >
				<el-table :data="list" border style="width: 100%;border-radius: 8px;min-height: 520px;"  highlight-current-row :cell-style="{'text-align':'center'}">
					<el-table-column label="商品" width="120" :render-header="renderHeader">
					   <template slot-scope="scope">
							<el-checkbox v-model="scope.row.checked" type="selection"></el-checkbox>
							<el-popover placement="right" title="" trigger="hover">
								<img :src="scope.row.image">
								<img slot="reference" :src="scope.row.image" :alt="scope.row.image" style="max-height: 80px;max-width: 130px;width: 60px;">
							</el-popover>
					   </template>
					</el-table-column>
					<el-table-column prop="name" label="商品名称" width="300" align="center"></el-table-column>
					<el-table-column prop="price" label="商品单价" width="180" align="center"></el-table-column>
					<el-table-column label="商品数量" width="200" align="center">
						<template scope="scope">
							<el-input-number v-model="scope.row.num" controls-position="right" :min="1" :max="scope.row.number"></el-input-number>
						</template>
					</el-table-column>
					<el-table-column label="商品总价" align="center">
						<template scope="scope">
							<div>{{scope.row.price*scope.row.num}}</div>
						</template>
						</el-table-column>
						<el-table-column label="操作" align="center">
							<template scope="scope">
								<el-popover placement="top" width="160" v-model="scope.row.remove">
									<p>亲！确定删除此商品吗？</p>
									<div style="text-align: right; margin: 0">
										<el-button size="mini" type="text" @click="scope.row.remove=false">取消</el-button>
										<el-button type="primary" size="mini" @click="removeId(scope.row)">确定</el-button>
									</div>
									<el-button slot="reference">删除</el-button>
								</el-popover>
							</template>

						</el-table-column>
				</el-table>
				<div class="xbao">
					<el-button type="text" @click="open(countList)">结算</el-button>
					<div class="xtou3-2">总价钱:<span>￥{{countList}}</span></div>	
					<div class="xtou3-3">已选择:<span>{{jisuana}}</span>件商品</div>
				</div>
				
			</div>
		</div>

	<MyDi></MyDi>
	</div>
	
</template>

<script>
import apple from'../imges/shangc/1.jpg'
import apple1 from'../imges/shangc/2.jpg'
import apple2 from'../imges/shangc/3.jpg'
import apple3 from'../imges/shangc/4.jpg'
export default {
  name: 'index',
  props: {},
	data() {
		return {
			zz:[],
			list: [],
			jisuan:0,
			count: 0,
			istrue: false,
			ruleForm2: {
				name: '',
				price: '',
				age: ''
			},

		}
	},
	computed: {
		countList: function () {
			var a = 0;
			var b = 0;
			for (let i = 0; i < this.list.length; i++) {
				if (this.list[i].checked == true) {
					this.zz[i] = this.list[i]._id;
					a += this.list[i].price * this.list[i].num;
					b = b+1;
				}
			}
			this.count = a;
			return this.count
		},
		jisuana: function () {
			var b = 0;
			for (let i = 0; i < this.list.length; i++) {
				if (this.list[i].checked == true) {
					b = b+1;
				}
			}
			this.jisuan = b;
			return this.jisuan
		},
	},
	watch: {
		istrue: function () {
			if (this.istrue == true) {
				for (let k = 0; k < this.list.length; k++) {
					this.list[k].checked = true;
				}
			} else {
				for (let k = 0; k < this.list.length; k++) {
					this.list[k].checked = false;
				}
			}

		}
	},
	created:function(){
		var _that = this;
		this.axios.get('/gouwuc').then(function (response) {
			for(var i = 0 ;i<response.data.length;i++){
				if(response.data[i].image){
					response.data[i].image=require(`../imges/shangc/${response.data[i].image}`)
				}
			}
			_that.list = response.data;
			})
			.catch(function (error) {
			console.log(error);
			});
	},
	methods: {
		open(countList) {
			const h = this.$createElement;
			this.$msgbox({
				title: '结算',
				message: h('p', null, [
					h('span', null, '总金额 '),
					h('i', { style: 'color: teal' }, countList)
				]),
				showCancelButton: true,
				confirmButtonText: '确定付款',
				cancelButtonText: '取消',
				beforeClose: (action, instance, done) => {
					if (action === 'confirm') {
						instance.confirmButtonLoading = true;
						instance.confirmButtonText = '付款中...';
						setTimeout(() => {
							done();
							setTimeout(() => {
								instance.confirmButtonLoading = false;
							}, 300);
						}, 3000);
					} else {
						done();
					}
				}
			}).then(action => {
				this.$message({
					type: 'info',
					message: '已付款：￥' + countList
				});
				axios.post('/gouwuc',{
				  _id:this.zz 
				});
				 this.$router.push({
				  path:'/index',
				})
				
			});
		},
		removeId(value) {
			this.$message({
			  message: '删除购物车成功',
			  type: 'warning'
			});
			var ids = value._id
			for (var i = 0; i < this.list.length; i++) {
				if (ids == this.list[i]._id) {
					this.list.splice(i, 1);
				}
			}
			axios.post('/gouwuc',{
			  _id:value._id
			})
		},
		renderHeader: function (h, params) {//实现table表头添加
			var self = this;
			return h('div', [
				h('el-checkbox', {
					on: {
						change: (i) => {
							self.istrue = i;
						}
					}
				}, '商品')
			]);
	
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
// 购物车
.zdiv1{
	background:#f0f3ef;
	width: 100%;
	min-width: @xkuan;
}
// 当前位置
.xtou,.xtou2,.xtou3{
	width: 100%;
	min-width: @xkuan;
}
.xtou1,.xtou2-1,.xtou3-1{
	width: @kuan;
	margin: 0 auto;
	padding-top: 15px;
	padding-bottom: 15px;
	overflow: hidden;
}
.xtou2{
	background: #fff;
	overflow: hidden;
}
.xtou2 img{
	width: 80px;
	height: 50px;
	float: left;
}
.xtou2 h2{
	margin-top: 15px;
	color: #6b6b6b;
	font-size: 20px;
	margin-left: 15px;
	float: left;
}
.el-checkbox{
	float: left;
	margin-top: 30px;
	margin-right: -10px;
}
.cell{
	text-align: center;
}
.xbao{
	margin-top: 20px;
}
.xbao .xtou3-2,.xbao .xtou3-3{
	float: right;
	margin-right: 50px;
	font-size: 15px;
	color: #AEAEAE;
}
.xbao button{
	width: 80px;
	height: 30px;
	background: red;
	border: none;
	border-radius: 8px;
	color: #fff;
	outline: none;
	float: right;
	margin-top: -6px;
}
.xbao span{
	color: red;
	margin-left: 5px;
	margin-right: 5px;
}
.xbao button:hover{
	background: #d7000f;
}
.xtou4{
	width: 100%;
	min-width: @xkuan;
}
.xtou4-1{
	width: @kuan;
	margin: 0 auto;
}

</style>
