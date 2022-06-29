import Vue from 'vue'
import VueRouter from 'vue-router'
import AddnNew from '../views/AddnNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: AddnNew
  },
]

const router = new VueRouter({
  routes
})

export default router
