import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import * as App from './App.vue'
import * as Login from './pages/Login.vue'
import * as UserInfo from './pages/UserInfo.vue'
import VueRouter from "vue-router"
Vue.use(ElementUI)
Vue.use(VueRouter);
const routes=[
    {
      path:"/", component:Login
    },
    {
        path:'/userinfo',component:UserInfo
    }
];
const router=new VueRouter({routes})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
