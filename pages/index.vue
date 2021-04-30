<template>
  <div>
    <div class="bg-green-900 text-white">
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-semibold">Votaciones CLN 2021</h1>
        <p>
          Conoce los candidatos por los que podrás votar en estas proximas
          elecciones
        </p>
      </div>
    </div>
    <div class="container mx-auto p-4">
      <div>
        <div class="text-2xl text-gray-800">Distrito</div>
        <select
          v-model="selectedDistrict"
          class="w-full md:w-64 p-2 border rouded mt-2"
        >
          <option disabled :value="null">Selecciona tu distrito</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
        </select>
        <div class="mt-3">Ayudame a encontrar mi distrito</div>
      </div>
      <div class="py-4">
        <div class="text-xl text-gray-800 mb-3">Gubernaturas</div>
        <card-slideshow :slides="gobernors">
          <template #slide="{ active, slide }">
            <candidate-card :active="active" :candidate="slide" class="mr-3" />
          </template>
        </card-slideshow>
      </div>
      <div class="py-4">
        <div class="text-xl text-gray-800 mb-3">Diputaciones federales</div>
        <card-slideshow :slides="federalDeputies">
          <template #slide="{ active, slide }">
            <candidate-card :active="active" :candidate="slide" class="mr-3" />
          </template>
        </card-slideshow>
      </div>
      <div class="py-4">
        <div class="text-xl text-gray-800 mb-3">Diputaciones locales</div>
        <card-slideshow :slides="localDeputies">
          <template #slide="{ active, slide }">
            <candidate-card :active="active" :candidate="slide" class="mr-3" />
          </template>
        </card-slideshow>
      </div>
      <div class="py-4">
        <div class="text-xl text-gray-800 mb-3">Ayuntamiento</div>
        <card-slideshow :slides="presidencies">
          <template #slide="{ active, slide }">
            <candidate-card :active="active" :candidate="slide" class="mr-3" />
          </template>
        </card-slideshow>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDistrict: null,
      candidates: [],
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
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;500&display=swap');

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
body {
  font-family: 'Antonio', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f3f3f3;
  min-height: 100vh;
}
</style>
