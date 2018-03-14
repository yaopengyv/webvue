
<template >
<div id="hi">
	<div id="ind">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="../assets/buxiu.jpg" alt="" /></div>
		        <div class="swiper-slide"><img src="../assets/niangzi.jpg" alt="" /></div>
		        <div class="swiper-slide"><img src="../assets/yijin.jpg" alt="" /></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
	</div>
	<div class="re">
		<h2>悬疑灵异<span></span></h2>
		<div class="re_con">
			<img src="../assets/heomingdan.jpg" alt="" />
			<div>
				<li>黑名单</li>
				<i>小丑&nbsp;|&nbsp;悬疑灵异&nbsp;|&nbsp;<span>连载</span></i>
				<em>那天晚上，班级里的同学变成了鬼。</em>
			</div>
		</div>
		<ul>
			<li>黄河捞尸，捞出一口悬棺，从此祸端肆乱。</li>
			<li>这是关于我和诡奇的离奇故事...</li>
			<li>村里的女人每晚被逼干这种事！</li>
			<li>被骗去结冥婚，还怀上了鬼胎。</li>
			<li>你们再班级群里玩过抢红包吗？</li>
		</ul>
	</div>
	<div class="re">
		<h2>都市精品<span></span></h2>
		<div class="re_con">
			<img src="../assets/jiaoqi.jpg" alt="" />
			<div>
				<li>娇妻背后的秘密</li>
				<i>陌上小君 | 现代都市 | <span>连载</span></i>
				<em>妻子和别人在宾馆谈项目？绝对不能忍。</em>
			</div>
		</div> 
		<div class="re_con">
			<img src="../assets/jiaoqi.jpg" alt="" />
			<div>
				<li>娇妻背后的秘密</li>
				<i>陌上小君 | 现代都市 | <span>连载</span></i>
				<em>妻子和别人在宾馆谈项目？绝对不能忍。</em>
			</div>
		</div>
	</div>
	<div class="re" style="margin-bottom: 0;">
		<h2>完本巨作<span></span></h2>
		<div class="re_con">
			<img src="../assets/zongcai.jpg" alt="" />
			<div>
				<li>豪门深宠：总裁猎婚谋爱</li>
				<i>林深现鹿 | 现代言情 | <span>连载</span></i>
				<em>她为了家产把她逼死，可她还爱他。</em>
			</div>
		</div> 
		<div class="re_con">
			<img src="../assets/shenji.jpg" alt="" />
			<div>
				<li>神级兵王</li>
				<i>方可 | 现代都市 | <span>连载</span></i>
				<em>被战友临死前植入了“战争机器计划”...</em>
			</div>
		</div> 
		<div class="re_con">
			<img src="../assets/mglg.jpg" alt="" />
			<div>
				<li>阴缘难了，猛鬼老公缠上我</li>
				<i>妖凰 | 现代言情 | <span>连载</span></i>
				<em>男鬼每夜强迫我跟他做那种事！</em>
			</div>
		</div> 
	</div>
</div>
</template>

<script src="../js/swiper-4.1.6.min.js"></script>
<script>
	export default{
		name:"indexBook",
		
	}  
	window.onload=function(){
		var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,
			autoplay: true,
	   	 })   
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/swiper-4.1.6.min.css"></style>
<style scoped src="../css/indexBook.css">
</style>


