<template>

	<div class="index">


		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
		 background-color="#292525" text-color="#ffffff" active-text-color="red">


			<ul class="topNav">
				<li><img src="../assets/images/carousel/0.png" style="height:50px;"></li>

				<li>
					<el-submenu index="0"><template slot="title"><span style="font-size: 20px;">资讯宣传 </span></template>
						<el-menu-item index="0-1" :class="[showHot==1?'active':'']" @click="showHot=1">实时新闻</el-menu-item>
						<el-menu-item index="0-2" :class="[showHot==5?'active':'']" @click="showHot=5">支部新闻</el-menu-item>
					</el-submenu>
				</li>

				<li>
					<el-submenu index="1"><template slot="title"><span style="font-size: 20px;">党建教育 </span></template>
						<el-menu-item index="1-1" :class="[showHot==0?'active':'']" @click="showHot=0">党建教育</el-menu-item>
					</el-submenu>
				</li>

				<li>
					<el-submenu index="2"><template slot="title"><span style="font-size: 20px;">党建工作 </span></template>
						<el-menu-item index="2-1" :class="[showHot==2?'active':'']" @click="showHot=2">会议信息</el-menu-item>
						<el-menu-item index="2-2" :class="[showHot==9?'active':'']" @click="showHot=9">工作信息</el-menu-item>
						<el-menu-item index="2-3" :class="[showHot==6?'active':'']" @click="showHot=6">实时地图</el-menu-item>
					</el-submenu>
				</li>

				<li>
					<el-submenu index="3"><template slot="title"><span style="font-size: 20px;">考核考评 </span></template>
						<el-menu-item index="3-1" :class="[showHot==3?'active':'']" @click="showHot=3">成员成绩</el-menu-item>
					</el-submenu>
				</li>

				<li>
					<el-submenu index="4"><template slot="title"><span style="font-size: 20px;">纪检监督 </span></template>
						<el-menu-item index="4-1" :class="[showHot==4?'active':'']" @click="showHot=4">举报中心</el-menu-item>
						<el-menu-item index="4-2" :class="[showHot==7?'active':'']" @click="showHot=7">网上举报</el-menu-item>
					</el-submenu>
				</li>


				<li>
					<el-button icon="el-icon-menu" circle @click="$router.push({name:'Management'})"></el-button>
				</li>
				<li>
					<el-button icon="el-icon-user" circle @click="$router.push({name:'Login'})"></el-button>
				</li>

			</ul>
		</el-menu>


		<!-- <ul class="topNav">
		<li class="titi" >云上党建</li>
		<li :class="[showHot==1?'active':'']" @click="showHot=1">资讯宣传</li>
		<li :class="[showHot==0?'active':'']" @click="showHot=0">党建教育</li>
		<li :class="[showHot==2?'active':'']" @click="showHot=2">党建工作</li>
		<li :class="[showHot==3?'active':'']" @click="showHot=3">考核考评</li>
		<li :class="[showHot==4?'active':'']" @click="showHot=4">纪检监督</li>
		<li ><el-button  style="background-color: #3C9FE6;" icon="el-icon-user" circle @click="$router.push({name:'Login'})"></el-button></li>
	</ul> -->
		<div class="box">
			<el-carousel height="400px">
				<el-carousel-item v-for="(item,index) in carouselList">
					<el-image style="height: 100%;" v-bind:src="item.url" />
				</el-carousel-item>
			</el-carousel>

		</div>

		<div class="main">
			<working1 v-show="showHot==6"></working1>
			<news v-show="showHot==5"></news>
			<hoting v-show="showHot==1"></hoting>
			<communistParty v-show="showHot==0"></communistParty>
			<meeting v-show="showHot==2"></meeting>
			<gradesSelect v-show="showHot==3"></gradesSelect>
			<listreport v-show="showHot==4"></listreport>
			<viewing1 v-show="showHot==7"></viewing1>
			<newsInfo v-show="showHot==8"></newsInfo>
			<works v-show="showHot==9"></works>
		</div>

		<div class="footer">
			<div>
				<div class="footer1">主办单位：中共中央组织部　<br />
					版权所有：中共中央宣传部 <br /> 京ICP备05064772号　　<br />
					<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11040202430017" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;color:#303d5d;">
						<img src="../assets/images/carousel/5.jpg" style="vertical-align: middle;position: relative;" />京公网安备
						11040202430017号</a>
					<!--<br><span class="dis-none">技术支持：webmaster@mail.neea.edu.cn</span>-->
				</div>
			</div>
		</div>
	</div>

