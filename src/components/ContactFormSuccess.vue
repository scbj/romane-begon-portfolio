<template>
  <div class="contact-form-success">
    <h3 class="contact-form-success__title">
      Votre message a été envoyé !
    </h3>
    <p class="contact-form-success__subtitle">
      Merci beaucoup ! Je vous répondrai dans quelques jours. 👍
    </p>
    <BaseButton
      class="contact-form-success__button"
      color="black"
      :icon-scale="1"
      text="FERMER"
      @click="onButtonClick"
    />
  </div>
</template>

<script>
import { dispatch } from 'vuex-pathify'

export default {
  methods: {
    onButtonClick () {
      dispatch('contact/closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form-success {
  display: grid;
  grid-template-rows: 1fr repeat(2, auto) 1fr;
  justify-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.contact-form-success__title {
  letter-spacing: 0.04em;
  grid-row: 2;
}

.contact-form-success__subtitle {
  grid-row: 3;
}

.contact-form-success__button {
  grid-row: 4;
  align-self: flex-end;
}
</style>
