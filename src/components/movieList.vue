<template>
<div>
	<div @click="$router.push({name:'movieDetail'})" class="movie-list">

		<div class="movie-img">
		<img :src="mitem.img.replace('w.h','128.180')" alt>
	</div>
	<div class="right-info">
		<ul class="movie-info">
			<li class="name">{{mitem.nm}}</li>
			<li v-if="mitem.globalReleased && mitem.sc!==0" class="score">
				观众评
			<span>{{mitem.sc}}</span>
			</li>
			<li style="font-size: 14px;color: #888" v-if="mitem.globalReleased && mitem.sc==0">暂无评分</li>
			<li v-if="!mitem.globalReleased" class="score">
			<span>{{mitem.wish}}</span> 想看
			</li>
			<li class="actor">{{mitem.star}}</li>
			<li class="showinfo">{{mitem.showInfo}}</li>
		</ul>
	<div class="btn">
		<button v-if="mitem.globalReleased" class="buy-btn">购票</button>
		<button v-if="!mitem.globalReleased" class="pre-btn">预售</button>
	</div>
</div>
</div>
	</div>
		</template>
		<script>
			export default {
			name: "movieList",
			props: ["mitem"], //通过mitem属性接收父组件的传值
			data() {
				return {};
					}
				};
</script>
<style scoped>
		.movie-list{
		width: 100%;
		padding: 5px 12px;
		}
		.movie-img>img{
		height: 90px;
		width: 64px;
		float: left;
		margin-right: 8px;
		}
		.right-info{
		
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ededed;
		padding: 0px 10px 5px 3px;
		}
		.right-info>ul{
		width: calc(100% - 56px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: left;
		padding: 5px 0px;
		font-size: 13px;
		color: #666;
		}
		.right-info>ul>li{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-bottom: 3px;
		}
		.movie-info .name{
		font-size: 16px;
		font-weight: bold;
		color: #000;
		}
		.movie-info .score>span{
		font-weight: bold;
		font-size: 14px;
		color: #faaf00;
		}
		.btn>button{
		width: 48px;
		padding: 5px 12px;
		border: none;
		border-radius: 5px;
		font-size: 12px;
		}
		.btn>.buy-btn{
		background-color: #f03d37;
		color: #fff;
		}
		.btn>.pre-btn{
		background-color: #3c9fe6;
		color: #fff;
		}
</style>