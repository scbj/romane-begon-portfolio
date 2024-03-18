import Vue from 'vue'
import Vuex from 'vuex'
import VuexPathify from 'vuex-pathify'
import VuexPersist from 'vuex-persist'

import * as modules from '@/store/modules'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  storage: window.localStorage,
  reducer: (state) => ({
    contact: {
      isModalOpened: state.contact.isModalOpened
    }
  })
})

export default new Vuex.Store({
  modules,
  plugins: [
    vuexLocal.plugin,
    VuexPathify.plugin
  ]
})
