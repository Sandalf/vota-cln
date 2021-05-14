<template>
  <div>
    <div>
      <div class="text-2xl text-gray-800">Distrito local</div>
      <div
        v-show="showSuccessMessage"
        class="block text-sm text-left text-blue-600 bg-blue-200 border border-blue-400 h-12 flex items-center p-4 rounded-sm"
        role="alert"
      >
        La sección {{ selectedSection }} pertenece al distrito {{ district }}
      </div>
      <div
        v-show="showWarningMessage"
        class="block text-sm text-left text-yellow-600 bg-yellow-200 border border-yellow-400 h-12 flex items-center p-4 rounded-sm"
        role="alert"
      >
        No se encontró un distrito para la sección {{ selectedSection }}
      </div>
      <select
        :value="district"
        class="w-full md:w-64 p-2 border border-gray-200 rouded mt-2"
        @change="handleChange"
      >
        <option :value="null">Todos los ditritos</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
      </select>
      <div v-if="!insertSection">
        <button
          class="text-sm mt-3 p-2 bg-gray-200 hover:bg-gray-300 border rounded border-b-4 border-gray-400 text-gray-700 hover:text-gray-800"
          role="button"
          @click="insertSection = true"
        >
          Ayúdame a encontrar mi distrito
        </button>
      </div>
    </div>
    <div v-if="insertSection" class="py-2">
      <input
        id="name"
        v-model="section"
        name="seccion"
        type="number"
        placeholder="Ingresa la sección de tu credencial"
        class="relative w-full md:w-72 border placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2"
        minlength="3"
        maxlength="4"
        @keypress.enter="findDistrict"
      />

      <button
        class="text-sm mt-3 p-2 bg-gray-200 hover:bg-gray-300 border rounded border-b-4 border-gray-400 text-gray-700 hover:text-gray-800"
        role="button"
        @click="findDistrict"
      >
        Buscar distrito
      </button>

      <img v-lazy-load class="mt-2" src="@/assets/img/ine-seccion.png" />
    </div>
  </div>
</template>

<script>
import sections from '@/assets/sections'

export default {
  name: 'FindDistrict',

  props: {
    district: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      insertSection: false,
      selectedSection: '',
      section: '',
      showSuccessMessage: false,
      showWarningMessage: false,
    }
  },

  methods: {
    handleChange(event) {
      this.$emit('update:district', event.target.value)
    },
    findDistrict() {
      const district = sections.data[this.section]
      this.selectedSection = this.section

      if (district) {
        this.$emit('update:district', district)
        this.showSuccessMessage = true
        setTimeout(() => (this.showSuccessMessage = false), 3000)
      } else {
        this.showWarningMessage = true
        setTimeout(() => (this.showWarningMessage = false), 3000)
      }
    },
  },
}
</script>
