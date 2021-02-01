<template>
  <h1>Characters</h1>
  <p v-if="fetching">Loading...</p>
  <p v-else-if="error">An error occurred</p>
  <div class="grid" v-else>
    <b-card
      :key="key"
      v-for="(character, key) in characters"
      :title="character.name"
      :data="[
        {
          text: 'Status: ',
          info: character.status
        },
        {
          text: 'Species: ',
          info: character.species
        },
        {
          text: 'Origin: ',
          info: character.origin
        },
        {
          text: 'Gender: ',
          info: character.gender
        },
        {
          text: 'Hair color: ',
          info: character.status
        }
      ]"
      :img="character.img_url"
    />
  </div>
</template>

<script>
import { onBeforeMount, reactive, toRefs } from "vue";
import { getAllCharacters } from "@/service/getCharacters";
import BCard from "@/components/atoms/BCard";
export default {
  name: "Characters",
  components: { BCard },
  setup() {
    const state = reactive({
      characters: [],
      fetching: false,
      error: false
    });
    onBeforeMount(() => {
      state.fetching = true;
      getAllCharacters()
        .then(res => {
          state.characters = res;
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}

@media only screen and (max-width: 1400px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
