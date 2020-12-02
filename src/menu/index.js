import megUser from "./megUser";
import megHoting from "./megHoting";
import megViewing from "./megViewing";
import megWorking from "./megWorking";
import megMeeting from './megMeeting';




/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
let home = {
  name: "首页",
  path: "/management",
  permissionsKey: "",
  // Fontawesome中文版webfont,是一款基于css框架的网页字体图标库,你可以用 <i> 标签把 Font Awesome 图标放在任意位置。
  icon: "fa fa-tachometer"
};

export default {
  home,//主页面
  megUser,
  megHoting,
  megViewing,
  megWorking,
  megMeeting
  
};