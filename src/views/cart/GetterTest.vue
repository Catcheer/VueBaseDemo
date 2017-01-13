<template>
  <div>
    <ul>
      <li v-for='doneTodo of doneTodoArr'>{{doneTodo}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default{
    data(){
      return {}
    },
    components: {},
    methods: {},
    computed: {
     /* doneTodoArr(){
        return this.$store.getters.doneTodos;
      }*/
      ...mapGetters(
        {
          doneTodoArr:'doneTodos'
        }

//        'anotherGetter',
        // ...
      )
    }
  }
</script>
