
<template >
<div id="hi">
	<div id="ind">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="../assets/xiaozhenguniang.jpg" alt="" /></div>
		        <div class="swiper-slide"><img src="../assets/tiancai.jpg" alt="" /></div>
		        <div class="swiper-slide"><img src="../assets/guiyan.jpg" alt="" /></div>
		    </div>
		</div>
	</div>
	<div class="re">
		<h2>主编推荐<span></span></h2>
		<div class="re_con">
			<img src="../assets/jiaoqi.jpg" alt="" />
			<div>
				<li>娇妻背后的秘密</li>
				<i>陌上小君 | 现代都市 | <span>连载</span></i>
				<em>妻子和别人在宾馆谈项目？绝对不能忍。</em>
			</div>
		</div>
		<ul>
			<li>因一记催婚电话，风流大少放下“屠刀”...</li>
			<li>我专门给死人缝尸，第一具就是女朋友。</li>
			<li>疯狂诡异的碎尸案，带你走进真实的犯罪现场。</li>
			<li>办公室里，美女上司把我叫了进去。</li>
			<li>薄情的前夫，请你自重好吗？</li>
		</ul>
	</div>
	<div class="re">
		<h2>大神力作<span></span></h2>
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


