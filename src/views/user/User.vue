<template>
    <div>
      <h3>{{title}}</h3>
      <div>
        <img :src='images.bestPic'>
      </div>

    </div>
</template>

<script>

  import images from "../../assets/images"
    export default{
        data(){
            return{
              title:"this is a title",
              images
            }
        },
    }




</script>
