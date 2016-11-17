<template>
  <div class="itme_con">
       <span><input type="checkbox" /></span>
       <span>{{item.phoneType}}</span>
       <span>{{item.price}}</span>
       <span>{{item.count}}</span>
       <span>{{item.totalPrice}}</span>
       <span><button>删除</button></span>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
   props:{
            item: Object
        },
}
</script>
