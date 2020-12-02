import Layout from "@/views/layout/App.vue";
export default {
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
        require(["@/views/work/work.vue"], resolve)
    },
	
	{
	  path: "count",
	  name: "working",
	  meta: {
	    title: "发放任务"
	  },
	  component: resolve =>
	    require(["@/views/management/works.vue"], resolve)
	},
	
  ]
};