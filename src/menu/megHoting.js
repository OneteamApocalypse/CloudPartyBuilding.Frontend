export default {
  name: "新闻管理",
  permissionsKey: "",
  icon: "el-icon-refrigerator",
  children: {
    courseCardList: {
      name: "新闻编辑",
      permissionsKey: "",
      path: "/hoting_Manage/list"
    },
	
	departmentCount: {
	  name: "新闻审核",
	  permissionsKey: "",
	  path: "/hoting_Manage/count"
	},
	departmentCount2: {
	  name: "新闻审核状态",
	  permissionsKey: "",
	  path: "/hoting_Manage/review"
	},
  }
};
