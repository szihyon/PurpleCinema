import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from '@/views/MainView.vue'
import RecommendationView from '@/views/RecommendationView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import DetailView from '@/views/DetailView'
import ProfileView from '@/views/ProfileView'
import SearchView from '@/views/SearchView.vue'
import GameView from '@/views/GameView.vue'
import ActorDetailView from '@/views/ActorDetailView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/:id',
    name: 'DetailView',
    component: DetailView
  },
  {
    path: '/recommendation',
    name: 'RecommendationView',
    component: RecommendationView
  },
  {
    path: '/signin',
    name: 'SignInView',
    component: SignInView
  },
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/profile/:username',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/search',
    name: 'SearchView',
    component: SearchView
  },
  {
    path: '/game',
    name: 'GameView',
    component: GameView
  },
  {
    path: '/actor/:id',
    name: 'ActorDetailView',
    component: ActorDetailView
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
