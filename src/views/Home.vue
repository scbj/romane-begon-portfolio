<template>
  <DefaultLayout>
    <SectionStartup @ready="onStartupSectionReady" />
    <template v-if="isReady && prestations.length > 0">
      <template v-for="(prestation, index) in prestations">
        <SectionPrestation
          :key="index"
          :prestation="prestation.fields"
          :progress-number="index + 2"
        />
      </template>
      <SectionAbout />
      <SectionContact />
      <SectionClientArea />
    </template>
  </DefaultLayout>
</template>

<script>
import { get } from 'vuex-pathify'

import DefaultLayout from '@/layouts/DefaultLayout'

import SectionAbout from '@/components/SectionAbout'
import SectionClientArea from '@/components/SectionClientArea'
import SectionContact from '@/components/SectionContact'
import SectionPrestation from '@/components/SectionPrestation'
import SectionStartup from '@/components/SectionStartup'

export default {
  components: {
    SectionAbout,
    DefaultLayout,
    SectionClientArea,
    SectionContact,
    SectionPrestation,
    SectionStartup
  },

  beforeRouteLeave (to, from, next) {
    const scrollableContainer = document.querySelector('.parallax-container')
    this.$store.set('ui/homeScrollTop', scrollableContainer.scrollTop)
    next()
  },

  data () {
    return {
      isReady: false
      // hasHashChanged: false
    }
  },

  computed: {
    prestations: get('home/sortedPrestations')
  },

  // watch: {
  //   $route: {
  //     handler (route) {
  //       this.hasHashChanged = true
  //     }
  //   }
  // },

  methods: {
    onHashChange () {
      const hash = location.hash
      const hashSectionIndexMap = {
        '#prestations': 1,
        '#a-propos': 4,
        '': 0
      }
      if (hash in hashSectionIndexMap) {
        const index = hashSectionIndexMap[hash]
        const sections = document.querySelectorAll('main section')
        sections[index].scrollIntoView({ behavior: 'smooth' })
      }
    },

    onStartupSectionReady () {
      this.isReady = true
      this.$nextTick(() => {
        const scrollableContainer = document.querySelector('.parallax-container')
        scrollableContainer.scrollTop = this.$store.get('ui/homeScrollTop')
      })
    }
  }
}
</script>
