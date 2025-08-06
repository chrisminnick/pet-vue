import { createRouter, createWebHistory } from 'vue-router'
import PetList from '../views/PetList.vue'
import PetDetail from '../views/PetDetail.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', redirect: '/pets' },
  { path: '/pets', name: 'PetList', component: PetList },
  { path: '/pets/:id', name: 'PetDetail', component: PetDetail, props: true },
  { path: '/about', name: 'About', component: AboutView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
