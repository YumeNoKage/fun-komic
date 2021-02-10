<template>
  <div>
    <div class="container m-auto mt-12">
      <h2
        class="w-10/12 md:ml-auto text-8xl sm:text-7xl sm:m-auto font-extrabold text-gray-400"
      >
        Semua Manhua
      </h2>
      <CardKomic
        :dataKomic="allManhua"
        :display="false"
        class="md:pt-20 sm:pt-10 z-30"
      />
      <div class="flex w-full justify-center my-3" v-if="allManhua != null">
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

export default {
  name: "Manhua",

  data() {
    return {
      allManhua: null,
      page: 1,
    };
  },

  components: {
    CardKomic,
  },

  mounted() {
    this.getAllManhua(this.page);
  },

  methods: {
    getAllManhua: async function (data) {
      localStorage.page = data;
      const url = `https://mangamint.kaedenoki.net/api/manhua/${data}`;

      try {
        this.$router.push({ query: { page: data } }).catch(() => {});
        const response = await axios.get(url);
        this.page = localStorage.page;
        this.allManhua = response.data;

        // console.log(this.allKomic);
      } catch (error) {
        if (error.response) {
          return error.response;
        }
      }
    },

    nextPage() {
      this.allManhua = null;
      this.page = parseInt(this.page) + 1;
      localStorage.page = this.page;
      this.getAllManhua(this.page);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },

    previousPage() {
      this.allManhua = null;
      this.page = parseInt(this.page) - 1;
      localStorage.page = this.page;
      this.getAllManhua(this.page);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
