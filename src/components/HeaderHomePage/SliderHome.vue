<template>
  <div class="py-4 container m-auto">
    <splide :options="options" v-if="listSlider !== null" ref="primary">
      <splide-slide
        v-for="komic in listSlider.manga_list"
        :key="komic.title"
        class="hover:cursor-pointer"
      >
        <router-link :to="`detail/${komic.endpoint}`" class="relative block">
          <img class="rounded-md" :src="komic.thumb" />
          <h1
            class="absolute w-5/12 h-full bg-opacity-60 px-3 pt-2 pb-1 mb-0 bg-gray-600 text-white rounded-r-none rounded-md text-3xl top-0 left-0"
          >
            {{ komic.title }}
          </h1>
        </router-link>
      </splide-slide>
    </splide>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

export default {
  name: "SliderHome",

  props: {
    listSlider: {
      type: Object,
    },
  },

  data() {
    return {
      options: {
        rewind: true,
        autoWidth: true,
        autoplay: true,
        loop: true,
        gap: "1rem",
        padding: {
          right: "5rem",
          left: "5rem",
        },
        perPage: 3,
        focus: "center",
      },
    };
  },

  components: {
    Splide,
    SplideSlide,
  },
};
</script>
<style lang="scss" src="@/assets/scss/components/SliderHome/SliderHome.scss">
</style>