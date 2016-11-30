<template>
    <div>
      <router-link :to="{name:'shoppingcon',params:{id:2}}">
      <div class="box_list pad_2 dis_flex">
        <div class="l_img">
          <img  :src='item.shopLogo'>
        </div>
        <div class="txt_con">
          <h4>{{item.title}}</h4>
          <p>
            {{item.desText}}
          </p>
          <div class="dis_flex color_ccc">
            <div class="flex_width"><span class="dis_in_bok" v-on:click="addCouner">{{counter}}</span>{{item.reader}}</div>
            {{item.publishTime}}
          </div>
        </div>
      </div>
      </router-link>
    </div>
</template>

<script>
//  import  Images from '../../assets/images'
    export default{
        data(){
            return{
//              Images
              counter:this.item.likes

            }
        },
      methods:{
          addCouner(){
            this.counter++;
          },
      },
        components:{

        }
        ,props:['item']
    }
</script>
