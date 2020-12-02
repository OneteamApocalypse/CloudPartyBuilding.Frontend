<template>
	<div class="viewing">
	<h2 style="text-align: center;">举报中心</h2>
	 <el-table
	    :data="tableData3"
	    height="250"
	    border
	    style="width: 100%">
	    <el-table-column
	      prop="id"
	      label="举报编号"
	      width="180">
	    </el-table-column>
	    <el-table-column
	      prop="state"
	      label="处理状态"
	      width="180">
	    </el-table-column>
	    <el-table-column
	      prop="reslut"
	      label="处理结果">
	    </el-table-column>
	  </el-table>
	</div>
</template>

<script>
	 export default {
	    data() {
	      return {
	        tableData3: [{
	          id: '001',
	          state: '处理中',
	          reslut: ''
	        }, {
	          id: '002',
	          state: '处理中',
	          reslut: ''
	        }, {
	          id: '003',
	          state: '处理完毕',
	          reslut: '已开除党籍'
	        }]
	      }
	    }
	  }
</script>

<style>
</style>
