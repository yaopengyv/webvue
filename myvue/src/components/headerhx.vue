<template>
	<!-- public header -->
  	<header class="header">
		<a href="/" class="slogo">火星小说</a>
		<div class="tools">
			<a href="/search" class="search"><span class="iconfont icon-magnifier"></span></a>
			<a href="/readpath" style="display: block;line-height:0.3rem;color: #fff;font-weight: 300;font-size:0.13rem;">阅读记录</a>
			<i style="display: block;line-height:0.3rem;color: #fff;font-weight: 300;font-size:0.13rem;">丨</i>
			<a href="/login"style="display: block;line-height:0.3rem;color: #fff;font-weight: 300;font-size:0.13rem;">登录</a>
			<i style="display: block;line-height:0.3rem;color: #fff;font-weight: 300;font-size:0.13rem;">丨</i>
			<a href="/regist" style="display: block;line-height:0.3rem;color: #fff;font-weight: 300;font-size:0.13rem;">注册</a>
		</div>
  	</header>
</template>	
<script>
	export default {
  name: 'headerhx',
  data () {
    return {
        mes:"你好"
    }
  },
}
</script>
<style scoped src="../css/header.css" ></style>
<style src="../iconfont/iconfont.css"></style>