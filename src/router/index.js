// 路由对象模块
import Vue from "vue"
import VueRouter from "vue-router"
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    // 所有路由
    routes: [
        {
            path: '/msite',
            component: MSite,
            meta: {
                showFooter: true
            },
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            },
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            },
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            },
        },
        {
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/shop',
            component: Shop,
            children: [
                {
                    path: 'goods',
                    component: ShopGoods,
                },
                {
                    path: 'info',
                    component: ShopInfo,
                },
                {
                    path: 'ratings',
                    component: ShopRatings,
                },
                {   // 默认重定向至/shop/goods
                    path: '',
                    redirect: 'goods'
                },
            ]
        },
    ]
})