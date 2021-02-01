<template>
  <div v-if="fetching">Loading...</div>
  <div v-else-if="error">An error occurred</div>
  <div class="grid" v-else>
    <b-card
      :key="key"
      v-for="(location, key) in locations"
      :title="location.name"
      :data="[
        {
          text: '',
          info: location.type
        },
        {
          text: location.inhabitants && 'Inhabitants: ',
          info: location.inhabitants
        }
      ]"
      :img="location.img_url"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from "vue";
import { getAllLocations } from "@/service/getLocations";
import BCard from "@/components/atoms/BCard";

export default {
  name: "Location",
  components: { BCard },
  setup() {
    const state = reactive({
      locations: [],
      fetching: false,
      error: false
    });

    onBeforeMount(() => {
      state.fetching = true;
      getAllLocations()
        .then(res => {
          state.locations = res;
        })
        .catch(() => {
          state.error = true;
        })
        .finally(() => {
          state.fetching = false;
        });
    });

    return { ...toRefs(state) };
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}

@media only screen and (max-width: 1400px) {
  .grid {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}
</style>
