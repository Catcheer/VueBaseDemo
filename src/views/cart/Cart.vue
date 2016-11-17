<template>
  <div>
    <ul class="shopping_list">
        <li>
            <div class="itme_con">
              <span><input type="checkbox" />全选</span>
              <span>型号</span>
              <span>单价</span>
              <span>数量</span>
              <span>总价</span>
              <span>删除</span>
            </div>
        </li>
            <li v-for="item in items">
              <CartItem :item="item"></CartItem>
            </li>
    </ul>

    <!--<router-link to='foo/1'>TO FOO ONE</router-link>-->

  </div>
</template>
<script>
    import CartItem from "./CartItem"

export default {
  data () {
    return {
      items:[
          {
            phoneType:"i4",
            count:1,
            price:1800,
            totalPrice:5000
          },
           {
            phoneType:"i5",
             count:1,
             price:3200,
             totalPrice:5000
          },
           {
            phoneType:"i6",
             count:1,
             price:5800,
             totalPrice:5000
          }
      ]
    }
  },
    components:{CartItem}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

