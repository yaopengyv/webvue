
<template >
<section>
  <div class="user">
    <p>
      <strong>充值账户：</strong>
      jack
    </p>
    <p>
      <strong>账户余额：</strong>
      13火星币
    </p>
  </div>
  <div class="pay-way">
    <h2 class="title">选择充值方式</h2>
    <!-- 品牌 -->
    <div class="pay-list">
      <div class="active">
        <span class="icon-current"></span>
        <i class="icon"></i>
        <i class="divide">|</i>
        <span class="pay-text">支付宝</span>
      </div>
      <div class="active wx-scan">
        <span class="icon-current"></span>
        <i class="icon"></i>
        <i class="divide">|</i>
        <span class="pay-text">微信扫码</span>
      </div>
    </div>
    <!-- 金额 -->
    <div class="money-list">
      <div class="money-item" v-for="item in money">
        <span class="money-amount">
          ￥
          <span>{{item.money1}}</span>
        </span>
        <span class="mars-currency">
          {{item.money2}}
          火星币
        </span>
        <span class="give-currency">
          {{item.money3}}火星币
        </span>
        <i class="icon-current"></i>
      </div>
      <div class="money-item" v-for="item in moneys">
        <span class="money-amount">
          ￥
          <span>{{item.money1}}</span>
        </span>
        <span class="mars-currency">
          {{item.money2}}
          火星币
        </span>
        <i class="icon-current"></i>
      </div>

      <div class="submit">确定充值</div>

      <div class="tip">
        <div class="title">温馨提示</div>
        <ol class="tip-list">
          <li>1.充值阅读仅限在火星小说使用</li>
          <li>2.火星币兑换比例为1元兑换100火星币</li>
          <li>3.购买后，账户余额若长时间无变化，请致电客服010-85789676-619</li>
        </ol>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'money',
  data () {
    return {
        mes:"你好",
        money:[
          {money1:100,money2:10000,money3:1500},
          {money1:500,money2:50000,money3:10000},
          {money1:1000,money2:100000,money3:25000}
        ],
        moneys:[
          {money1:30,money2:3000,money3:0},
          {money1:50,money2:5000,money3:0},
          {money1:80,money2:8000,money3:0}
        ]
    }
  }
}
</script>

<style scoped src="../css/money.css"></style>


