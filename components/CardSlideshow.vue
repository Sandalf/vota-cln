<template>
  <div class="card-slideshow">
    <div class="wrapper">
      <div ref="wrapperSlides" class="wrapper-slides">
        <a
          v-for="(slide, i) in slides"
          :id="`slide-${i}`"
          :key="`slide-${i}`"
          class="slide p-sm"
          :class="{ 'is-active': i === activeItem }"
          @click="activeItem = i"
          @focus="activeItem = i"
        >
          <slot name="slide" :slide="slide" :active="i === activeItem"></slot>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const maxMobileWidth = 768
const mobileSlideWidth = 250
const desktopSlideWidth = 363

export default {
  name: 'CardSlideshow',

  props: {
    slides: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      hasTooltip: false,
      activeItem: 0,
      pastActiveItem: 0,
      sliderValue: 0,
      minSlider: 1,
      maxSlider: 1,
      itemWidth: desktopSlideWidth,
    }
  },

  watch: {
    slides(newVal) {
      this.maxSlider = newVal.length
    },
  },

  mounted() {
    this.addScroll()
    this.setSlideWidth()
  },

  beforeDestroy() {
    this.removeScroll()
  },

  methods: {
    sliderChange(index) {
      this.pastActiveItem = this.activeItem
      this.activeItem = index - 1
      if (this.activeItem > this.pastActiveItem) {
        this.forceScrollRight()
      } else {
        this.forceScrollLeft()
      }
    },

    handleScroll(e) {
      // const horizontal = e.currentTarget.scrollLeft;
      // let newActive = parseInt(horizontal / (this.slideWidth / 2));
      // if (newActive + 1 > this.slides.length) {
      //   newActive = this.slides.length - 1;
      // }
      // this.pastActiveItem = this.activeItem;
      // this.activeItem = newActive;
    },

    forceScrollRight() {
      this.$refs.wrapperSlides.scrollLeft += this.slideWidth
    },

    forceScrollLeft() {
      this.$refs.wrapperSlides.scrollLeft -= this.slideWidth
    },

    addScroll() {
      this.$refs.wrapperSlides.addEventListener('scroll', this.handleScroll)
    },

    removeScroll() {
      this.$refs.wrapperSlides.removeEventListener('scroll', this.handleScroll)
    },

    setSlideWidth() {
      if (window.innerWidth <= maxMobileWidth) {
        this.slideWidth = mobileSlideWidth
      } else {
        this.slideWidth = desktopSlideWidth
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.card-slideshow {
  position: relative;
  height: 100% !important;
  width: 100% !important;
  overflow-y: hidden !important;
}

.wrapper {
  position: relative;
  height: 100% !important;
  overflow-y: auto !important;
  white-space: nowrap !important;
  overflow-x: auto !important;
  padding-bottom: 0.5rem !important;
  -webkit-overflow-scrolling: touch;
}

.wrapper-slides {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-top: 1rem;
  padding-bottom: 1rem;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE and Edge */
  -ms-overflow-style: none;
}

.slide {
  margin-right: 1em;
  width: 250px;
  max-width: 100%;
  transition: all 0.3s;
  scroll-snap-align: start;
}
</style>
