<template>
  <div class="weddings-infos">
    <section class="weddings-infos__hero">
      <h1>Mariages</h1>
      <div class="weddings-infos__hero-content">
        <div class="weddings-infos__hero-introduction">
          <blockquote>Vous n’avez qu’à vivre et la vie vous donnera des images.</blockquote>
          <p>Henri Cartier-Bresson</p>
          <p>
            Vous avez décidé de concrétiser votre amour en vous unissant et il est important pour vous
            d’immortaliser cette belle journée à travers des photographies chaleureuses. Je serai ravie
            de vous accompagner tout au long de cette folle aventure avec un style et un œil qui m’est
            propre. L’émotion, l’amour, la douceur et la sensualité sont cœur de mon travail.
          </p>
        </div>
        <div
          class="weddings-infos__hero-gallery"
          :style="{backgroundImage: heroGalleryPhoto}"
          @click="onHeroGalleryClick"
        />
      </div>
    </section>
    <section class="weddings-infos__flow">
      <template
        v-for="(step, index) in flowSteps"
      >
        <img
          v-if="step.image"
          :key="`a-${index}`"
          :src="step.image"
          class="weddings-infos__flow-step-illustration"
        >
        <div
          v-else
          :key="`a-${index}`"
          class="weddings-infos__flow-step-illustration weddings-infos__flow-step-illustration--placeholder"
        />
        <div :key="`b-${index}`" class="weddings-infos__flow-step-dot" />
        <div :key="`c-${index}`" class="weddings-infos__flow-step-content">
          <h3>{{ step.title }}</h3>
          <p>{{ step.content }}</p>
        </div>
      </template>
    </section>
    <section class="weddings-infos__plans">
      <h2>Mes autres offres</h2>
      <h3>Pour un reportage de mariages complets</h3>
      <div class="weddings-infos__plan-list">
        <div
          v-for="plan in plans"
          :key="plan.title"
          class="weddings-infos__plan-item"
        >
          <MiniGallery :photos="plan.photos" />
          <h4 class="weddings-infos__plan-item-title" v-text="plan.title" />
          <p class="weddings-infos__plan-item-description" v-text="plan.description" />
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
    flowSteps () {
      return [
        {
          title: '1. La rencontre',
          image: require('@/assets/images/rencontre.png'),
          content: 'Il est essentiel pour moi de venir à votre rencontrer et de prendre le temps de vous découvrir autour d’un verre. Un moment d’échanges important qui me permettra de connaitre vos attentes, de découvrir votre histoire mais aussi de vous présenter mon travail. Ce moment offert ne vous engage en rien,alors n’hésitez pas à me contacter pour organiser notre rencontre !'
        },
        {
          title: '2. Jour -1',
          image: require('@/assets/images/jour-1.png'),
          content: 'Il m’arrive de venir la veille pour découvrir les lieux, m’imprégner de l’ambiance et discuter avec vous des meilleurs spots où faire les photos de groupe et de couple. C’est aussi profiter du calme avant l’effervescence pour vous donner le meilleur de moi-même le jour J.'
        },
        {
          title: '3. Le jour J',
          image: require('@/assets/images/alliances.png'),
          content: 'Le grand jour est enfin arrivé. Le stress, l’impatience et l’émotion s’entremêlent dès le début de la journée, de quoi créer des instants que je ne manquerai pas de saisir. J’aime prendre le temps de photographier et mettre en scène les éléments qui font que cette journée est exceptionnelle comme la décoration, les alliances, les accessoires des mariés ou encore la papeterie.\n\nLes préparatifs des mariés est un instant chargé en émotions où je laisse parler votre spontanéité pour immortaliser toute la magie de ce moment. J’aime photographier la douceur d’un geste, l’émotion sur un visage, la joie dans un sourire et la complicité qui vous lie aux personnes qui vous entoure. Il peut arriver que je vous guide pour bénéficier de la beauté de la lumière ou d’un cadre en particulier tout en laissant libre court à vos émotions.\n\nLa cérémonie civile, laïque ou religieuse est un moment très émouvant où j’adore saisir toutes les subtilités de ce moment magique. Vos sourires, celui de vos proches, les échanges d’alliances, un enfant qui fait doucement glousser l’assemblée, l’explosion de bonheur à votre sortie… Tous ces petits détails qui marquent seront à jamais immortalisé.\n\nÇa y est, vous vous êtes enfin dit oui. Il est grand temps de vous détendre et de profiter de vos proches autour d’un verre pendant le cocktail. Un moment propice aux sourires, aux embrassades et aux éclats de rire que je ne manquerai pas de vous retransmettre grâce à mes clichés. Vos invités ne remarqueront même pas que j’ai saisi cet instant où leur spontanéité et leur naturel les rends si beau. C’est aussi le moment du traditionnel jeté de bouquet, mais qui aura l’honneur de l’attraper ?\n\nIl est venu le temps de la photo de groupe où amis d’enfance, parents ou cousins venus de loin se réunissent autour de vous. C’est un moment où l’effervescence et la joie d’être ensemble reprennent de plus belle. Créons tous ensemble une photo mémorable qu’elle soit sérieuse ou décalée pour graver à jamais ce jour spécial. Vos proches seront fiers d’afficher chez eux ce beau souvenir.\n\nLa séance photo en couple est une parenthèse où le temps s’arrête pour vous laisser souffler, vous retrouver et laisser parler votre tendresse. Un moment essentiel où je prendrai le temps de vous mettre à l’aise, de vous guider ou de vous laisser évoluer pour saisir ces petits instants d’émotions. J’affectionne particulièrement saisir la beauté de votre complicité à la lumière d’un coucher de soleil.\n\nLe repas et la soirée laissent place à la convivialité, aux discours poignants de vos témoins, aux embrassades et à la fête. Je serai encore là, au milieu de cette ébullition, pour immortaliser des instants précieux et des scènes marquantes comme l’arrivée du gâteau ou votre danse d’ouverture de bal durement travaillée. Ces moments magiques et plein de spontanéités ne n’échapperont pas à mon œil !'
        },
        {
          title: '4. Le lendemain',
          image: require('@/assets/images/lendemain.png'),
          content: 'La fête fût belle et c’est le moment de vous réunir pour un dernier instant de convivialité autour d’un repas ou d’un brunch. L’occasion idéale pour échanger vos impressions, relâcher, rire et raconter les meilleures anecdotes de cette journée passée. Un beau moment que j’aime partager avec vous tout en faisant quelques photos. Il est temps pour moi de rentrer en emportant tous ces jolis souvenirs que je vous restituerai une fois sublimés. Après quelques jours de tri, de traitements et de retouche, je vous donnerai accès à une belle galerie protégée par un mot de passe. Vous aurez la possibilité d’admirer toutes vos photos, de les télécharger en différents formats (HD, web), de donner l’accès à vos proches, de mettre en privé les photos que vous ne souhaitez pas partager mais aussi de faire des listes de photos favorites et prévoir des tirages.'
        }
      ]
    },

    heroGalleryPhoto () {
      return 'url(https://images.ctfassets.net/hx81nuoo3d0f/6vIZLTeT2ZD4f1Jy8UuTVd/5453e0b29ebe77746a5be6fb239c2544/site79.JPG?fm=webp&w=400)'
    },

    plans () {
      return [
        {
          title: 'EVJF',
          description: 'L’enterrement de vie de célibataire des jeunes mariés est une tradition idéale pour passer une journée ou un week-end hors du temps avec vos ami-e-s. Je peux vous accompagner ou m’insérer dans votre programme sous différents formats (reportage, photos de groupes fun ou posées) pour vous laisser des souvenirs qui respirent la bonne humeur.',
          photos: [
            'https://images.ctfassets.net/hx81nuoo3d0f/4zvLOgF14NA9wxJ5pgeUhJ/5744f06663118ea0c21c0a7187573fc2/site21.JPG',
            'https://images.ctfassets.net/hx81nuoo3d0f/4pI2s6mofuh1w2AdkHo0gi/88854a7d2acc16e5436650325daa9449/site42.jpg',
            'https://images.ctfassets.net/hx81nuoo3d0f/7C4jXogf68o1XH5Xb4hLMd/8ca714097d0ddc54c21ae14c2a9788be/site41.jpg',
            'https://images.ctfassets.net/hx81nuoo3d0f/4ZXAxlmYkeglU6710ZxOF/b82b29202dbc23d9c3d57ee35303ad5c/site23.JPG',
            'https://downloads.ctfassets.net/hx81nuoo3d0f/1rqLKnf0G3fz4GpiesbMDB/064a728c24c76937f2c994c6504f7612/site49.jpg',
            'https://images.ctfassets.net/hx81nuoo3d0f/6fmW7Vy3em1gs1YQP3KnaF/67a6f11192ad1b214edb6e91be49e55c/site32.JPG',
            'https://images.ctfassets.net/hx81nuoo3d0f/NsTCKdY5dL2rwLQkoNxdi/d7acc1db88f4779e57ed2ae899135925/site34.JPG'
          ]
        },
        {
          title: 'Essayages de la robe',
          description: 'Ce moment particulier que vous allez partager avec votre meilleure amie, votre mère ou encore votre tante est teinté de beaucoup d’émotions. Je peux vous suivre lors de cette journée spéciale où vous allez partir à la rencontre de la robe qui vous procurera de la joie et de l’assurance. Celle qui vous accompagnera avec élégance tout au long d’un des plus beaux jours de votre vie.',
          photos: [
            'https://images.ctfassets.net/hx81nuoo3d0f/2T6Z7Xk138XXeFmEGK4qlt/57a19a95b48908382bd216472e4b0c71/site78.jpg',
            'https://images.ctfassets.net/hx81nuoo3d0f/3IjERDD4X3oYf2M3JJ6nx5/b096da35a2be0c693f83ad5dafff3be5/site43.jpg',
            'https://images.ctfassets.net/hx81nuoo3d0f/4XM6VkIWLDCBrMSCeDFQg6/b45d6b91f309d661c6ceffe6c96ef4b1/site54.jpg',
            'https://images.ctfassets.net/hx81nuoo3d0f/4SgqZOvqQb9JeD6EdD4u2P/c60c9a1268dc54d13cc17237a344efca/site48.jpg'
          ]
        },
        {
          title: 'Séance d’engagements',
          description: 'Et si vous marquiez votre engagement au cours d’une belle séance photo dans un lieu qui vous ressemble et représente votre amour ? Que ce soit le lieu de votre rencontre ou un endroit que vous affectionnez particulièrement, je serai ravie de vous accompagner pour immortaliser votre complicité, et ceci avant ou après le grand jour. C’est aussi l’occasion d’apprendre à mieux vous connaître, de vous familiariser avec celle qui vous suivra tout au long de votre mariage mais aussi de vous donner assurance en votre photogénie. Oui, je vous garantis que vous allez vous aimer !',
          photos: [
            'https://images.ctfassets.net/hx81nuoo3d0f/eBYy8nuCZ7lQ1AggnDjRq/93d266c60be00e575554a860335c210f/site59.jpg',
            'https://images.ctfassets.net/hx81nuoo3d0f/2sGrESIrCA5UYUqvmLcz4k/dae4a703709cf2e8724b64a96decfe6b/site56.jpg',
            'https://images.ctfassets.net/hx81nuoo3d0f/5nOx4u5oLAMPzcz7Lqh6Po/0191de92bf7ce307eb36117e1c59e377/site65.jpg',
            'https://images.ctfassets.net/hx81nuoo3d0f/28QwMyrCEOT7L7qzeLTrwh/2d448190f433ed0dd16e43563c80fa33/site70.jpg',
            'https://images.ctfassets.net/hx81nuoo3d0f/2zficqcQQohjhdl7jnJmVM/e40ca74b582ce5e1725a8873ee63a079/site75.jpg'
          ]
        }
      ]
    }
  },

  methods: {
    onHeroGalleryClick () {
      this.$router.push('galerie')
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
  line-height: initial;

  margin: 20px 0 40px 0;
}

h2 {
  font-family: "Orpheus Pro", serif;
  font-weight: 700;
  font-size: 3.833rem;
  letter-spacing: initial;
  line-height: initial;
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

.weddings-infos {
  color: #444;
  margin: auto;
  padding: 0 2.222rem;
  max-width: 1240px;
}

.weddings-infos__hero-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.weddings-infos__hero-introduction {
  flex: 1;
  min-width: 20rem;
  margin: 1rem;
  margin-right: 2rem;;
}

.weddings-infos__hero-gallery {
  border-radius: 0.222rem;
  background: rgba(black, 0.1);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  flex: 0 1 400px;
  height: 400px;
  width: 400px;
  cursor: pointer;
}

.weddings-infos__flow {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 8rem;

  @media screen and (min-width: $large) {
    grid-template-columns: auto auto 1fr;
  }
}

.weddings-infos__flow-step-content {
  h3 {
    text-align: center;
  }

  p {
    white-space: break-spaces;
  }

  @media screen and (min-width: $large) {
    h3 {
      text-align: left;
      display: inline-block;
    }
  }
}

.weddings-infos__flow-step-illustration {
  $size: 12rem;
  justify-self: center;
  height: $size;
  width: $size;

  &--placeholder {
    background: rgba(black, 0.1);
  }
}

.weddings-infos__flow-step-dot {
  background: rgba(black, 0.1);
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  display: none;

  @media screen and (min-width: $large) {
    display: block;

    // TODO: Hiding since not integrate
    opacity: 0;
  }
}

.weddings-infos__plans {
  margin-top: 8rem;

  h3 {
    margin-bottom: 2rem;
  }
}

.weddings-infos__plan-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.weddings-infos__plan-item {
  margin: 1rem;
  flex: 0 1;
}

.weddings-infos__plan-item-title {
  margin-top: 1rem;
}
</style>
