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
      return 'url(https://ucarecdn.com/9d080d65-35d1-4598-b308-855bf3da0ff4/-/resize/400x/)'
    },

    plans () {
      return [
        {
          title: 'EVJF',
          description: 'L’enterrement de vie de célibataire des jeunes mariés est une tradition idéale pour passer une journée ou un week-end hors du temps avec vos ami-e-s. Je peux vous accompagner ou m’insérer dans votre programme sous différents formats (reportage, photos de groupes fun ou posées) pour vous laisser des souvenirs qui respirent la bonne humeur.',
          photos: [
            'https://ucarecdn.com/3198a70c-f01c-40cc-8b1a-892084fda058/',
            'https://ucarecdn.com/efbcb6ec-745c-4dd6-baab-df043aaa8497/',
            'https://ucarecdn.com/18332442-3e47-4bce-be19-fc3be90b1d8b/',
            'https://ucarecdn.com/9d080d65-35d1-4598-b308-855bf3da0ff4/',
            'https://ucarecdn.com/9b47703b-8b24-4d7c-ad17-6696c13634e4/',
            'https://ucarecdn.com/ba08a1e3-40ce-4b88-9c74-243d958e9af3/',
            'https://ucarecdn.com/a59f8117-f1dc-4dd3-b4a2-3377b429205f/',
            'https://ucarecdn.com/5a8c54b9-d68b-4961-8960-3ab985fd37a2/'
          ]
        },
        {
          title: 'Essayages de la robe',
          description: 'Ce moment particulier que vous allez partager avec votre meilleure amie, votre mère ou encore votre tante est teinté de beaucoup d’émotions. Je peux vous suivre lors de cette journée spéciale où vous allez partir à la rencontre de la robe qui vous procurera de la joie et de l’assurance. Celle qui vous accompagnera avec élégance tout au long d’un des plus beaux jours de votre vie.',
          photos: [
            'https://ucarecdn.com/6abe4540-f818-4e83-972f-d38308624587/',
            'https://ucarecdn.com/ace2765a-74cc-4701-81e6-2795b9f68c24/',
            'https://ucarecdn.com/1f604433-f219-418c-8b63-3414852856a6/',
            'https://ucarecdn.com/5113f2d1-0ed1-47cf-b666-65a9addeeb5d/',
            'https://ucarecdn.com/ae72cae4-bd29-4a7d-a3bd-40edad009014/',
            'https://ucarecdn.com/d5c0211b-ca86-424e-87ab-80d7b48526d5/',
            'https://ucarecdn.com/a0242e4d-0060-4494-8ea9-009f05e2d782/',
            'https://ucarecdn.com/83c865a1-6ad7-41df-96a4-bd60d5db4e8c/'
          ]
        },
        {
          title: 'Séance d’engagements',
          description: 'Et si vous marquiez votre engagement au cours d’une belle séance photo dans un lieu qui vous ressemble et représente votre amour ? Que ce soit le lieu de votre rencontre ou un endroit que vous affectionnez particulièrement, je serai ravie de vous accompagner pour immortaliser votre complicité, et ceci avant ou après le grand jour. C’est aussi l’occasion d’apprendre à mieux vous connaître, de vous familiariser avec celle qui vous suivra tout au long de votre mariage mais aussi de vous donner assurance en votre photogénie. Oui, je vous garantis que vous allez vous aimer !',
          photos: [
            'https://ucarecdn.com/c7c6ddc0-0695-471a-992d-ed9e80d867a4/',
            'https://ucarecdn.com/42c0161a-3abf-40a1-8fa5-4b7131713daa/',
            'https://ucarecdn.com/d1c29975-ff8f-4d68-8dc7-99ffdb1d0371/',
            'https://ucarecdn.com/b06fb88c-0256-4cf7-8acc-6c90d0b8b9d7/',
            'https://ucarecdn.com/7bd7fb65-2f8c-4168-9a36-7f508c25d099/',
            'https://ucarecdn.com/173d0460-8da5-4c7c-a786-2d454e2913df/',
            'https://ucarecdn.com/0a8b3c92-377a-447c-b0cf-9c5c9e22bb60/',
            'https://ucarecdn.com/58ac5f4e-a51b-4a02-9622-ad8683c93e22/',
            'https://ucarecdn.com/a62b96eb-46ab-49cd-9e26-5ba5b80a3562/',
            'https://ucarecdn.com/4de6bcc3-013a-447c-ac26-dcee4871df81/',
            'https://ucarecdn.com/de6f9e16-ba8f-408b-9426-a02777c509da/'
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
