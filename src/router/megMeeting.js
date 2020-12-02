import Layout from "@/views/layout/App.vue";
export default {
  path: "/Meeting_Manage",
  component: Layout,
  name: "MeetingManage",
  redirect: "/Meeting_Manage/list",
  meta: {
    title: "新闻管理"
  },
  children: [
    {
      path: "list",
      name: "hoting",
      meta: {
        title: "会议列表"
      },
      component: resolve =>
        require(["@/views/meeting/meeting.vue"], resolve)
    },
	
	{
	  path: "count",
	  name: "hoting",
	  meta: {
	    title: "会议发布"
	  },
	  component: resolve =>
	    require(["@/views/meeting/inmeeting.vue"], resolve)
	},
	
  ]
};