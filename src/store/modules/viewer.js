import { preload } from '@/utils/image'
import { make } from 'vuex-pathify'

export const state = {
  activePhoto: '',
  activeIndex: 0,
  isActive: false,
  pending: false,
  photos: [],
  savedTheme: null
}

export const getters = {
  canGoNext (state) {
    return state.activeIndex < state.photos.length - 1
  },

  canGoPrevious (state) {
    return state.activeIndex > 0
  }
}

export const mutations = make.mutations(state)

export const actions = {
  open ({ commit, dispatch, rootState }, { photos, activePhoto }) {
    commit('SET_SAVED_THEME', rootState.ui.theme)
    commit('ui/SET_THEME', { mode: 'dark' }, { root: true })
    commit('SET_PHOTOS', photos)
    commit('SET_IS_ACTIVE', true)
    dispatch('updateActive', activePhoto)
    window.location = '#visualiseur'
    window.onhashchange = () => {
      if (!window.location.hash) {
        commit('SET_IS_ACTIVE', false)
      }
    }
  },

  close ({ commit, state }) {
    commit('ui/SET_THEME', state.savedTheme, { root: true })
    commit('SET_IS_ACTIVE', false)
  },

  async updateActive ({ commit, state }, payload) {
    const index = typeof payload === 'string' ? Math.max(0, state.photos.indexOf(payload)) : payload
    const photo = state.photos[index]
    commit('SET_PENDING', true)
    const size = Math.min(Math.max(window.innerHeight, window.innerWidth), 3000)
    const resizing = window.innerHeight > window.innerWidth
      ? `h=${size}`
      : `w=${size}`
    const optimizedPhoto = `${photo}?fm=webp&${resizing}`
    await preload(optimizedPhoto)
    commit('SET_PENDING', false)
    commit('SET_ACTIVE_INDEX', index)
    commit('SET_ACTIVE_PHOTO', optimizedPhoto)
  },

  previous ({ dispatch, getters, state }) {
    if (!getters.canGoPrevious) {
      return
    }
    const index = state.activeIndex - 1
    dispatch('updateActive', index)
  },

  next ({ dispatch, getters, state }) {
    if (!getters.canGoNext) {
      return
    }
    const index = state.activeIndex + 1
    dispatch('updateActive', index)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