</template>
<script>
	import c01 from '@/assets/images/carousel/1.jpg'
	import c02 from '@/assets/images/carousel/2.jpg'
	import c03 from '@/assets/images/carousel/3.jpg'
	import c04 from '@/assets/images/carousel/4.jpg'
	import Login from '@/views/login/Login.vue'
	import hoting from '@/views/title/hoting'
	import news from '@/views/news/news'
	import communistParty from '@/views/communistParty/communistParty'
	import meeting from '@/views/meeting/meeting'
	import gradesSelect from '@/views/grades/gradesSelect'
	import listreport from '@/views/report/listreport'
	import working1 from '@/views/title/working1'
	import viewing1 from '@/views/title/viewing1'
	import newsInfo from '@/views/news/newsInfo'
	import works from '@/views/work/work'
	
	export default {
		data() {
			return {
				num: 0,
				carouselList: [{
						name: '党旗飘飘',
						url: c01
					},
					{
						name: '党纪党风',
						url: c02
					},
					{
						name: '党的誓言',
						url: c03
					},
					{
						name: '党和人民',
						url: c04
					},

				],
				showHot: 1,
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		methods: {

			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		},


		name: "index",

		components: {
			newsInfo,
			hoting,
			communistParty,
			meeting,
			gradesSelect,
			listreport,
			news,
			working1,
			works,
			viewing1
		},

	};
</script>

<style scoped>
	.titi {
		font-size: 35px;

		color: white;
		font-weight: 700;
	}

	.box1 {

		margin: 0 auto;

		text-align: center;

	}

	.box ul {

		width: 30%;
		margin: 0 auto;
		text-align: center;
	}

	.box ul li {
		list-style: none;
		float: left;
		width: 16.66%;

		text-align: center;
		align: center;
		cursor: pointer;
		color: rgba(255, 255, 255, .8);
		font-size: 16px;
		margin: 0 auto;
	}

	.box {
		text-align: center;
		background-color: #000000;

	}

	.item {
		width: 100%;

	}

	.login {
		padding-right: 20px;

	}

	.topNav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-weight: 600;

	}

	.topNav li {
		font-size: 20px;
		cursor: pointer;
		list-style: none;

	}

	.active {
		color: white;

	}

	.main {
		padding: 50px;
	}

	#Footer {
		border-top: 1px solid #ccc;
	}

	.footer {
		height: 110px;
		background: #f4f4f4;
		color: #303D5D;
		text-align: center;
		font-size: 12px;
		margin-bottom: 0px;
		border-top: 1px solid black;
		border-bottom: 1px solid black;
		width: 100%;
		text-align: center;
	}

	.footer1 {
		margin-top: 20px;
	}

	.footer-bottom {
		width: 1200px;
		margin-left: -600px;
		left: 50%;
		position: absolute;
	}

	.motto select {
		width: 150px;
		height: 30px;
		*height: auto;
		border-radius: 3px;
		margin-left: 20px;
		font-family: "微软雅黑"
	}

	.menu ul li {
		float: left;
		position: relative;
		margin-right: 15px;
		font-size: 14px;
		text-align: left;
		font-size: 12px;
	}

	.menu ul li#hide3 {
		margin-right: 0
	}

	.menu li .hide {
		display: block;
		height: 30px;
		line-height: 30px;
		padding: 0 20px 0 0;
		margin-left: 50px;
		background: url(/res/Home/structure/160930481.png) no-repeat right center;
		/*;margin-left:25px;*/
		color: #303D5D
	}

	.menu li a:hover {
		text-decoration: none;
		color: #ff8000
	}

	.menu li#hide3 .hide {
		/*width: 185px;background: url(/res/Home/structure/16081194.jpg) no-repeat left top;*/
	}

	.menu ul li div a {
		color: #303D5D
	}

	.menu ul li div {
		display: block;
		position: absolute;
		width: 280px;
		bottom: 31px;
		border-color: #ccc;
		border-style: solid;
		border-width: 0;
		background: #fff;
		right: -63px;
		height: 0px;
		overflow-y: auto !important;
		overflow-x: hidden !important;
	}

	.menu ul li ul li {
		display: block;
		background: #fff;
		color: #000;
		width: 295px;
		padding: 0 7px;
		height: 25px;
		line-height: 25px;
		clear: both;
		float: none;
		margin: 0;
	}

	#logi:hover {
		text-decoration: none
	}

	.menu ul li#hide1 .hide {
		/*background: url(/res/Home/structure/16081196.png) no-repeat 5px center;*/
		background: none;
		height: 30px;
		line-height: 30px;
		border-radius: 5px;
		padding-left: 0
	}

	.menu ul li#hide1 .hide:hover {
		text-decoration: none
	}

	.linktit {
		background: url('/res/Home/structure/160930480.jpg') repeat-x left 50%;
		text-align: left
	}

	.linktit span {
		padding: 5px 8px 5px 0;
		background-color: #f4f4f4;
	}

	.linktit {}
</style>
