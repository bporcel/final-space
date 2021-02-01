<template>
  <div class="card">
    <div class="grid">
      <img
        :src="img"
        :class="roundImageOnSmallScreen && 'roundImageOnSmallScreen'"
      />
      <div>
        <p class="title">{{ title }}</p>
        <p
          v-if="subtitle"
          :class="
            `subtitle ${
              subtitle.includes('Alive')
                ? 'alive'
                : subtitle.includes('Deceased')
                ? 'dead'
                : 'unknown'
            }`
          "
        >
          {{ subtitle }}
        </p>
        <p :key="key" v-for="(detail, key) in data">
          <span
            ><strong>{{ detail.text }}</strong></span
          >
          <span>{{ detail.info }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "b-card",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    data: {
      type: Array,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    roundImageOnSmallScreen: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #2c3e50;
  color: #ffffff;
  margin: 0.5em 1em 0.5em 0;
  padding-right: 2em;
  border-radius: 0.1em;

  & .title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.2em;
  }

  & .subtitle {
    margin-top: 0;

    &.alive {
      color: #58e78f;
    }

    &.dead {
      color: #cf3232;
    }

    &.unknown {
      color: #a3a3a3;
    }

    &::before {
      content: "\2022";
      font-weight: bold;
      margin-right: 0.5em;
    }
  }

  & img {
    border-radius: 0.1em;
    width: 260px;
    margin-right: 2em;
  }

  & .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
  }
}

@media only screen and (max-width: 1400px) {
  .card {
    width: 80%;
    & .title {
      font-size: 1.2em;
    }
  }
}
@media only screen and (max-width: 850px) {
  .card {
    padding: 1em;

    & img {
      border-radius: 0.5em;
      width: 150px;
    }

    & .roundImageOnSmallScreen {
      border-radius: 50%;
      width: 100px;
    }

    & .title {
      margin-top: 0;
    }
  }
}
</style>
