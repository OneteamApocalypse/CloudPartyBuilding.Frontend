<template>
  <div>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>向导</span>
      </div>
      <div class="demo">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content ">
              <div style="padding: 10px;background: #673AB7">
                <i class="el-icon-user index-icon"></i>
                新闻管理
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content ">
              <div style="padding: 10px;background: #3c8dbc">
                <i class="el-icon-picture index-icon"></i>
                会议管理
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content ">
              <div style="padding: 10px;background: #009688">
                <i class="el-icon-goods index-icon"></i>
                工作管理
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content ">
              <div style="padding: 10px;background: #607D8B">
                <i class="el-icon-s-order index-icon"></i>
                举报管理
              </div>
            </div>
          </el-col>
		  <el-col :span="4">
		    <div class="grid-content ">
		      <div style="padding: 10px;background: #607D8B">
		        <i class="el-icon-s-order index-icon"></i>
		        考核管理
		      </div>
		    </div>
		  </el-col>
        </el-row>
      </div>
    </el-card>
    <br />
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>云上党建后台管理系统v1.0.0</span>
      </div>

      
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {     
        
    };
  },
  
  mounted: function() {}
};
</script>
<style lang="scss">
.demo {
  margin: 10px;
  .grid-content {
    border-radius: 4px;
    overflow: hidden;
    color: #fff;
    background: #d3dce6;
    .index-icon {
      font-size: 82px;
      color: #fff;
    }
  }
}
</style>
