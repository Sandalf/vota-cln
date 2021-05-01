<template>
  <div>
    <card-slideshow :title="title" :slides="candidates">
      <template #slide="{ active, slide }">
        <candidate-card :active="active" :candidate="slide" class="mr-3" />
      </template>
    </card-slideshow>
  </div>
</template>

<script>
export default {
  name: 'CandidatesSlidesShow',

  props: {
    title: {
      type: String,
      required: true,
      default: 'Candidatos',
    },
    candidates: {
      type: Array,
      required: true,
    },
  },
}
</script>
