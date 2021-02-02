<template>
  <div class="bg-gray-700">
    <div class="container m-auto" v-if="listKomic !== null">
      <div v-for="chapter in listKomic.chapter_image"
          :key="chapter.image_number">
        <img
          class="block m-auto"
          :src="chapter.chapter_image_link"
          :alt="listKomic.chapter_endpoint"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "BacaKomic",

  data() {
    return {
      listKomic: null,
    };
  },

  mounted() {
    this.getListKomic(this.$route.params);
  },

  methods: {
    getListKomic: async function (data) {
      const url = `https://mangamint.kaedenoki.net/api/chapter/${data.chapter}/`;
      console.log(url);
      try {
        const response = await axios.get(url);

        if (response.data.chapter_image) {
          this.listKomic = response.data;
        } else {
          location.reload();
        }

        console.log(this.listKomic);
      } catch (error) {
        if (error.response) {
          return error.response;
        }
      }
    },
  },
};
</script>