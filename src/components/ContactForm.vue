<template>
  <div class="contact-form">
    <transition name="slide-up">
      <ContactFormSuccess v-if="messageStatus === 'success'" />
      <ContactFormFailed v-else-if="messageStatus === 'failed'" />
      <FormulateForm
        v-else
        v-model="form"
        @submit="send"
      >
        <FormulateInput
          name="fullName"
          type="text"
          label="Votre prénom et nom"
          placeholder="Votre prénom et nom"
          validation="required"
          validation-name="Le prénom et nom"
        />
        <FormulateInput
          name="email"
          type="email"
          label="Votre email"
          placeholder="Votre email"
          validation="required"
          validation-name="L'email"
        />
        <FormulateInput
          name="phone"
          type="text"
          label="Votre téléphone"
          placeholder="Votre téléphone"
          :validation="[['bail'],['required'],['matches', /^(\+\d\d\s?\.?\d|\d\d)(\s?\.?\d\d){4}$/]]"
          :validation-messages="{ matches: 'Votre téléphone n\'est pas valide.' }"
          validation-name="Le numéro de téléphone"
        />
        <FormulateInput
          name="whereComesFrom"
          type="radio"
          :options="whereComesFromOptions"
          label="Comment m'avez-vous connue ?"
          placeholder="Sélectionner une option"
          validation="required"
          validation-name="Ce champ"
        />
        <FormulateInput
          name="messageSubjet"
          type="radio"
          :options="messageSubjetOptions"
          label="L'objet de votre message"
          validation="required"
          validation-name="L'objet du message"
        />
        <FormulateInput
          name="message"
          type="textarea"
          label="Décrivez-votre projet en quelques lignes"
          validation="bail|required|min:50|max:600"
          validation-name="Ce champ"
        />
        <FormulateInput
          class="contact-form__button"
          type="submit"
          label="Envoyer"
        />
      </FormulateForm>
    </transition>
  </div>
</template>

<script>
import ContactFormFailed from '@/components/ContactFormFailed'
import ContactFormSuccess from '@/components/ContactFormSuccess'

const MessageStatusSuccess = 'success'
const MessageStatusFailed = 'failed'
const MessageStatusWriting = 'writing'

export default {
  components: {
    ContactFormFailed,
    ContactFormSuccess
  },

  data () {
    return {
      form: {},
      messageStatus: MessageStatusWriting
    }
  },

  computed: {
    messageSubjetOptions () {
      return {
        wedding: 'Mariage',
        portrait: 'Portrait',
        professionnel: 'Professionel',
        other: 'Autre'
      }
    },

    whereComesFromOptions () {
      return {
        instagram: 'Instagram',
        pinterest: 'Pinterest',
        google: 'Google',
        wordOfMouth: 'Bouche à oreille',
        other: 'Autre'
      }
    }
  },

  methods: {
    async send (data) {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      this.messageStatus = response.status === 200 ? MessageStatusSuccess : MessageStatusFailed
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  padding: 3rem;
  height: 100%;
  overflow-y: auto;
  position: relative;
}
</style>
