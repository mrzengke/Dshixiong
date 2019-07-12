import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Shopping from './views/Shopping.vue'
import Order from './views/Order.vue'
import Personal from './views/Personal.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Pdfind from './views/Pdfind.vue'
import Wallet from './views/Wallet.vue'
import Opinion from './views/Opinion.vue'
import About from './views/About.vue'
import Recharge from './views/Recharge.vue'
import Cash from './views/Cash.vue'
import Backcard from './views/Backcard.vue'
// import Addcards from './views/Addcards.vue'
import Details from './views/Details.vue'
import Qiye from './components/more/Qiye.vue'
import Yidd from './components/more/Yidd.vue'
import Shpu from './components/more/Shpu.vue'
import Geren from './components/more/Geren.vue'
import Wye from './components/more/Wye.vue'
import Wzsy from './components/more/Wzsy.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
		},
		{
			path: '/pdfind',
			name: 'pdfind',
			component: Pdfind,
		},
		{
			path: '/order',
			name: 'order',
			component: Order
		},
		{
			path: '/personal',
			name: 'personal',
			component: Personal
		},
		{
			path: '/wallet',
			name: 'wallet',
			component: Wallet
		},
		{
			path: '/opinion',
			name: 'opinion',
			component: Opinion
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/recharge',
			name: 'recharge',
			component: Recharge
		},
		{
			path: '/cash',
			name: 'cash',
			component: Cash
		},
		{
			path: '/backcard',
			name: 'backcard',
			component: Backcard
		},
		/*{
			path: '/addcards',
			name: 'addcards',
			component: Addcards
		},*/
		{
			path: '/details',
			name: 'details',
			component: Details
		},
		{
			path: '/shopping',
			name: 'shopping',
			component: Shopping,
			children: [{
					path: '/',
					name: 'qiye',
					component: Qiye,
				},
				{
					path: '/yidd',
					name: 'yidd',
					component: Yidd,
				},
				{
					path: '/shpu',
					name: 'shpu',
					component: Shpu,
				},
				{
					path: '/geren',
					name: 'geren',
					component: Geren,
				},
				{
					path: '/wye',
					name: 'wye',
					component: Wye,
				},
				{
					path: '/wzsy',
					name: 'wzsy',
					component: Wzsy,
				},
			]
		},
	]
})
