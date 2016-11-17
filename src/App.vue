<template>
  <div id="app">
   <v-header :title="title"></v-header>
    <router-view ></router-view>
    <v-footer></v-footer>
    </div>
</template>

<script>
  import './assets/css/main.scss'
import VHeader from './components/v-header.vue'
import VFooter from './components/v-footer.vue'
export default {
  components: {
      VHeader,
      VFooter
  },
    data(){
        return {
        }
    },
    computed:{
        title(){
            return this.$route.meta.title
        }
    }
}
</script>
<!--<style src="assets/css/main.scss"></style>-->
