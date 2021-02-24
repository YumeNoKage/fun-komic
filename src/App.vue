<template>
  <div id="app" class="bg-gray-300">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/BaseLayout/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>