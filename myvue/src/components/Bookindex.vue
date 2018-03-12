
<template >
<div id="hello">
	<headerhx/>
	<navhx/>
	<slot></slot>
	<footerhx/>
</div>
</template>

<script>
import headerhx from '../components/headerhx'
import navhx from '../components/navhx'
import footerhx from '../components/footerhx'

export default {
  name: 'Bookindex',
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../css/Bookindex.css"></style>


