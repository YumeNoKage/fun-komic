<template>
  <div></div>
</template>

<script>
export default {
  name: "Manga",

  data() {
    return {
      allManga: null,
    };
  },
  methods: {
    // getAllManga: async function (data) {
    //   localStorage.page = data;
    //   const url = `https://mangamint.kaedenoki.net/api/manga/page/${data}`;
    //   try {
    //     this.$router.push({ query: { page: data } }).catch(() => {});
    //     const response = await axios.get(url);
    //     this.page = localStorage.page;
    //     this.allKomic = response.data;
    //     // console.log(this.allKomic);
    //   } catch (error) {
    //     if (error.response) {
    //       return error.response;
    //     }
    //   }
    // },
  },
};
</script>
