import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/App.vue';
import Index from '@/views/Index';
import newList from '@/components/newList';
import newsInfo from '@/views/news/newsInfo';
import hoting from '@/views/title/hoting';
import megUser from "./megUser";
import megHoting from "./megHoting";
import megViewing from "./megViewing";
import megWorking from "./megWorking";
import megMeeting from "./megMeeting";



Vue.use(VueRouter)

  const routes = [
	  // 重定向跳转
	  {
		  path: '/',
		  // component:Layout,
		  
		  components: {
		  blank: resolve => require(['@/views/Index.vue'], resolve)
		  },

		  //mode:'hash',
		  // children: [
		  //   {
		  //     path: "Index",
		  // 	components: {
		  // 	  blank: resolve => require(["@/views/home/Index.vue"], resolve)
		  // 	}
		  //     //component: resolve => require(["@/views/home/Index.vue"], resolve)
		  //   }
		  // ]
		  //redirect:'/Index',
	  },
	  
{
    path: "/register",
    name: "register",
    components: {
      blank: resolve => require(["@/views/login/register.vue"], resolve)
    },
		mode:'hash',
  },
  {
      path: "/",
      name: "Login",
      components: {
        blank: resolve => require(["@/views/login/Login.vue"], resolve)
      },
  		mode:'hash',
    },
  
 
 {
  path:'/',
  component:Layout,
  name:"Management",
  mode:'hash',

  redirect:'/management',
  children: [
    {
      path: "management",
	/*  meta: {
	       	requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	       }, */
  	  component: resolve => require(["@/views/home/Index.vue"], resolve)
    
    }
  ]

 },

 	  megUser,megWorking,megViewing,megHoting,	megMeeting,

  
  {
	  path:'/newList/:id',
	  components: {
	   blank: resolve => require(["@/components/newList.vue"], resolve)
	 },
  },
  {
    path: "/newsInfo",
    name: "newsInfo",
	components: {
	  blank: resolve => require(["@/views/news/newsInfo.vue"], resolve)
	},
	},
	{
	  path: "/newsReviewInfo",
	  name: "newsReviewInfo",
		components: {
		  blank: resolve => require(["@/views/news/newsReviewInfo.vue"], resolve)
		},
	},
	{
		 path: "/reportInfo",
		 name: "reportInfo",
		 		components: {
		 		  blank: resolve => require(["@/views/report/reports.vue"], resolve)
		 		},
	},



]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes
});
// 导航守卫
// 参数1 : to 目标路由对象
// 参数2 : from 来源路由对象
// 参数3 : next() 下一步
router.beforeEach((to, from, next) => {
	if (to.meta.requireAuth) {     // 判断该路由是否需要登录权限
	 	let token = localStorage.getItem('token')
	    if (token) {              // 通过localStorage.getItem()获取当前的 token 是否存在
	        next()
	    }
	    else {
	        next({
	            path: '/login',
	            query: {
	            	redirect: to.fullPath    // 将跳转的路由path作为参数，登录成功后跳转到该路由
	            }  
	        })
	    }
	}
	else {
	    next()
	}
})


export default router