(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15bd9bf7"],{"5daa":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"line"}),n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex2,mode:"horizontal","background-color":"#1a472a","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("商品首页")]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("商品类型")]),n("el-menu-item",{attrs:{index:"2-1"}},[t._v("电子")]),n("el-menu-item",{attrs:{index:"2-2"}},[t._v("美食")]),n("el-menu-item",{attrs:{index:"2-3"}},[t._v("护肤")]),n("el-submenu",{attrs:{index:"2-4"}},[n("template",{slot:"title"},[t._v("居家日用")]),n("el-menu-item",{attrs:{index:"2-4-1"}},[t._v("毛巾")]),n("el-menu-item",{attrs:{index:"2-4-2"}},[t._v("牙刷")]),n("el-menu-item",{attrs:{index:"2-4-3"}},[t._v("牙膏")])],2)],2),n("el-menu-item",{attrs:{index:"3"}},[t._v("联系我们")]),n("el-menu-item",{attrs:{index:"4"}},[t._v("关于我们")]),n("el-menu-item",{attrs:{index:"5"}},[n("a",{attrs:{href:"#",target:"_blank"}},[t._v("商家登录")])]),n("el-menu-item",{attrs:{index:"6"},nativeOn:{click:function(e){return t.$router.push({name:"Cart"})}}},[t._v("购物车")]),n("el-menu-item",{attrs:{index:"7"},nativeOn:{click:function(e){return t.$router.push({name:"Order"})}}},[t._v("我的订单")]),n("el-menu-item",{attrs:{index:"7"},nativeOn:{click:function(e){return t.$router.push({name:"Order1"})}}},[t._v("我的订单")])],1),n("div",{staticClass:"box"},[n("el-carousel",{attrs:{height:"450px"}},t._l(t.carouselList,(function(e){return n("el-carousel-item",{key:e.id},[n("h1",{staticClass:"small"},[t._v(t._s(e.cardesc))]),n("el-image",{staticStyle:{width:"790px",height:"340px"},attrs:{src:t.serverImageUrl+"carousel/"+e.imgpath}})],1)})),1)],1),n("div",{staticClass:"goodsLists"},[n("el-row",{attrs:{gutter:20}},t._l(t.goodsList,(function(e){return n("el-col",{key:e.id,attrs:{span:8}},[n("div",{staticClass:"item"},[n("el-image",{staticStyle:{width:"350px",height:"350px"},attrs:{src:t.serverImageUrl+"goods/"+e.imgpath}}),n("h3",[t._v(t._s(e.name))]),n("p",[t._v(t._s(e.goodsdesc))])],1)])})),1)],1)],1)},i=[],s=n("6f5e"),r=n("b4fa"),o=n("b775");function u(t){return Object(o["a"])({url:"/carousel/list",method:"get",params:t})}var c={data:function(){return{serverImageUrl:s["a"]+"/upload/",activeIndex2:"1",carouselList:[],goodsList:[],pageNo:1,pageSize:9}},created:function(){this.initData()},methods:{initData:function(){var t=this;u().then((function(e){t.carouselList=e})).catch((function(){})),Object(r["b"])({pageNo:this.pageNo,pageSize:this.pageSize}).then((function(e){t.goodsList=e.list})).catch((function(){}))},handleSelect:function(t,e){console.log(t,e)}}},l=c,d=(n("aa33"),n("e90a")),m=Object(d["a"])(l,a,i,!1,null,null,null);e["default"]=m.exports},aa33:function(t,e,n){"use strict";var a=n("d46e"),i=n.n(a);i.a},b4fa:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return o}));var a=n("b775");function i(t){return Object(a["a"])({url:"/goods/getGoodsList",method:"post",data:t})}function s(t){return console.log("goods的参数"+t),Object(a["a"])({url:"/goods/saveGoods",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/goods/getGoodsById",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/goods/updateState",method:"post",data:t})}},d46e:function(t,e,n){}}]);
//# sourceMappingURL=chunk-15bd9bf7.e67eafbc.js.map