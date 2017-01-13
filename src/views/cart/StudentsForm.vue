<template>
  <div>
    <ul class="info_list">
      <li><input class="info_input" type="text" id='sId' placeholder="id" v-model="sInfo.sId"/></li>
      <li><input class="info_input" type="text" id='uname' placeholder="uname" v-model="sInfo.name"/></li>
      <li><input class="info_input" type="text" id="age" placeholder="age" v-model="sInfo.age"/></li>
      <li><input class="info_input" type="text" id="grade" placeholder="grade" v-model="sInfo.grade"/></li>
      <li>
        <button class="del_btn" @click="add">记录</button>
      </li>
    </ul>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        sInfo:{
          sId: "",
          name: "",
          age: "",
          grade: ""
        }
      }
    },
    components: {},
    methods: {

      add()
      {
        const obj = Object.assign({},this.sInfo);
        this.$store.commit('add', obj);
        this.sInfo.sId = "";
        this.sInfo.name = "";
        this.sInfo.age = "";
        this.sInfo.grade = "";
      }
    }
  }
</script>
