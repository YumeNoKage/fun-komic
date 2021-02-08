<template>
  <div class="home">
    <div class="py-16 bg-gray-600">
      <SliderHome :listSlider="rekomendedKomic" class="w-10/12 rounded-md" />
    </div>
    <div class="container m-auto mt-12 relative">
      <h2
        class="w-10/12 ml-auto text-8xl absolute left-36 top-8 font-extrabold text-gray-400"
      >
        Semua Komic
      </h2>
      <CardKomic :dataKomic="allKomic" class="pt-20" />
      <div class="flex w-full justify-center my-3" v-if="allKomic != null">
        <div
          @click="previousPage()"
          v-if="page > 1"
          class="px-3 py-1 mr-1 flex justify-center hover:bg-blue-300 transition-all duration-300 items-center rounded-full bg-gray-200 cursor-pointer"
        >
          <span class="px-2" aria-hidden="true">&laquo;</span>
          Previous
        </div>
        <div
          class="px-3 mx-2 py-1 flex justify-center bg-blue-300 transition-all duration-300 items-center rounded-full cursor-pointer"
        >
          {{ page }}
        </div>
        <div
          @click="nextPage()"
          class="px-3 py-1 ml-1 flex justify-center hover:bg-blue-300 transition-all duration-300 items-center rounded-full bg-gray-200 cursor-pointer"
        >
          Next
          <span class="px-2" aria-hidden="true">&raquo;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardKomic from "@/components/CardKomic/CardKomic";
import SliderHome from "@/components/HeaderHomePage/SliderHome";

export default {
  name: "Home",

  data() {
    return {
      allKomic: null,
      rekomendedKomic: null,
      page: 1,
    };
  },

  components: {
    CardKomic,
    SliderHome,
  },

  mounted() {
    this.getAllKomic(this.page);
    this.getRekomended();
  },

  methods: {
    getAllKomic: async function (data) {
      localStorage.page = data;
      const url = `https://mangamint.kaedenoki.net/api/manga/page/${data}`;

      try {
        this.$router.push({ query: { page: data } }).catch(() => {});
        const response = await axios.get(url);
        this.page = localStorage.page;
        this.allKomic = response.data;

        // console.log(this.allKomic);
      } catch (error) {
        if (error.response) {
          return error.response;
        }
      }
    },

    getRekomended: async function () {
      const url = `https://mangamint.kaedenoki.net/api/recommended`;

      try {
        const response = await axios.get(url);

        this.rekomendedKomic = response.data;
        console.log(this.rekomendedKomic);
      } catch (error) {
        if (error.response) {
          return error.response;
        }
      }
    },

    nextPage() {
      this.allKomic = null;
      this.page = parseInt(this.page) + 1;
      localStorage.page = this.page;
      this.getAllKomic(this.page);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      // this.$route.push({
      //   page: this.page,
      // });
    },

    previousPage() {
      this.allKomic = null;
      this.page = parseInt(this.page) - 1;
      localStorage.page = this.page;
      this.getAllKomic(this.page);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      // this.$route.push({
      //   page: this.page,
      // });
    },
  },
};
</script>
