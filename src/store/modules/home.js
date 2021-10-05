import { make } from 'vuex-pathify'

export const state = {}

export const getters = {
  data (state, getters, rootState) {
    const data = rootState.contentful.entries.find(item => item.sys.contentType.sys.id === 'home')

    if (data) {
      const asset = rootState.contentful.assets
        .find(asset => asset.sys.id === data.fields.startupBackgroundImage.sys.id)
      console.log('🚀 ~ file: home.js ~ line 12 ~ data ~ data', data)
      data.fields.startupBackgroundImage = asset
    }

    return data
  },

  prestations (state, getters, rootState, rootGetters) {
    const assets = rootState.contentful.assets
    return rootState.contentful.entries
      .filter(item => item.sys.contentType.sys.id === 'prestation')
      .map(prestation => {
        const backgroundImageAsset = assets
          .find(asset => asset.sys.id === prestation.fields.backgroundImage.sys.id)
        prestation.fields.backgroundImage = backgroundImageAsset
        return prestation
      })
  },

  sortedPrestations (state, getters) {
    return getters.data
      ? getters.data.fields.prestations
        .map(item => getters.prestations
          .find(prestation => prestation.sys.id === item.sys.id))
      : []
  }
}

export const mutations = make.mutations(state)

export const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
