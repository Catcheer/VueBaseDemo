<template>
  <div>
    <ul class="info_head info_list">
      <li>学号</li>
      <li>姓名</li>
      <li>年龄</li>
      <li>班级</li>
      <li>操作</li>
    </ul>
    <ul class="info_list" v-for="item of studentsArr">
      <li>{{item.sId}}</li>
      <li>{{item.name}}</li>
      <li>{{item.age}}</li>
      <li>{{item.grade}}</li>
      <li @click="remove(item)">删除</li>
    </ul>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    data(){
      return {}
    },
    components: {},
    methods: {
      remove(item){
//          this.$store.commit("remove",{item})
        this.$store.dispatch("remove",
          {
            item: item
          })
      }
    },
    /*computed:{
     studentsArr(){
     return this.$store.state.studentsArr;
     }
     }*/
    computed: mapState(['studentsArr'])
  }
</script>
