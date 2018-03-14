<template>
	<!-- public nav -->
	<nav class="nav" @click="fn()" >
		<router-link to="/" active-class="active" exact>首页</router-link>
		<router-link to="/goods" active-class="active" >精品</router-link>
		<router-link to="/room" active-class="active">书库</router-link>
		<router-link to="/bookorder" active-class="active">排行</router-link>
		<router-link to="/money" active-class="active">充值</router-link>
		<router-link to="/bookrack" active-class="active">书架</router-link>
	</nav>
</template>
<script>
	export default {
  name: 'navhx',
  data () {
    return {
        mes:"你好"
    }
  },
    methods:{
	  	fn(){
	  		location.reload()
	  	}
	  }
}
</script>
<style scoped src="../css/nav.css"></style>