<template>
  <nav class="navbar sticky top-0">
    <div class="bg-gray-50">
      <div
        class="container mx-auto py-4 px-4 sm:px-4 md:px-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex">
          <router-link to="/" class="">
            <h2
              class="text-3xl leading-9 font-extrabold mb-4 lg:mb-0 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
            >
              <span class="text-blue-500">Fun Komic</span>
            </h2>
          </router-link>
          <div
            id="hamburger"
            class="md:hidden lg:hidden text-xl mt-1 ml-auto"
            @click="hamburger()"
          >
            Menu
          </div>
        </div>
        <div class="search w-80 mx-auto">
          <div class="shadow flex rounded">
            <input
              class="w-full rounded p-2 focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            <button
              class="bg-white w-auto focus:outline-noneflex justify-end rounded items-center text-blue-500 p-2 hover:text-blue-400"
            >
              <img
                width="25px"
                src="../../assets/icons/search.svg"
                alt="search"
              />
            </button>
          </div>
        </div>
        <div class="lg:mt-0 sm:block navbarMobile" id="mobileMenu">
          <div
            class="md:inline-flex md:ml-3 sm:inline-block hover:bg-blue-100 duration-300 rounded"
          >
            <a
              href="/genre"
              class="inline-flex items-center justify-center px-5 py-3 text-gray-700"
            >
              Genre
            </a>
          </div>
          <div
            class="md:ml-3 md:inline-flex sm:inline-block hover:bg-blue-100 duration-300 rounded"
          >
            <router-link
              to="/manga"
              class="inline-flex items-center justify-center px-5 py-3 text-gray-700"
            >
              Manga
            </router-link>
          </div>
          <div
            class="md:ml-3 md:inline-flex sm:inline-block hover:bg-blue-100 duration-300 rounded"
          >
            <a
              href="/manhua"
              class="inline-flex items-center justify-center px-5 py-3 text-gray-700"
            >
              Manhua
            </a>
          </div>
          <div
            class="md:ml-3 md:inline-flex sm:inline-block hover:bg-blue-100 duration-300 rounded"
          >
            <a
              href="/manhwa"
              class="inline-flex items-center justify-center px-5 py-3 text-gray-700"
            >
              Manhwa
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    hamburger() {
      const mobileMenu = document.getElementById("mobileMenu");
      mobileMenu.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss">
/* src="@/assets/scss/components/BaseLayout/Navbar.scss" */
.navbarMobile {
  @media screen and(max-width: 425px) {
    transform: translateY(-100px);
  }
}
.active {
  transform: translateY(0);
}
</style>
