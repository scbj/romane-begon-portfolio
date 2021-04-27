import { make } from 'vuex-pathify'

const SET_IS_MODAL_OPENED = 'SET_IS_MODAL_OPENED'

export const state = {
  isModalOpened: false,
  formStatus: 'writing',
  formData: {}
}

export const mutations = make.mutations(state)

export const actions = {
  openModal ({ commit, dispatch }) {
    commit(SET_IS_MODAL_OPENED, true)
    window.location = '#contact'

    const onHashChange = () => {
      if (!window.location.hash) {
        dispatch('closeModal')
        window.removeEventListener('hashchange', onHashChange)
      }
    }

    window.addEventListener('hashchange', onHashChange)
  },

  closeModal ({ commit }) {
    window.location = '#'
    commit(SET_IS_MODAL_OPENED, false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
