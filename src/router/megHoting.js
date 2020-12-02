import Layout from "@/views/layout/App.vue";
export default {
  path: "/hoting_Manage",
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
        require(["@/views/management/editNews.vue"], resolve)
    },
	
	{
	  path: "count",
	  name: "hoting",
	  meta: {
	    title: "新闻审核"
	  },
	  component: resolve =>
	    require(["@/views/news/newreview.vue"], resolve)
	},
	{
		path: "review",
		name: "hoting",
		meta: {
		  title: "新闻审核状态"
		},
		component: resolve =>
		  require(["@/views/news/newsReviewResult.vue"], resolve)
	},
	
  ]
};