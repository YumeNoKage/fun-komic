<template>
  <div class="container px-8 py-4 mx-auto">
    <div class="flex" v-if="detailKomic !== null">
      <div class="w-auto p-3">
        <div class="max-w-sm rounded overflow-hidden shadow-md">
          <div
            class="w-full h-64 bg-cover"
            :style="`background-image: url('${detailKomic.thumb}')`"
            :alt="detailKomic.title"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-4 text-gray-800">
              {{ detailKomic.title }}
            </div>
            <p class="text-gray-700 font-bold pb-2">Sinopsis:</p>
            <p class="text-gray-700 text-base overflow-auto h-36">
              {{ detailKomic.synopsis }}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              v-for="(genre, i) in detailKomic.genre_list"
              :key="i"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ genre.genre_name }}</span
            >
          </div>
        </div>
      </div>
      <div class="w-2/3 p-3">
        <h3 class="text-xl font-semibold text-gray-800">list chapter</h3>
        <div class="item-chapter overflow-auto px-3 mt-3">
          <router-link
            :to="`${chapter.chapter_endpoint}`"
            v-for="(chapter, i) in detailKomic.chapter"
            :key="i"
            class="bg-white my-2 w-full flex items-center p-2 rounded-xl shadow"
          >
            <div class="flex-grow px-3 py-1">
              <div class="font-semibold text-gray-700">
                {{ chapter.chapter_title }}
              </div>
            </div>
            <div class="p-2">
              <span
                class="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"
              ></span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "DetailKomic",

  data() {
    return {
      detailKomic: null,
    };
  },

  mounted() {
    this.getDetailKomic(this.$route.params.slug);
  },

  methods: {
    getDetailKomic: async function (data) {
      const url = `https://mangamint.kaedenoki.net/api/manga/detail/${data}/`;

      try {
        const response = await axios.get(url);

        if (response.data.title !== "") {
          this.detailKomic = response.data;
        } else {
          location.reload();
        }

        console.log(this.detailKomic);
      } catch (error) {
        if (error.response) {
          return error.response;
        }
      }
    },
  },
};
</script>

<style lang="scss">
.item-chapter {
  height: 75vh !important;
}
</style>