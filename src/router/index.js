import { createRouter, createWebHashHistory } from 'vue-router'
import about from '../plugins/app@about/about.vue'
import teacher from '../plugins/app@teacher/teachers.vue'
import partners from '../plugins/app@partners/partners.vue'
import modernaSkola from '../plugins/app@school/school.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
