
<template >
<section>
  <div class="shelf-operate">
    <span class="so-btn">编辑书架</span>
  </div>
  <ul class="books-column">
    <li v-for="item in rack">
      <a href="#">
        <span class="cover">
          <img :src="item.img" alt="">
        </span>
        <div class="descn">
          <h4 class="name">
            {{item.cons1}}
            <div class="bookState" style="top:1px">
              立即阅读
            </div>
          </h4>
          <div class="read">
           还未阅读
          </div>
          <div class="read">
           {{item.cons2}}
           章未读
          </div>
          <div class="latest-chapter">
            最近更新：
            {{item.cons3}}
          </div>
        </div>
      </a>
    </li>
  </ul>
</section>
</template>

<script>

export default {
  name: 'bookrack',
  data () {
    return {
        mes:"你好",
        rack:[
          {
            img:require("../assets/orderimg/rack1.jpg"),
            cons1:"金先生的恩宠",
            cons2:"299",
            cons3:"第500章"
          },
          {
            img:require("../assets/orderimg/rack2.jpg"),
            cons1:"无良王妃：王爷请宽衣",
            cons2:"283",
            cons3:"第二百八十三章 大难不死必有后福"
          },
           {
            img:require("../assets/orderimg/rack3.jpg"),
            cons1:"元尊",
            cons2:"325",
            cons3:"第三百二十章 诱饵"
          },
           {
            img:require("../assets/orderimg/rack4.jpg"),
            cons1:"缝尸匠",
            cons2:"293",
            cons3:"第二百九十二章 出师不利"
          },
           {
            img:require("../assets/orderimg/rack5.jpg"),
            cons1:"我的绝品女友",
            cons2:"549",
            cons3:"第500章"
          },
           {
            img:require("../assets/orderimg/rack6.jpg"),
            cons1:"金先生的恩宠",
            cons2:"299",
            cons3:"第549章 了断7"
          },
           {
            img:require("../assets/orderimg/rack7.jpg"),
            cons1:"我的极品女上司",
            cons2:"859",
            cons3:"第八百六十章 预感到不妙"
          }
              ]
    }
  }
  
}
</script>

<style scoped src="../css/bookrack.css"></style>


