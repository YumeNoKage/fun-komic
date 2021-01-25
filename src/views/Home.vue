<template>
  <div class="home container m-auto">
    <CardKomic :dataKomic="allKomic" />
  </div>
</template>

<script>
import axios from "axios";
import CardKomic from "@/components/CardKomic/CardKomic";

export default {
  name: "Home",

  data() {
    return {
      allKomic: null,
      page: 1
    };
  },

  components: {
    CardKomic
  },

  mounted() {
    this.getAllKomic(this.page);
  },
  methods: {
    getAllKomic: async function(data) {
      const url = `https://mangamint.kaedenoki.net/api/manga/page/${data}`;

      try {
        const response = await axios.get(url);
        this.allKomic = response.data;

        console.log(this.allKomic);
      } catch (error) {
        if (error.response) {
          return error.response;
        }
      }
    }
  }
};
</script>
