import Vue from 'vue'
import Router from 'vue-router'
import shangc from './components/shangc'
import xiangq from './components/xiangq'
import gouwuc from './components/gouwuc'
import MyHtml from './components/MyHtml'
import dl from './components/dl'
import zc from './components/zc'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	{
	  path: '/',
	  name: 'MyHtml',
	  component: MyHtml
	},
	{
	  path: '/shangc',
	  name: 'shangc',
	  component: shangc
	},
	{
	  path: '/xiangq/:id',
	  name: 'xiangq',
	  component: xiangq
	},
	{
	  path: '/gouwuc',
	  name: 'gouwuc',
	  component: gouwuc,
	},
	{
	  path: '/dl',
	  name: 'dl',
	  component: dl,
	},
	{
	  path: '/zc',
	  name: 'zc',
	  component: zc
	},
	{
	  path:'*',
	  redirect:'/'
	}
   ],
})
