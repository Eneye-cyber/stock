import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/StockTrader.vue'
import Portfolio from '../components/portfolio/Portfolio.vue'
import Stock from '../components/stocks/Stocks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Portfolio
  },
  {
    path: '/stock',
    name: 'Stock',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Stock
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
