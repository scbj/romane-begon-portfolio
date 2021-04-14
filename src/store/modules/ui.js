import { make } from 'vuex-pathify'

const SET_IS_MENU_ACTIVE = 'SET_IS_MENU_ACTIVE'
const SET_IS_VIEWER_ACTIVE = 'SET_IS_VIEWER_ACTIVE'
const SET_IS_CONTACT_MODAL_OPENED = 'SET_IS_CONTACT_MODAL_OPENED'

export const state = {
  isMenuActive: false,
  isContactModalOpened: false,
  isViewerActive: false,
  homeScrollTop: 0,
  theme: {
    mode: 'dark'
  }
}

export const mutations = make.mutations(state)

export const actions = {
  openMenu ({ commit, dispatch }) {
    commit(SET_IS_MENU_ACTIVE, true)
    window.location = '#menu'

    const onHashChange = () => {
      if (!window.location.hash) {
        dispatch('closeMenu')
        window.removeEventListener('hashchange', onHashChange)
      }
    }

    window.addEventListener('hashchange', onHashChange)
  },

  openContactModal ({ commit, dispatch }) {
    commit(SET_IS_CONTACT_MODAL_OPENED, true)
    window.location = '#contact'

    const onHashChange = () => {
      if (!window.location.hash) {
        dispatch('closeContactModal')
        window.removeEventListener('hashchange', onHashChange)
      }
    }

    window.addEventListener('hashchange', onHashChange)
  },

  closeContactModal ({ commit }) {
    commit(SET_IS_CONTACT_MODAL_OPENED, false)
  },

  closeMenu ({ commit }) {
    commit(SET_IS_MENU_ACTIVE, false)
  },

  closeViewer ({ commit }) {
    commit(SET_IS_VIEWER_ACTIVE, false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
