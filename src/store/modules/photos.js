import api from '@/services/api'
import { make } from 'vuex-pathify'

export const state = {
  photos: []
}

export const mutations = make.mutations(state)

export const actions = {
  async load ({ commit }) {
    const assets = await api.assets.list()
    console.debug('🚀 ~ file: photos.js ~ line 10 ~ load ~ assets', assets)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
