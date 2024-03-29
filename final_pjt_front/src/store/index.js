import Vue from 'vue'
import Vuex from 'vuex'
//
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '@/router'

const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],

  state: {
    username: null,
    movies: [],
    genres: [],
    token: null,
  },

  getters: {
    isLogin(state) {
      return state.token ? true : false
    },
    isNotLogin(state) {
      return state.token ? false : true
    },
  },

  mutations: {
    GET_MOVIES(state, movies) {
      state.movies = movies
    },
    
    SAVE_TOKEN(state, {token, username}) {
      state.token = token
      state.username = username
      router.push({name: 'MainView'})
    },

    DELETE_TOKEN(state) {
      state.token = null
      state.username = null
      router.push({name: 'SignInView'})
    },

    GET_GENRES(state, genres) {
      state.genres = genres
    }

  },

  actions: {
    getMovies(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/movies/`,
      })
      .then((res) => {
        // console.log(res, context)
        context.commit('GET_MOVIES', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      },

    getGenres(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/genres/`
      })
      .then((res) => {
        // console.log(res, context);
        const genres = res.data
        context.commit('GET_GENRES', genres)
      })
      .catch((err) => {
        console.log(err)
      })
    },

    signUp(context, payload) {
      // ####
      const username = payload.username1
      const password1 = payload.password1
      const password2 = payload.password2

      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          // ###
          username, password1, password2
        }
      })
      .then((res) => {
        // console.log(res)
        // context.commit('SIGN_UP', res.data.key)
        context.commit('SAVE_TOKEN', {token: res.data.key, username: payload.username1})
      })
      .catch((err) => {
      console.log(err)
      })
    },

    signIn(context, payload) {
      const username = payload.username
      const password = payload.password
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username, password
        }
      })
      .then((res) => {
      context.commit('SAVE_TOKEN', {token: res.data.key, username: payload.username})
      })
      .catch((err) => {
        console.log(err)
      })
    },

    signOut(context) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/logout/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
      .then(() => {
        context.commit('DELETE_TOKEN')
      })
      .catch((err) => {
        console.log(err)
      })
    },

  },

  modules: {
  }
})
