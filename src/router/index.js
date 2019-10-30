import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HelloWorld.vue'
import TemplateList from "@/views/templates/TemplateList.vue";
import Template from "@/views/templates/Template.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/template',
    name: 'Templates',
    component: TemplateList
  },
  {
    path: '/template/:id',
    name: 'Template',
    component: Template,
    props: route => ({ id: route.params.id, mode: route.query.mode})
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
