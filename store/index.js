import axios from "axios";

//state
export const state = () => ({

  currentPost: {},
  perPage: 5,
  page: 1,
  pages: 0,
  posts: []

})

//getters
export const getters = {}

//actions
export const actions = {
  setPostAction({
    commit
  }, post) {
    commit('SET_CURRENT_POST', post)
  },
  async setPosts({
    commit,
    state
  }) {
    const posts = await this.$axios.$get(`http://localhost:3001/posts/?_page=${state.page}&_limit=${state.perPage}`)

    commit('SET_POSTS', posts)
  },
  setPageCount({
    commit,
    state
  }, posts) {
    const pages = posts.length < state.perPage ? 1 : Math.ceil(posts.length / state.perPage)
    commit('SET_PAGE_COUNT', pages)
  },
  async changePage({
    commit,
    state
  }, page) {
    const posts = await this.$axios.$get(`http://localhost:3001/posts/?_page=${ page }&_limit=${state.perPage}`)

    commit('SET_POSTS',posts)
    commit('SET_PAGE',page)
    
  }
}

//mutations
export const mutations = {

  SET_CURRENT_POST(state, post) {
    state.currentPost = post
  },

  SET_POSTS(state, posts) {
    state.posts = posts
  },

  SET_PAGE_COUNT(state, pages) {
    state.pages = pages
  },

  SET_PAGE(state,page) {
    state.page = page
  } 
}
