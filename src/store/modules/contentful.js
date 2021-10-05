import api from '@/services/api/index'
import { make } from 'vuex-pathify'

const SET_ASSETS = 'SET_ASSETS'
const SET_ENTRIES = 'SET_ENTRIES'

export const state = {
  entries: [],
  assets: []
}

export const mutations = make.mutations(state)

export const actions = {
  async loadData ({ commit }) {
    const entries = await api.entries.list()
    commit(SET_ENTRIES, entries.items)
    commit(SET_ASSETS, entries.includes.Asset)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
