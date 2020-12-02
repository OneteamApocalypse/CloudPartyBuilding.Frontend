export default {
  name: "举报管理",
  permissionsKey: "",
  icon: "el-icon-refrigerator",
  children: {
    courseCardList: {
      name: "举报列表",
      permissionsKey: "",
      path: "/viewing_Manage/list"
    },
	
	departmentCount: {
	  name: "举报审核",
	  permissionsKey: "",
	  path: "/viewing_Manage/count"
	},
  }
};
