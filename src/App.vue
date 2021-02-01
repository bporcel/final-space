<template>
  <b-header />
  <div class="separator" />
  <h1 class="nav">
    <router-link
      :class="route.fullPath === '/' && 'active'"
      :to="{ name: 'Characters' }"
    >
      Characters
    </router-link>
    <span class="bullet" />
    <router-link
      :class="route.fullPath === '/locations' && 'active'"
      :to="{ name: 'Locations' }"
    >
      Locations
    </router-link>
  </h1>
  <router-view />
  <div class="separator" />
</template>

<script>
import { useRoute } from "vue-router";
import BHeader from "./components/atoms/BHeader";
export default {
  name: "App",
  components: { BHeader },
  setup() {
    const route = useRoute();
    return { route };
  }
};
</script>

<style lang="scss">
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

.nav {
  text-align: center;
}

a {
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #5a9cdf;
  }

  &.active {
    color: #5a9cdf;
  }
}

.bullet::after {
  content: "\2022";
}

@media only screen and (max-width: 1400px) {
  body {
    padding: 1em 0;
  }
}
</style>
