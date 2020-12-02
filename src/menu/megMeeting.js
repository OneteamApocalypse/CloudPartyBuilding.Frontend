export default {
  name: "会议管理",
  permissionsKey: "",
  icon: "el-icon-refrigerator",
  children: {
    courseCardList: {
      name: "会议列表",
      permissionsKey: "",
      path: "/Meeting_Manage/list"
    },
	
	departmentCount: {
	  name: "会议发布",
	  permissionsKey: "",
	  path: "/Meeting_Manage/count"
	},
  }
};