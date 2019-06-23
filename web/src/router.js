import Vue from 'vue'
import Router from 'vue-router'
import shangc from './components/shangc'
import MyHtml from './components/MyHtml'

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
	  path:'*',
	  redirect:'/'
	}
   ],
})
