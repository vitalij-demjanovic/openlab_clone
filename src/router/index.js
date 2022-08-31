import { createRouter, createWebHashHistory } from 'vue-router'
import about from '../plugins/app@about/about.vue'
import teacher from '../plugins/app@teacher/teachers.vue'
import partners from '../plugins/app@partners/partners.vue'
import modernaSkola from '../plugins/app@school/school.vue'
import HybridLab from '@/plugins/app@hybridlab/hybrid-lab.vue'
import GamesLab from '@/plugins/app@gameslab/games-lab'
import AppLab from '@/plugins/app@applab/app-lab'

const routes = [
  {
    path: '/',
    component: about,
    name: 'About'
  },
  {
    path: '/pre-ucitelov',
    component: teacher,
    name: 'Teacher'
  },
  {
    path: '/partneri',
    component: partners,
    name: 'Partners'
  },
  {
    path: '/moderna-skola',
    component: modernaSkola,
    name: 'Skola'
  },
  {
    path: '/hybridlab',
    component: HybridLab,
    name: 'HybridLab'
  },
  {
    path: '/gameslab',
    component: GamesLab,
    name: 'GamesLab'
  },
  {
    path: '/applab',
    component: AppLab,
    name: 'AppLab'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
