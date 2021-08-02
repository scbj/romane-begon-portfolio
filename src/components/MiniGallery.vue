<template>
  <div
    class="mini-gallery"
    :style="customProperties"
    @click="onClick"
  >
    <div class="mini-gallery__image" />
    <div class="mini-gallery__overlay">
      <span>Voir les photos</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photos: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      activePhotoIndex: 0,
      transitionInterval: null
    }
  },

  computed: {
    customProperties () {
      const photoUrl = this.photos[0]
      return {
        '--background-image': `url(${photoUrl}-/resize/340x/)`
      }
    }
  },

  methods: {
    onClick () {
      this.$store.dispatch('viewer/open', {
        activePhoto: 0,
        photos: this.photos
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mini-gallery {
  border-radius: 0.222rem;
  background: rgba(black, 0.1);
  position: relative;
  height: 200px;
  width: 340px;
  overflow: hidden;

  cursor: pointer;

  &:hover {
    .mini-gallery__overlay {
      opacity: 1;
    }
  }
}

.mini-gallery__image {
  background-image: var(--background-image);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.mini-gallery__overlay {
  color: white;
  background: rgba(black, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;

  span {
    font-family: "TT Commons", sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.8125em;
  }
}
</style>
