<template>
	<div id="hello">
		<div class="banner">
			<a href="javascript:history.back(-1);" class="icon"><i class="iconfont icon-zuojiantou"></i></a>
			<h3>登录</h3>
			<p class="icon"></p>
		</div>
		<div class="wrap wrap-only">
			<form action="" class="auth-form login-modal" method="post">
				<div class="form-group account"><input type="text" placeholder="请输入您的手机号码"></div>
				<div class="form-group password"><input type="password" placeholder="请输入登录密码"></div>
				<div class="submit-box"><input type="submit" value="完 成"></div>
			</form>
			<div class="auth-switch">
				<a href="/regist">注册账号</a>
				<a href="#">忘记密码</a>
			</div>
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
		name: "login",
		components:{
			footerhx
		}
	}
</script>
<style src="../iconfont/iconfont.css"></style>
<style scope src="../css/login.css"></style>