import Layout from "@/views/layout/App.vue";
export default {
  path: "/user_Manage",
  component: Layout,
  name: "userManage",
  redirect: "/user_Manage/list",
  meta: {
    title: "考核管理"
  },
  children: [
    {
      path: "list",
      name: "user",
      meta: {
        title: "考核管理"
      },
      component: resolve =>
        require(["@/views/grades/gradesSelect.vue"], resolve)
    },
	
	{
	  path: "count",
	  name: "hoting",
	  meta: {
	    title: "考核列表"
	  },
	  component: resolve =>
	    require(["@/views/management/3.vue"], resolve)
	},
	
  ]
};