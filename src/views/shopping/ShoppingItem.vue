<template>
    <div>
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
            <div class="flex_width"><span class="dis_in_bok">{{item.likes}}</span>{{item.reader}}</div>
            {{item.publishTime}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
//  import  Images from '../../assets/images'
    export default{
        data(){
            return{
//              Images
            }
        },
        components:{

        }
        ,props:['item']
    }
</script>
