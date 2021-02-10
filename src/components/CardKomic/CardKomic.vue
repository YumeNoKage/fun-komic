<template>
  <div>
    <!-- for card popular -->
    <div v-if="display">
      <div
        class="grid md:gap-4 sm:gap-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 md:w-3/4 m-auto"
        v-if="dataKomic != null"
      >
        <router-link
          v-for="(komic, i) in dataKomic.manga_list"
          :key="i"
          :to="`detail/${komic.endpoint}`"
          class="m-4"
        >
          <div class="h-full z-auto relative">
            <div
              class="max-w-sm flex w-auto rounded shadow hover:shadow-lg duration-300 transition-all h-full"
            >
              <img
                class="w-5/12 rounded rounded-r-none"
                :src="`${komic.thumb}`"
                :alt="komic.title"
              />
              <div class="pr-2 w-full">
                <div class="px-3 py-2 pb-5">
                  <p
                    class="truncate ... w-40 text-lg text-bold text-gray-700 font-semibold mb-2"
                  >
                    {{ komic.title }}
                  </p>
                </div>
                <div>
                  <div class="flex px-3 pb-2">
                    <p class="text-sm text-gray-600 font-hairline">
                      {{ komic.upload_on }}
                    </p>
                    <small class="ml-auto text-gray-600">{{
                      komic.updated_on
                    }}</small>
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
            </div>
          </div>
        </router-link>
      </div>
      <div
        class="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 w-3/4 m-auto"
        v-else
      >
        <div class="w-full p-4" v-for="data in 3" :key="data">
          <div
            class="flex h-full flex-col relative bg-white w-full overflow-hidden card translate-3d-none-after rounded shadow-sm"
          >
            <div class="group text-primary-500">
              <div class="h-32 w-full">
                <span
                  class="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full"
                ></span>
              </div>
            </div>
            <div class="flex flex-col flex-grow">
              <div class="px-3 pt-4 text-left relative flex-grow">
                <h3 class="text-lg font-bold text-gray-darkest">
                  <span
                    class="skeleton-box rounded-sm h-5 w-1/6 inline-block"
                  ></span>
                  <span
                    class="skeleton-box rounded-sm h-5 w-1/2 ml-2 inline-block"
                  ></span>
                  <span
                    class="skeleton-box rounded-sm h-5 w-1/6 ml-2 inline-block"
                  ></span>
                  <span
                    class="skeleton-box rounded-sm h-5 w-2/4 inline-block"
                  ></span>
                </h3>
              </div>
              <div class="px-3 w-full flex pb-2">
                <span class="skeleton-box rounded-sm h-4 w-1/2"></span>
                <span class="skeleton-box rounded-sm h-4 w-1/6 ml-auto"></span>
              </div>
            </div>
            <div
              class="skeleton-box h-5 w-20 absolute top-0 left-0 px-2 rounded rounded-r-none rounded-b-none"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- for card all komic -->
    <div v-else>
      <div
        class="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 md:w-3/4 sm:w-full m-auto"
        v-if="dataKomic != null"
      >
        <router-link
          v-for="(komic, i) in dataKomic.manga_list"
          :key="i"
          :to="`detail/${komic.endpoint}`"
          class="m-4"
        >
          <div class="h-full relative">
            <div
              class="max-w-sm rounded overflow-hidden shadow hover:shadow-lg duration-300 transition-all h-full"
            >
              <img class="w-full" :src="`${komic.thumb}`" :alt="komic.title" />
              <div class="px-3 py-2 pb-5">
                <p
                  class="overflow-ellipsis overflow-hidden h-14 text-lg text-bold tracking-wide text-gray-700 font-semibold mb-2"
                >
                  {{ komic.title }}
                </p>
              </div>
              <div>
                <div class="flex px-3 pb-2">
                  <p class="text-sm text-gray-600 font-hairline">
                    {{ komic.chapter }}
                  </p>
                  <small class="ml-auto text-gray-600">{{
                    komic.updated_on
                  }}</small>
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
          </div>
        </router-link>
      </div>
      <div
        class="grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 w-3/4 m-auto"
        v-else
      >
        <div class="w-full p-4" v-for="data in 3" :key="data">
          <div
            class="flex h-full flex-col relative bg-white w-full overflow-hidden card translate-3d-none-after rounded shadow-sm"
          >
            <div class="group text-primary-500">
              <div class="h-32 w-full">
                <span
                  class="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full"
                ></span>
              </div>
            </div>
            <div class="flex flex-col flex-grow">
              <div class="px-3 pt-4 text-left relative flex-grow">
                <h3 class="text-lg font-bold text-gray-darkest">
                  <span
                    class="skeleton-box rounded-sm h-5 w-1/6 inline-block"
                  ></span>
                  <span
                    class="skeleton-box rounded-sm h-5 w-1/2 ml-2 inline-block"
                  ></span>
                  <span
                    class="skeleton-box rounded-sm h-5 w-1/6 ml-2 inline-block"
                  ></span>
                  <span
                    class="skeleton-box rounded-sm h-5 w-2/4 inline-block"
                  ></span>
                </h3>
              </div>
              <div class="px-3 w-full flex pb-2">
                <span class="skeleton-box rounded-sm h-4 w-1/2"></span>
                <span class="skeleton-box rounded-sm h-4 w-1/6 ml-auto"></span>
              </div>
            </div>
            <div
              class="skeleton-box h-5 w-20 absolute top-0 left-0 px-2 rounded rounded-r-none rounded-b-none"
            ></div>
          </div>
        </div>
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
    display: {
      type: Boolean,
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
<style lang="scss" src="@/assets/scss/components/Cardkomic/CardKomic.scss">
</style>