<template>
  <b-header />
  <div class="separator" />
  <router-view />
  <div class="separator" />
</template>

<script>
import BHeader from "./components/atoms/BHeader";
export default {
  name: "App",
  components: { BHeader }
};
</script>

<style>
body {
  margin: 0;
  padding: 0 5em;
  background-color: #191f25;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

.separator {
  margin-top: 10em;
}

/* 
#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
