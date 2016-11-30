// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import User from "./views/user/User.vue"
import ShoppingList from "./views/shopping/ShoppingList.vue"
import ShoppingCon from "./views/shopping/ShoppingCon.vue"
import Cart from "./views/cart/Cart.vue"



Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: ShoppingList,
        meta:{title:'商品列表'}
    },
    {
        path: "/cart",
        component: Cart,
        meta:{title:'购物车'}
    },
    {
        path: "/user/:id",
        component: User,
      meta:{title:'用户中心'}
    },
  {
    path: "/shoppingcon/:id",
    name:'shoppingcon',
    component: ShoppingCon,
    meta:{title:'文章内容'}
  }
]


var router = new VueRouter({
    routes
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)

})
