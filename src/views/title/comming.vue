<template>
	<div class="comming">
	<h3>党建教育</h3>
	<button @click="$router.push({name:'movieDetail',query:{id:mitem.id}})" >点击进入党建工作详情页</button>
	
	</div>
	
</template>

<script>
	import movieList from "@/components/movieList";
	import axios from "axios";
	// 导出组件
	export default {
	name:'comming',
	components: {
	movieList
	},
	data() {
		return {
		comingList: [],
		hopefulList: [],
		imglistMarginLeft: 0,
		sumMarginLeft: 0
		};
		},
	}
</script>

<style>
</style>
