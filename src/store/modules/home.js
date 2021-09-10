import api from '@/services/api'
import { make } from 'vuex-pathify'

const SET_DATA = 'SET_DATA'
const SET_PRESTATIONS = 'SET_PRESTATIONS'

export const state = {
  data: {},
  prestations: []
}

export const getters = {
  sortedPrestations (state) {
    return state.data.fields.prestations.map(item => state.prestations.find(prestation => prestation.sys.id === item.sys.id))
  }
}

export const mutations = make.mutations(state)

export const actions = {
  async load ({ commit, dispatch }) {
    const response = await api.entries.list()
    commit(SET_DATA, response.items.find(item => item.sys.contentType.sys.id === 'home'))
    dispatch('loadPrestations', {
      prestations: response.items.filter(item => item.sys.contentType.sys.id === 'prestation'),
      assets: response.includes.Asset
    })
  },

  loadPrestations ({ commit }, payload) {
    const { prestations, assets } = payload
    prestations.map(prestation => {
      const backgroundImageAsset = assets.find(asset => asset.sys.id === prestation.fields.backgroundImage.sys.id)
      prestation.fields.backgroundImage = backgroundImageAsset
      return prestation
    })
    commit(SET_PRESTATIONS, prestations)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
