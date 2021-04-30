<template>
  <div
    class="candidate-card relative flex flex-col justify-between items-start shadow-md pt-6 px-6 pb-6 rounded bg-white h-72 w-64 overflow-hidden"
  >
    <div>
      <div>
        <div class="diagonal" :class="[candidate.party]"></div>
        <img
          v-if="candidate.image"
          class="w-24 h-24 object-cover rounded-full z-10 absolute shadow"
          :src="candidate.image"
          alt=""
          srcset=""
        />
        <div
          v-else
          class="w-24 h-24 object-cover rounded-full bg-gray-100 z-10 absolute inline shadow"
        />
      </div>
    </div>
    <div>
      <div class="mt-12">
        <p class="break-words text-xl">{{ candidate.name }}</p>
      </div>
    </div>
    <div>
      <div v-show="candidate.coalition" class="mb-2">
        {{ candidate.coalition ? 'Coalición' : 'Partido' }}
      </div>
      <div class="flex">
        <img
          v-if="candidate.coalition && candidate.coalition !== 'mp'"
          :src="require(`@/assets/img/${candidate.coalition}.png`)"
          alt=""
          srcset=""
          class="w-8 mr-2"
        />
        <img
          :src="require(`@/assets/img/${candidate.party}.png`)"
          alt=""
          srcset=""
          class="w-8 mr-2"
        />
        <img
          v-if="candidate.party2"
          :src="require(`@/assets/img/${candidate.party2}.png`)"
          alt=""
          srcset=""
          class="w-8 mr-2"
        />
        <img
          v-if="candidate.party3"
          :src="require(`@/assets/img/${candidate.party3}.png`)"
          alt=""
          srcset=""
          class="w-8 mr-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CandidateCard',

  props: {
    candidate: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.candidate-card {
  .diagonal {
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to right bottom,
      rgb(198, 198, 198),
      rgb(139, 139, 139)
    );
    color: white;
    clip-path: polygon(0 0%, 100% 0, 100% 80%, 0 100%);
    height: 100px;
    width: 100%;
    z-index: 0;

    &.morena {
      background-image: linear-gradient(to right bottom, #a8362f, #c67d79);
    }

    &.pri {
      background-image: linear-gradient(to right bottom, #49a24d, #7ac27e);
    }

    &.mc {
      background-image: linear-gradient(to right bottom, #f1843b, #eca06e);
    }

    &.fxm {
      background-image: linear-gradient(to right bottom, #e186b0, #e09dbc);
    }

    &.pes {
      background-image: linear-gradient(to right bottom, #533778, #715299);
    }
  }
}
</style>
