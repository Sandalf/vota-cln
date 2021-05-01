<template>
  <div>
    <div class="bg-green-900 text-white">
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-semibold">Votaciones CLN 2021</h1>
        <p>
          Encuentra a los candidatos por los que podrás votar en estas proximas
          elecciones
        </p>
      </div>
    </div>
    <div class="container mx-auto p-4">
      <find-district :district.sync="selectedDistrict" />
      <candidates-slides-show
        class="py-4"
        title="Gubernaturas"
        :candidates="gobernors"
      />
      <candidates-slides-show
        class="py-4"
        title="Diputaciones federales"
        :candidates="federalDeputies"
      />
      <candidates-slides-show
        class="py-4"
        title="Diputaciones locales"
        :candidates="localDeputies"
      />
      <candidates-slides-show
        class="py-4"
        title="Ayuntamiento"
        :candidates="presidencies"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDistrict: null,
      candidates: [],
      title: 'Vota CLN',
      description:
        'Encuentra a los candidatos por los que podrás votar en estas proximas elecciones',
      image:
        'https://res.cloudinary.com/dvegrfypv/image/upload/v1619910062/vota-cln/logo_fpvmvy.png',
    }
  },

  head() {
    return {
      title: this.title,
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title,
        },
      ],
    }
  },

  computed: {
    gobernors() {
      return this.candidates
        .filter((el) => el.type === 'gobernador')
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    },
    presidencies() {
      return this.candidates
        .filter((el) => el.type === 'presidencia')
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    },
    localDeputies() {
      return this.candidates
        .filter((el) => el.type === 'diputacion-local')
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .sort((a, b) =>
          a.distrito > b.distrito ? 1 : b.distrito > a.distrito ? -1 : 0
        )
    },
    federalDeputies() {
      return this.candidates
        .filter((el) => el.type === 'diputacion-federal')
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    },
  },

  created() {
    this.getCandidates()
  },

  methods: {
    async getCandidates() {
      const response = await fetch(
        'https://6085edb4d14a8700175787a9.mockapi.io/votacln/candidatos-2021'
      )
      this.candidates = await response.json()
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap');

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
body {
  font-family: 'Roboto', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  background-color: #f3f3f3;
  min-height: 100vh;
}
</style>
