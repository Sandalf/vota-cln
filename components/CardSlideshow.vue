<template>
  <div>
    <div class="text-2xl text-gray-800 mb-3 flex items-center justify-between">
      {{ title }}
      <div class="hidden md:block">
        <button
          class="rounded px-4 py-2 bg-gray-100 hover:bg-gray-200 mr-2 focus:outline-none focus:ring focus:border-gray-300"
          @click="forceScrollLeft"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <button
          class="rounded px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring focus:border-gray-300"
          @click="forceScrollRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="slides.length" class="card-slideshow">
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
      <div class="md:hidden text-gray-400 text-center">
        Desliza para ver mas candidatos
      </div>
    </div>
    <div v-else class="flex items-center justify-center h-32">
      <div class="text-gray-400 text-center">Cargando...</div>
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
    title: {
      type: String,
      required: true,
      default: 'Candidatos',
    },
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
      if (this.$refs.wrapperSlides) {
        this.$refs.wrapperSlides.scrollLeft = 0
      }
    },
  },

  mounted() {
    this.setSlideWidth()
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

    forceScrollRight() {
      this.$refs.wrapperSlides.scrollLeft += this.slideWidth
    },

    forceScrollLeft() {
      this.$refs.wrapperSlides.scrollLeft -= this.slideWidth
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
  scroll-snap-type: x mandatory;
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
