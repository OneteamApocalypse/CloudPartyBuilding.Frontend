<template>
	<div>
		
		<label>地区：<el-input v-model="location"/></label>
	 
	      <label> 关键词：<el-input v-model="keyword"/></label>
		 
 <baidu-map class="bm-view" :center="{lng: 111.31775, lat: 30.7213}" :zoom="15":scroll-wheel-zoom="true">
         <bm-marker :position="{lng: 111.31775, lat: 30.7213}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" />
 
    <div class="more_panel">
          <span :class="{ down: isShowPanel }" @click.stop="showPanel">
            <span>{{ isShowPanel ? "隐藏" : "显示" }}</span>搜索列表<i class="el-icon-d-arrow-right"></i>
		
          </span>
	
        </div>
		
	<bm-local-search
	       :keyword="keyword"
	       :panel="isShowPanel"
	       :location="location"
	       @searchcomplete="searchcomplete"
	     ></bm-local-search>
			  
</baidu-map>
   </div> 
</template>

 <script>

import BmLocalSearch from "vue-baidu-map/components/search/LocalSearch"; //搜索
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
	components: {
	    BaiduMap,
	    BmLocalSearch, 
	  },

	data(){
		return{ //地图展示级别 
		location: "三峡大学",
		 
		      keyword: "三峡大学",
			    isShowPanel: true,
			    isShowInfo: false,

		};	
	},
	methods: {
	    clickBmap(val) {
	      //右击鼠标放标注
	 
	      this.markerPo = val.point;
	    },
	 
	    showPanel() {
	      //点击标注出现弹框
	 
	      this.isShowPanel = !this.isShowPanel;
	    },
	 
	    infoWindowClose() {
	      //弹框关闭
	 
	      this.isShowInfo = false;
	    },
	 
	    infoWindowOpen() {
	      //弹框打开
	 
	      this.isShowInfo = true;
	    },
	 
	    dragend(val) {
	      //标注拖拽完成获取坐标信息
	 
	      this.markerPo = val.point;
	 
	      let geocoder = new BMap.Geocoder(); //创建地址解析器的实例
	 
	      geocoder.getLocation(val.point, (rs) => {
	        this.address = rs.address;
	      });
	    },
	 
	    searchcomplete(arr) {
	      this.isShowPanel = true;
	    },
	  },
	}
</script>
<style >
	
	
	.more_panel {
	  text-align: center;
	 
	  font-size: 12px;
	 
	  color: #2878ff;
	 
	  padding-top: 10px;
	 
	  span {
	    cursor: pointer;
	 
	    i {
	      transform: rotate(90deg);
	    }
	  }
	 
	  span.down {
	    i {
	      transform: rotate(-90deg);
		}
	  }
	  }

.bm-view {
  width: 100%;
  height: 800px;
}
</style>