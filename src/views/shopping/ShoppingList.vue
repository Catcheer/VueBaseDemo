<template>
  <div>
    <div class="banner">
      <img :src='Images.banner'>
    </div>
    <article class="wrap">
      <h4 class="tit pad_2">热门文章</h4>
      <section class="">
        <ShoppingItem v-for="item in shoppingArr" :item='item'>

        </ShoppingItem>
      </section>
    </article>

  </div>
</template>
<script>
  import  Images from '../../assets/images'
  import ShoppingItem from  './ShoppingItem.vue'
  export default {
    data(){
      return {
        shoppingArr: [
          {
            title: '使用-JavaScript-表达式',
            shopLogo: Images.bestPic,
            desText: 'Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析',
            likes: 32,
            reader: 101,
            publishTime: "2016-06-17 11:12"
          },
          {
            title: '使用-JavaScript-表达式',
            shopLogo: Images.bestPic,
            desText: 'Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析',
            likes: 32,
            reader: 101,
            publishTime: "2016-06-17 11:12"
          },
          {
            title: '使用-JavaScript-表达式',
            shopLogo: Images.bestPic,
            desText: 'Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析',
            likes: 32,
            reader: 101,
            publishTime: "2016-06-17 11:12"
          },
          {
            title: '使用-JavaScript-表达式',
            shopLogo: Images.bestPic,
            desText: 'Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析',
            likes: 32,
            reader: 101,
            publishTime: "2016-06-17 11:12"
          },
          {
            title: '使用-JavaScript-表达式',
            shopLogo: Images.bestPic,
            desText: 'Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析',
            likes: 32,
            reader: 101,
            publishTime: "2016-06-17 11:12"
          },
          {
            title: '使用-JavaScript-表达式',
            shopLogo: Images.bestPic,
            desText: 'Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析',
            likes: 32,
            reader: 101,
            publishTime: "2016-06-17 11:12"
          }

        ],
        Images
      }
    },
    methods: {

    },
    computed: {},
    components: {
      ShoppingItem
    }
  }
</script>
