<template>
	<div id="hello">
	<!-- <div class="main"> -->
		<div class="banner">
			<a href="javascript:history.back(-1);" class="icon"><i class="iconfont icon-zuojiantou"></i></a>
			<div class="search-text">
				<i class="iconfont icon-magnifier"></i>
				<input type="text" placeholder="搜索">
			</div>
			<a href="javascript:;" class="icon1">搜索</a>
		</div>
		<div class="search-tips">
			<h3>大家都在搜</h3>
			<div class="hot-search">
					<a href="javascript:;">元尊</a>
					<a href="javascript:;">阴间神探</a>
					<a href="javascript:;">美女</a>
					<a href="javascript:;">瓷魂</a>
					<a href="javascript:;">心梦无痕</a>
			</div>
		</div>
		<footerhx/>
		<!-- </div> -->
	</div>
</template>
<script>
	import footerhx from '../components/footerhx'
	export default {
		name: "search",
		components:{
			footerhx
		}
	}
</script>
<style scope src="../css/search.css"></style>
<style src="../iconfont/iconfont.css"></style>