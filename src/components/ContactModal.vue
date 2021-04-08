<template>
  <div class="contact-modal">
    <div class="contact-modal__container">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

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
</style>
