<template>
  <div class="families-couples">
    <section class="families-couples__hero">
      <h1>Familles & Couples</h1>
      <div class="families-couples__hero-content">
        <div class="families-couples__hero-introduction">
          <blockquote>La photographie peut fixer l’éternité dans un instant.</blockquote>
          <p>Robert Bresson</p>
        </div>
      </div>
    </section>
    <section class="families-couples__content">
      <p>
        Vous avez envie de figer votre histoire pour l’éternité lors d’une séance en famille ou en
        couple ? Alors partons ensemble à l’aventure, à la mer ou dans un lieu qui vous ressemble,
        pour une séance photo rien qu’à vous.<br>
        N’hésitez pas à me contacter et à me raconter vos envies qu’elles soient folles ou
        raisonnables.<br>
        J’apprécie ces séances où <strong>bonne humeur</strong>, <strong>amour</strong> et <strong>complicité</strong> sont toujours au rendez-vous.
        Vous pouvez compter sur moi pour saisir ces instants de spontanéité auxquels j’ajouterai ma
        griffe singulière et chaleureuse. Ces photographies ce sera tout simplement vous et votre
        histoire que ce soit celle de votre couple, de l’attente ou de l’arrivée de <strong>bébé</strong> dans votre vie ou
        bien de vos renouvellements de vœux en intimité.
      </p>
      <p>
        Il y a tellement de belles occasions pour se retrouver et de rêves que j’aimerai réaliser avec
        vous comme photographier une naissance à la maison, monter au sommet d’une montagne
        pour une séance photo au grand air, vous suivre sur une plage ou dans un lieu chargé
        d’histoire de Toulouse.
      </p>
      <p>Alors, quand partons-nous ?</p>
    </section>
    <section class="families-couples__selection">
      <h2>Ma sélection du moment</h2>
      <div class="families-couples__selection-content">
        <div class="families-couples__selection-item">
          <img
            :src="require('@/assets/images/familles.png')"
            class="families-couples__selection-illustration"
          >
          <MiniGallery :photos="famillesPhotos" />
        </div>
        <div class="families-couples__selection-item">
          <img
            :src="require('@/assets/images/couples.png')"
            class="families-couples__selection-illustration"
          >
          <MiniGallery :photos="couplesPhotos" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MiniGallery from '@/components/MiniGallery.vue'

export default {
  components: {
    MiniGallery
  },

  computed: {
    famillesPhotos () {
      return ['https://ucarecdn.com/ae72cae4-bd29-4a7d-a3bd-40edad009014/',
        'https://ucarecdn.com/d5c0211b-ca86-424e-87ab-80d7b48526d5/',
        'https://ucarecdn.com/a0242e4d-0060-4494-8ea9-009f05e2d782/',
        'https://ucarecdn.com/83c865a1-6ad7-41df-96a4-bd60d5db4e8c/']
    },

    couplesPhotos () {
      return ['https://ucarecdn.com/7bd7fb65-2f8c-4168-9a36-7f508c25d099/',
        'https://ucarecdn.com/173d0460-8da5-4c7c-a786-2d454e2913df/',
        'https://ucarecdn.com/0a8b3c92-377a-447c-b0cf-9c5c9e22bb60/',
        'https://ucarecdn.com/58ac5f4e-a51b-4a02-9622-ad8683c93e22/']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

h1 {
  font-family: "Orpheus Pro", serif;
  font-weight: 400;
  font-size: 6.056rem;
  letter-spacing: initial;
  line-height: 1.3;

  margin: 20px 0 40px 0;
}

h2 {
  font-family: "Orpheus Pro", serif;
  font-weight: 700;
  font-size: 3.833rem;
  letter-spacing: initial;
  line-height: 1.3;
  text-align: center;

  margin: 60px 0 20px 0;
}

h3 {
  font-family: "Orpheus Pro", serif;
  font-weight: 700;
  font-size: 2.278rem;
  letter-spacing: initial;
  line-height: initial;
  text-align: center;
  position: relative;

  &:before {
    content: '';
    background: #d4a984;
    height: 3px;
    width: 16px;
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
  }
}

p {
  font-family: 'TT Commons', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.8125em;
  margin-top: initial;
  margin: 20px 0 40px 0;
  max-width: initial;

  @media screen and (min-width: $large) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: $extraLarge) {
    font-size: 1.1rem;
  }

  strong {
    font-weight: 600;
    color: #d4a984;
  }
}

blockquote {
  font-family: 'Garamond Premier Pro Display';
  font-style: italic;
  font-size: 1.667rem;
  letter-spacing: 0.07em;
  text-align: center;
  margin: 0;

  &:before {
    content: '« '
  }

  &:after {
    content: ' »'
  }

  &~p:first-of-type {
    text-align: center;
    font-weight: 400;
    margin-top: 1em;
  }
}

.families-couples {
  color: #444;
  margin: auto;
  padding: 0 2.222rem;
  max-width: 1240px;
}

.families-couples__hero-content {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.families-couples__hero-introduction {
  flex: 1;
  min-width: 20rem;
  margin: 1rem;
  margin-right: 2rem;;
}

.families-couples__selection {
  margin-bottom: 6rem;
}

.families-couples__selection-content {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}

.families-couples__selection-item {
  display: flex;
  flex-direction: column;
  flex-wrap: none;
  align-items: center;
  gap: 1rem;
}

.families-couples__selection-illustration {
  $size: 12rem;
  justify-self: center;
  height: $size;
  width: $size;
  object-fit: contain;

  &--placeholder {
    background: rgba(black, 0.1);
  }
}

.families-couples__content {
  margin: auto;
  max-width: 47rem;
}
</style>
