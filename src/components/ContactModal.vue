<template>
  <transition name="fade" appear>
    <div class="contact-modal" @click.self="close">
      <div class="contact-modal__container">
        <ContactForm />
      </div>
    </div>
  </transition>
</template>

<script>
import { dispatch } from 'vuex-pathify'

import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  },

  methods: {
    close () {
      dispatch('ui/closeContactModal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

$easing-1: cubic-bezier(.165, .84, .44, 1);
$easing-2: cubic-bezier(.09,.8,.24,.92);

.contact-modal {
  background: rgba(black, 0.9);

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
}

.contact-modal__container {
  background-color: white;
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: 0px 6px 40px -2px rgba(black, 0.2);
  cursor: auto;
  overflow: hidden;

  @media screen and (min-width: $medium) {
    border-radius: 0.7rem;
    width: 40rem;
    max-height: 90vh;
  }
}

.fade-enter-active {
  transition: background .4s $easing-1;

  .contact-modal__container {
    transition: all .3s $easing-1 .15s;
  }
}

.fade-leave-active {
  transition: background .3s $easing-1;

  .contact-modal__container {
    transition:
      opacity .2s $easing-1,
      transform .3s $easing-1;
  }
}

.fade-enter {
  background: transparent;

  .contact-modal__container {
    opacity: 0;
    transform: translateY(4rem) scale(0.96);
  }
}

.fade-leave-to {
  background: transparent;

  .contact-modal__container {
    opacity: 0;
    transform: translateY(4rem);
  }
}
</style>
