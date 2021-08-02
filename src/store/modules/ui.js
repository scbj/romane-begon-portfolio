import { make } from 'vuex-pathify'

const SET_IS_MENU_ACTIVE = 'SET_IS_MENU_ACTIVE'

export const state = {
  isMenuActive: false,
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

  closeMenu ({ commit }) {
    commit(SET_IS_MENU_ACTIVE, false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
