<template>
	<div class="audit">
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="title"
      label="标题"
      width="180"
	 >
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="context"
      label="内容"
	  >
    </el-table-column>
	<el-table-column
	  prop="state"
	  label="审核状态"
	  >
	  <template slot-scope="s">
		 <div v-if="s.row.state==0">未审核</div>
	    <div v-if="s.row.state==1">审核失败</div>
	    <div v-if="s.row.state==2">审核通过</div>
	  </template>
	</el-table-column>
	<el-table-column>
	<el-link>
		<i el-icon-d-arrow-right>
		详情
		</i>
	</el-link>
	</el-table-column>
	<el-table-column fixed="right" label="操作" width="240">
	  <div slot-scope="s">
	    
	
		<el-button  type="success" size="small" @click="updateState(s.row.id,2)">通过</el-button>
		<el-button  type="warning" size="small" @click="updateState(s.row.id,1)">不通过</el-button>
			  
	  </div>
	</el-table-column>
  </el-table>
  </div>
</template>

<script>
	
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          title: '王小虎',
		  state:0,
		  
          context: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          title: '王小虎',
		   state:0,
          context: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
		   state:0,
          title: '王小虎',
          context: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
		   state:0,
          title: '王小虎',
          context: '上海市普陀区金沙江路 1516 弄'
        }]
		
      }
	 
    },
methods:{

	updateStateApi(id,newstate){
		  console.log(id,newstate);
		  updateGoodsState({id: 2,state:1})
		  .then(r =>{
			  this.$message({
				  type:"success",
				  message:r.msg
			  });
			  this.refresh();
		  })
		  .catch(() => {});
	}
}

  }
</script>