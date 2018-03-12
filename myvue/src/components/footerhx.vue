<template>
	<footer class="footer">
		<form action="#" >
			<input type="text" placeholder="搜索书名、书号、作者" class="search-book">
			<input type="submit" value="搜索" class="sbutton">
		</form>
		<nav class="nav-bottom">
			<a href="#">书架</a>
			<a href="#">排行</a>
			<a href="#">充值</a>
			<a href="#">客户端</a>
		</nav>
		<div class="content">
			<div class="title">联系客服 : </div>
			<div class="content-list">
			<div class="list1">
				<span>客服QQ:3416319270</span>
				<span>客服微信:huoxingkufu</span>
			</div>
			<div class="list2">
				<span>客服邮箱:kefu@hotread.com</span>
				<span>客服电话:010-85789676-619</span>
			</div>

			</div>
		</div>
	</footer>
</template>
<script>
	export default {
  name: 'footerhx',
  data () {
    return {
        mes:"你好"
    }
  }
}
</script>
<style scoped src="../css/footer.css">
	
</style>