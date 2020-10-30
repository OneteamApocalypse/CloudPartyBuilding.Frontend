import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import movieDetail from '@/views/movieDetail'
import newList from '@/components/newList';
import hoting from '@/views/title/hoting';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
	mode:'hash',
  },
  {
	path:'/movieDetail',
	name: 'movieDetail',
	component: movieDetail,
		mode:'hash',
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "后台登录",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/login/Login.vue"], resolve)
    },
		mode:'hash',
  },
  {
	  path:'/hoting',
	  name:'hoting',
	  component:hoting,
  },
  {
	  path:'/newList/:id',
	  component:newList,
  },
  {
	  path:'*',
	  redirect:'/newList',
  }
]

const router = new VueRouter({
  routes
})

export default router
