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
      <candidates-slides-show
        class="py-4"
        title="Gubernaturas"
        :candidates="gobernors"
      />
      <candidates-slides-show
        class="py-4"
        title="Ayuntamiento"
        :candidates="presidencies"
      />
      <candidates-slides-show
        class="py-4"
        title="Diputaciones federales"
        :candidates="federalDeputies"
      />
      <find-district :district.sync="selectedDistrict" />
      <candidates-slides-show
        class="py-4"
        title="Diputaciones locales"
        :candidates="filteredLocalDeputies"
      />
    </div>
    <footer>
      <a href="https://github.com/Sandalf/vota-cln" class="group flex"
        ><div
          class="w-full sm:w-auto inline-flex items-center justify-center text-gray-900 group-hover:text-gray-500 font-medium leading-none bg-white rounded-lg shadow-sm group-hover:shadow-lg py-3 px-5 border border-transparent transform group-hover:-translate-y-0.5 transition-all duration-150"
        >
          <svg
            width="24"
            height="24"
            fill="currentColor"
            class="text-gray-600 mr-3 text-opacity-50 transform"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
            ></path></svg
          ><span>GitHub</span>
        </div></a
      >
    </footer>
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
        'https://res.cloudinary.com/dvegrfypv/image/upload/v1619911584/vota-cln/open-graph_x4quiy.png',
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
    filteredLocalDeputies() {
      if (this.selectedDistrict) {
        return this.localDeputies.filter(
          (el) => el.distrito.toString() === this.selectedDistrict
        )
      }
      return this.localDeputies
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
