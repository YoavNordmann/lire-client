import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HelloWorld.vue'
import TemplateList from "@/views/templates/TemplateList.vue";
import Template from "@/views/templates/Template.vue";
import ResourceTypeList from "@/views/resources/ResourceTypeList.vue";
import ResourceList from "@/views/resources/ResourceList.vue";
import Resource from "@/views/resources/Resource.vue";
import ActionList from "@/views/actions/ActionList.vue";
import Action from "@/views/actions/Action.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/template',
    name: 'templates',
    component: TemplateList
  },
  {
    path: '/template/:id',
    name: 'template',
    component: Template,
    props: route => ({ id: route.params.id, mode: route.query.mode})
  },
  {
    path: '/resource',
    name: 'resourcetypelist',
    component: ResourceTypeList
  },
  {
    path: '/resource/:type',
    name: 'resources',
    component: ResourceList,
    props: route => ({ type: route.params.type})
  },
  {
    path: '/resource/:type/:id',
    name: 'resource',
    component: Resource,
    props: route => ({ id: route.params.id, type: route.params.type, mode: route.query.mode})
  },
  {
    path: '/action/:id',
    name: 'action',
    component: Action,
    props: route => ({ id: route.params.id, mode: route.query.mode})
  },
  {
    path: '/action',
    name: 'actionlist',
    component: ActionList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
