import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import TemplateList from "@/views/templates/TemplateList.vue";
import Template from "@/views/templates/Template.vue";
import ResourceList from "@/views/resources/ResourceList.vue";
import Resource from "@/views/resources/Resource.vue";
import GraphsList from "@/views/graphs/GraphsList.vue";
import Graph from "@/views/graphs/Graph.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/template',
    name: 'templates',
    component: TemplateList,
  },
  {
    path: '/template/:id',
    name: 'template',
    component: Template,
    props: route => ({ id: route.params.id, mode: route.query.mode})
  },
  {
    path: '/resource',
    name: 'resources',
    component: ResourceList
  },
  {
    path: '/resource/:type',
    name: 'resourcest',
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
    path: '/graphs/:id',
    name: 'graph',
    component: Graph,
    props: route => ({ id: route.params.id, mode: route.query.mode})
  },
  {
    path: '/graphs',
    name: 'graphlist',
    component: GraphsList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
