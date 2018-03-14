<template>
	<div id="hello">
		<div class="banner">
			<a href="javascript:history.back(-1);" class="icon"><i class="iconfont icon-zuojiantou"></i></a>
			<h3>注册</h3>
			<a href="/login" class="icon1">登录</a>
		</div>
		<div class="wrap wrap-only">
			<form action="" class="auth-form login-modal" method="post">
				<div class="form-group account"><input type="text" placeholder="给自己起个牛逼的昵称吧"></div>
				<div class="form-group phone">
					<span class="region">+86&nbsp;</span>	
					<input type="password" placeholder="手机号码">
				</div>
			 	<div class="form-group note">
					<input type="text" placeholder="验证码">
					<span>获取验证码</span>
				</div>
				<div class="form-group password">
					<input type="text" placeholder="密码（字母和数字不少于6位）">
				</div>
				<div class="form-group password-confirm">
					<input type="text" placeholder="确认密码">
				</div> 
				<div class="submit-box"><input type="submit" value="完 成"></div>
			</form>
			
			<div class="thirdly-login">
				<div class="title">
					<span class="border"></span>
					<span class="select">选择登录方式</span>
					<span class="border"></span>
				</div>
				<div class="rect">
					<a href="#"><i class="iconfont icon-qq"></i></a>
					<a href="#"><i class="iconfont icon-weixin"></i></a>
					<a href="#"><i class="iconfont icon-weibo1"></i></a>
				</div>
			</div>
		</div>
		<footerhx/>
	</div>
</template>
<script>
	import footerhx from '../components/footerhx'
	export default {
		name: "regist",
		components:{
			footerhx
		}
	}
</script>
<style scope src="../css/regist.css"></style>
<style src="../iconfont/iconfont.css"></style>
