import Layout from "@/views/layout/App.vue";
export default {
  path: "/viewing_Manage",
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
        require(["@/views/report/listreport.vue"], resolve)
    },
	
	{
	  path: "count",
	  name: "viewing",
	  meta: {
	    title: "举报审核"
	  },
	  component: resolve =>
	    require(["@/views/report/upreport.vue"], resolve)
	},
	
  ]
};