<template>
  <div class="contact-form-failed">
    <h3 class="contact-form-failed__title">
      Désolé.. nous rencontrons un problème pour envoyer le formulaire.
    </h3>
    <p class="contact-form-failed__subtitle">
      Veuillez réessayer dans quelques heures ou contactez-moi sur les réseaux !
    </p>
    <SocialLinks
      color="black"
      class="contact-form-failed__socials"
      orientation="horizontal"
    />
    <BaseButton
      class="contact-form-failed__button"
      color="black"
      :icon-scale="1"
      text="FERMER"
      @click="onButtonClick"
    />
  </div>
</template>

<script>
import { dispatch } from 'vuex-pathify'

import SocialLinks from '@/components/SocialLinks'

export default {
  components: {
    SocialLinks
  },
  methods: {
    onButtonClick () {
      dispatch('ui/closeContactModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form-failed {
  display: grid;
  grid-template-rows: 1fr repeat(3, auto) 1fr;
  justify-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.contact-form-failed__title {
  letter-spacing: 0.04em;
  grid-row: 2;
}

.contact-form-failed__subtitle {
  grid-row: 3;
}

.contact-form-failed__socials {
  margin-top: 2rem;
  grid-row: 4;
}

.contact-form-failed__button {
  grid-row: 5;
  align-self: flex-end;
}
</style>
