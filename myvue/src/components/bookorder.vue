
<template >

<!-- 男频 -->
<section>
  <ul class="toplist">
    <h2 class="title">男频</h2>
    <li v-for="item in boyorder">
      <a href="#">
        <img :src="item.osrc" class="list-img" alt="">
        <span class="list-name">{{item.name}}</span>
        <img src="../assets/orderimg/rightimg.png" alt="" class="icon-right">
      </a>
    </li>
    <h2 class="title">女频</h2>
    <li v-for="item in girlorder">
      <a href="#">
        <img :src="item.osrc" class="list-img" alt="">
        <span class="list-name">{{item.name}}</span>
        <img src="../assets/orderimg/rightimg.png" alt="" class="icon-right">
      </a>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  name: 'bookorder',
  data () {
    return {
        boyorder:[
           {osrc:require('../assets/orderimg/oboy1.png'),name:"月票榜"},
           {osrc:require('../assets/orderimg/oboy2.png'),name:"潜力榜"},
           {osrc:require('../assets/orderimg/oboy3.png'),name:"推荐榜"},
           {osrc:require('../assets/orderimg/oboy4.png'),name:"人气榜"},
           {osrc:require('../assets/orderimg/oboy5.png'),name:"打赏榜"}
        ],
          girlorder:[
           {osrc:require('../assets/orderimg/ogirl1.png'),name:"月票榜"},
           {osrc:require('../assets/orderimg/ogirl2.png'),name:"潜力榜"},
           {osrc:require('../assets/orderimg/ogirl3.png'),name:"推荐榜"},
           {osrc:require('../assets/orderimg/ogirl4.png'),name:"人气榜"},
           {osrc:require('../assets/orderimg/ogirl5.png'),name:"打赏榜"}
        ],
    }
  }
}
</script>


<style scoped src="../css/bookorder.css"></style>


