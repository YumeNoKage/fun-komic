<template>
  <div id="app">
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