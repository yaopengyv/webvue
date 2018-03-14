<template>
    <!-- <Bookindex/> -->
    <div id="hello">
		<router-view/>
	</div>
</template>

<script>
import headerhx from './components/headerhx'
import navhx from './components/navhx'
import footerhx from './components/footerhx'
export default {
  name: 'App',
 data () {
    return {
        mes:"你好"
    }
  },
  components:{
      headerhx,
      navhx,
      footerhx

  }
}
</script>

<style scope src="./css/Bookindex.css"></style>
