<template>
  <div class="grid gap-4 lg:grid-cols-4 sm:grid-cols-1 w-3/4 m-auto">
    <div
      v-for="(komic, i) in dataKomic.manga_list"
      :key="i"
      class="bg-white shadow p-3 rounded lg:w-64 m-4"
    >
      <div>
        <div
          :style="`background-image: url('${komic.thumb}')`"
          class="bg-cover bg-center bg-gray-300 h-32 rounded"
        ></div>
      </div>
      <div class="mt-6">
        <p class="text-lg text-bold tracking-wide text-gray-600 mb-2">
          {{ komic.title }}
        </p>
        <p class="text-sm text-gray-600 font-hairline">Chapter 136</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardKomic",
  props: {
    dataKomic: {
      type: Object,
    },
  },

  methods: {
    data() {
      console.log(this.dataKomic);
    },
  },
};
</script>