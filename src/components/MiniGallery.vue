<template>
  <div class="mini-gallery" :style="customProperties" />
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
      const photoUrl = this.photos[this.activePhotoIndex]
      return {
        '--background-image': `url(${photoUrl}-/resize/340x/)`
      }
    }
  },

  mounted () {
    this.transitionTimeout = setInterval(() => {
      if (this.activePhotoIndex === this.photos.length - 1) {
        this.activePhotoIndex = 0
      }
      this.activePhotoIndex += 1
    }, 2500)
  },

  beforeDestroy () {
    clearInterval(this.transitionInterval)
  }
}
</script>

<style lang="scss" scoped>
.mini-gallery {
  border-radius: 0.222rem;
  background: rgba(black, 0.1);
  background-image: var(--background-image);
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  width: 340px;
  transition: background-image 0.2s ease-in-out;
}
</style>
