export default {
  name: "工作管理",
  permissionsKey: "",
  icon: "el-icon-refrigerator",
  children: {
    courseCardList: {
      name: "工作列表",
      permissionsKey: "",
      path: "/working_Manage/list"
    },
	
	departmentCount: {
	  name: "任务发布",
	  permissionsKey: "",
	  path: "/working_Manage/count"
	},
  }
};