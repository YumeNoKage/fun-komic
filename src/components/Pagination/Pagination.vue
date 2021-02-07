<template>
  <div class="flex w-full justify-center my-3">
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
</template>
<script>
export default {
  name: "Pagination",
  props: {
    previousPage: {
      type: Function,
    },
    page: {
      type: String,
    },
    nextPage: {
      type: Function,
    },
  },
};
</script>
