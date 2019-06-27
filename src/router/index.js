import Vue from 'vue'
import Router from 'vue-router'
import wraithToast from '@/components/wraithToast/wraithToast'

Vue.use(Router)

export default new Router({
  routes: [
		{
		  path: '/',
		  name: 'wraithToast',
		  component: wraithToast
		}
  ]
})
