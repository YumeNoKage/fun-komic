<template>
  <div
    class="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 w-3/4 m-auto"
  >
    <a
      v-for="(komic, i) in dataKomic.manga_list"
      :key="i"
      :href="`${changeFont(komic.type)}/${komic.endpoint}`"
      class="m-4"
    >
      <div class="bg-white shadow rounded h-auto relative">
        <div>
          <div
            :style="`background-image: url('${komic.thumb}')`"
            class="bg-cover bg-gray-300 h-32 rounded rounded-b-none rounded-l-none rounded-t"
          ></div>
        </div>
        <div class="p-3">
          <p
            class="text-lg text-bold tracking-wide text-gray-700 font-semibold mb-2"
          >
            {{ komic.title }}
          </p>
          <div class="flex">
            <p class="text-sm text-gray-600 font-hairline">
              {{ komic.chapter }}
            </p>
            <small class="ml-auto text-gray-600">{{ komic.updated_on }}</small>
          </div>
        </div>
        <div
          v-if="komic.type === 'Manga'"
          class="bg-gray-200 text-gray-700 badge-komic absolute top-0 left-0 px-2 rounded rounded-r-none rounded-b-none"
        >
          {{ komic.type }}
        </div>
        <div
          v-if="komic.type === 'Manhua'"
          class="bg-red-200 text-red-700 badge-komic absolute top-0 left-0 px-2 rounded rounded-r-none rounded-b-none"
        >
          {{ komic.type }}
        </div>
        <div
          v-if="komic.type === 'Manhwa'"
          class="bg-yellow-200 text-yellow-800 badge-komic absolute top-0 left-0 px-2 rounded rounded-r-none rounded-b-none"
        >
          {{ komic.type }}
        </div>
      </div>
    </a>
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

  data() {
    return {
      bgColor: "",
    };
  },

  methods: {
    changeFont(value) {
      return value.toLowerCase();
    },
  },
};
</script>
