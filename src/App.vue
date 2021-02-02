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
  <button class="up" @click="handleScroll">GO UP</button>
  <div class="separator" />
  <transition name="fade" mode="out-in">
    <b-pop-up v-if="showPopUp" :handleClick="handleClickClosePopup" />
  </transition>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import BHeader from "./components/atoms/BHeader";
import BPopUp from "./components/atoms/BPopUp.vue";
export default {
  name: "App",
  components: { BHeader, BPopUp },
  setup() {
    const route = useRoute();
    const showPopUp = ref(false);

    const handleClickClosePopup = () => {
      showPopUp.value = false;
    };

    const handleScroll = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    onMounted(() => {
      window.setTimeout(() => {
        showPopUp.value = true;
      }, 20000);
    });

    return { route, handleScroll, handleClickClosePopup, showPopUp };
  }
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 700ms;
}
</style>

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

.up {
  color: $lightBlue;
  font-size: 1em;
  font-weight: bold;
  background-color: $red;
  border: none;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  padding-top: 0.4em;
  outline: none;
  cursor: pointer;
  position: absolute;
  left: 50%;
  margin-top: 2em;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
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
