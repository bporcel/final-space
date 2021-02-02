<template>
  <div class="center">
    <input
      type="text"
      placeholder="Filter by name..."
      @input="e => handleFilter(e.target.value)"
    />
  </div>
  <p v-if="fetching">Loading...</p>
  <p v-else-if="error">An error occurred</p>
  <div class="grid" v-else>
    <b-card
      :key="key"
      v-for="(character, key) in filteredCharacters"
      :title="character.name"
      :subtitle="character.status"
      :data="[
        {
          text: character.species && 'Species: ',
          info: character.species
        },
        {
          text: character.origin && 'Origin: ',
          info: character.origin
        },
        {
          text: character.gender && 'Gender: ',
          info: character.gender
        }
      ]"
      :img="character.img_url"
      roundImageOnSmallScreen
    />
  </div>
  <p class="no-results" v-if="filteredCharacters.length <= 0">
    No results matching filter
  </p>
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
      filteredCharacters: [],
      fetching: false,
      error: false
    });
    onBeforeMount(() => {
      state.fetching = true;
      getAllCharacters()
        .then(res => {
          state.characters = res;
          state.filteredCharacters = res;
        })
        .catch(() => {
          state.error = true;
        })
        .finally(() => {
          state.fetching = false;
        });
    });

    const handleFilter = value => {
      const tmp = state.characters.filter(result =>
        result.name.toLowerCase().includes(value.toLowerCase())
      );
      state.filteredCharacters = tmp;
    };

    return { ...toRefs(state), handleFilter };
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
}

.no-results {
  text-align: center;
}

.center {
  text-align: center;

  & input {
    padding: 0.5em;
    margin: 0 1em 1.5em 1em;
    width: 330px;
    outline: none;
    background-color: $lightBlue;
    border: none;
  }
}

@media only screen and (max-width: 1400px) {
  .grid {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

@media only screen and (max-width: 400px) {
  .center {
    & input {
      width: 200px;
    }
  }
}
</style>
