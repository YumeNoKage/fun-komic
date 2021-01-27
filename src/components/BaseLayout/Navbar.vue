<template>
  <nav class="navbar sticky top-0">
    <div class="bg-gray-50">
      <div
        class="container mx-auto py-4 px-4 sm:px-4 md:py-2 md:px-8 md:flex md:items-center md:justify-between"
        id="navContainer"
      >
        <div class="flex">
          <router-link to="/" @click="nonActive()" class="">
            <h2
              :class="`${
                iconClose === true ? 'mb-4' : 'mb-0'
              } text-3xl mb-0 leading-9 font-extrabold lg:mb-0 tracking-tight text-gray-900 sm:text-4xl sm:leading-10`"
            >
              <span class="text-blue-500 logo-brand">Fun Komic</span>
            </h2>
          </router-link>
          <div
            id="hamburger"
            class="md:hidden lg:hidden text-xl mt-1 ml-auto"
            @click="hamburger()"
          >
            <span v-if="!iconClose"> Menu </span>
            <span v-else>
              <img
                width="20px"
                class="mr-3"
                src="@/assets/icons/close.svg"
                alt="close"
              />
            </span>
          </div>
        </div>
        <div class="lg:mt-0 w-auto sm:block navbarMobile" id="mobileMenu">
          <div class="sm:block md:block lg:flex">
            <div class="search w-80 mx-auto my-auto">
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
            <!-- <div
              @click="activeItemNav('semua')"
              :class="`${
                activeNav === 'semua' ? 'bg-blue-500 ' : 'hover:bg-blue-100'
              } md:mt-2 md:inline-flex md:ml-3 sm:inline-block  duration-300 rounded`"
            >
              <router-link
                to="/"
                :class="`${
                  activeNav === 'semua' ? 'text-white' : 'text-gray-700'
                } inline-flex items-center justify-center px-5 py-3 `"
              >
                Semua
              </router-link>
            </div> -->
            <div
              @click="activeItemNav('genre')"
              :class="`${
                activeNav === 'genre' ? 'bg-blue-500 ' : 'hover:bg-blue-100'
              } md:mt-2 md:inline-flex md:ml-3 sm:inline-block  duration-300 rounded`"
            >
              <router-link
                to="/genre"
                :class="`${
                  activeNav === 'genre' ? 'text-white' : 'text-gray-700'
                } inline-flex items-center justify-center px-5 py-3 `"
              >
                Genre
              </router-link>
            </div>
            <div
              @click="activeItemNav('manga')"
              :class="`${
                activeNav === 'manga' ? 'bg-blue-500' : 'hover:bg-blue-100'
              } md:mt-2 md:ml-3 md:inline-flex sm:inline-block  duration-300 rounded`"
            >
              <router-link
                to="/manga"
                :class="`${
                  activeNav === 'manga' ? 'text-white' : 'text-gray-700'
                } inline-flex items-center justify-center px-5 py-3 `"
              >
                Manga
              </router-link>
            </div>
            <div
              @click="activeItemNav('manhua')"
              :class="`${
                activeNav === 'manhua' ? 'bg-blue-500' : 'hover:bg-blue-100'
              } md:mt-2 md:ml-3 md:inline-flex sm:inline-block duration-300 rounded`"
            >
              <router-link
                to="/manhua"
                :class="`${
                  activeNav === 'manhua' ? 'text-white' : 'text-gray-700'
                } inline-flex items-center justify-center px-5 py-3 `"
              >
                Manhua
              </router-link>
            </div>
            <div
              @click="activeItemNav('manhwa')"
              :class="`${
                activeNav === 'manhwa' ? 'bg-blue-500' : 'hover:bg-blue-100'
              } md:mt-2 md:ml-3 md:inline-flex sm:inline-block  duration-300 rounded`"
            >
              <router-link
                to="/manhwa"
                :class="`${
                  activeNav === 'manhwa' ? 'text-white' : 'text-gray-700'
                } inline-flex items-center justify-center px-5 py-3 `"
              >
                Manhwa
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import Close from "@/assets/icons/close.svg";

export default {
  name: "Navbar",

  data() {
    return {
      iconClose: false,
      activeNav: "semua",
    };
  },

  mounted() {
    this.activeItemNav();
  },

  methods: {
    hamburger() {
      const mobileMenu = document.getElementById("mobileMenu");
      const container = document.getElementById("navContainer");
      container.classList.toggle("showHeight");
      mobileMenu.classList.toggle("show");

      this.iconClose = !this.iconClose;
    },

    activeItemNav(value) {
      localStorage.activeNav = "semua";
      localStorage.activeNav = value;
      this.activeNav = localStorage.activeNav;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  // height: 65px;
  transition: all 300ms;
  @media screen and(max-width: 767px) {
    height: 65px;
    transition: all 300ms;
  }
  div {
    z-index: 50 !important;
  }
}
.container.showHeight {
  transition: all 300ms;
  @media screen and(max-width: 767px) {
    height: 170px;
    transition: all 300ms;
  }
  @media screen and(max-width: 639px) {
    transition: all 300ms;
    height: 310px;
  }
}
.navbarMobile {
  z-index: 1 !important;
  @media screen and(max-width: 767px) {
    transform: translatey(-130px);
    overflow: hidden;
    transition: all 300ms;
    overflow: hidden;
  }
  @media screen and(max-width: 639px) {
    transform: translatey(-280px);
  }
}
.navbarMobile.show {
  transition: all 300ms;
  transform: translatey(0px);

  @media screen and(max-width: 767px) {
    transition: all 300ms;
  }
}
</style>

<style lang="scss" src="@/assets/scss/components/BaseLayout/Navbar.scss"></style>
