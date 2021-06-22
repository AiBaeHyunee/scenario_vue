import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Common from "./components/Common";
import Layout from "./components/Layout";
import HelloWorld from "./components/HelloWorld";
import Login from "./components/Login";
import PlayList from "./components/PlayList";
import AddPlay from "./components/AddPlay";
import HomePage from "./components/HomePage";
import PlayUserList from "./components/PlayUserList";
import ManageUserList from "./components/ManageUserList";
import OrderList from "./components/OrderList";
import ChangePlay from "./components/ChangePlay";


//引入echarts
import * as echarts from 'echarts'

Vue.config.productionTip = false
Vue.use(VueRouter)

//定义一个全局变量
Vue.prototype.GLOBAL = Common
Vue.prototype.$echarts = echarts

const routes=[
  {
    path: '/',
    component: Login
  },
  {
    path:'/layout',
    component:Layout,
    children:[
      {
        path:'/homepage',
        components:{
          content:HomePage
        }
      },
      {
        path:'/hello',
        components:{
          content:HelloWorld
        }
      },
      {
        path:'/playlist',
        components:{
          content:PlayList
        }
      },
      {
        path:'/addplay',
        components:{
          content:AddPlay
        }
      },
      {
        //修改剧本
        path:'/changeplay',
        components:{
          content:ChangePlay
        }
      },
      {
        //玩家用户列表
        path:'/play_userlist',
        components:{
          content:PlayUserList
        }
      },
      {
        //管理人员列表
        path:'/manage_userlist',
        components:{
          content:ManageUserList
        }
      },
      {
        path:'/orderlist',
        components:{
          content:OrderList
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
