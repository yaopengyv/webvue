
<template >
<div id="hi">
	<div id="ind">
		<ul>
			<li>全部频道</li>
			<li><span class="active">男频</span><span>女频</span></li>
		</ul>
		<ul>
			<li class="active">全部类型</li>
			<li>
				<span>现代都市</span>
				<span>悬疑灵异</span>
				<span>玄幻仙侠</span>
				<span>历史军事</span>
			</li>
		</ul>
		<ul>
			<li class="active">全部标签</li>
			<li>
				<span>逆袭</span>
				<span>刑侦</span>
				<span>爽文</span>
				<span>扮猪吃虎</span>
				<span>悬疑</span>
				<span>热血</span>
			</li>
		</ul>
		<ul>
			<li>连载状态</li>
			<li>
				<span class="active">完结</span>
				<span>连载</span>
			</li>
		</ul>
		<ul>
			<li>排序状态</li>
			<li>
				<span>人气值</span>
				<span class="active">最近更新</span>
			</li>
		</ul>
		<p>
			搜索条件<span>↑</span>
		</p>
	</div>
	<div class="re" style="margin-bottom: 0;">
		<div class="re_con">
			<img src="../assets/heomingdan.jpg" alt="" />
			<div>
				<li>黑名单</li>
				<i>小丑&nbsp;|&nbsp;悬疑灵异&nbsp;|&nbsp;<span>连载</span></i>
				<em>那天晚上，班级里的同学变成了鬼。</em>
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
		<div class="re_con">
			<img src="../assets/jiaoqi.jpg" alt="" />
			<div>
				<li>娇妻背后的秘密</li>
				<i>陌上小君 | 现代都市 | <span>连载</span></i>
				<em>妻子和别人在宾馆谈项目？绝对不能忍。</em>
			</div>
		</div>
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
<style scoped src="../css/indexBook.css">
</style>
<style scoped src="../css/room.css"></style>


