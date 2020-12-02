import Layout from "@/views/layout/App.vue";
export default [
	{ path: "/user_Manage",
  component: Layout,
  name: "userManage",
  redirect: "/user_Manage/list",
  meta: {
    title: "人员管理"
  },
  children: [
    {
      path: "list",
      name: "user",
      meta: {
        title: "人员列表"
      },
      component: resolve =>
        require(["@/views/management/3.vue"], resolve)
    },
	
	{
	  path: "count",
	  name: "hoting",
	  meta: {
	    title: "人员管理"
	  },
	  component: resolve =>
	    require(["@/views/management/4.vue"], resolve)
	},
	
  ]
  },
  {path: "/hoting_Manage",
  component: Layout,
  name: "hotingManage",
  redirect: "/hoting_Manage/list",
  meta: {
    title: "新闻管理"
  },
  children: [
    {
      path: "list",
      name: "hoting",
      meta: {
        title: "新闻编辑"
      },
      component: resolve =>
        require(["@/views/management/1.vue"], resolve)
    },
	
	{
	  path: "count",
	  name: "hoting",
	  meta: {
	    title: "新闻审核"
	  },
	  component: resolve =>
	    require(["@/views/management/2.vue"], resolve)
	},
	
  ]},
  {path: "/viewing_Manage",
  component: Layout,
  name: "viewingManage",
  redirect: "/viewing_Manage/list",
  meta: {
    title: "举报管理"
  },
  children: [
    {
      path: "list",
      name: "viewing",
      meta: {
        title: "举报列表"
      },
      component: resolve =>
        require(["@/views/management/2.vue"], resolve)
    },
	
	{
	  path: "count",
	  name: "viewing",
	  meta: {
	    title: "举报审核"
	  },
	  component: resolve =>
	    require(["@/views/management/3.vue"], resolve)
	},
	
  ]},
  {
	  path: "/working_Manage",
	  component: Layout,
	  name: "workingManage",
	  redirect: "/working_Manage/list",
	  meta: {
	    title: "新闻管理"
	  },
	  children: [
	    {
	      path: "list",
	      name: "working",
	      meta: {
	        title: "工作列表"
	      },
	      component: resolve =>
	        require(["@/views/management/1.vue"], resolve)
	    },
	  	
	  	{
	  	  path: "count",
	  	  name: "working",
	  	  meta: {
	  	    title: "发放任务"
	  	  },
	  	  component: resolve =>
	  	    require(["@/views/management/2.vue"], resolve)
	  	},
	  	
	  ]
  },

];