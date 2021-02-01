<template>
  <div class="card">
    <div class="grid">
      <img :src="img" />
      <div>
        <p class="title">{{ title }}</p>
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
    data: {
      type: Array,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #2c3e50;
  color: #ffffff;
  margin: 0.5em;
  padding: 2em 0.5em 0.5em 2em;
  border-radius: 0.1em;

  & .title {
    font-size: 1.8em;
    font-weight: bold;
    margin-top: 0;
  }

  & img {
    border-radius: 50%;
    width: 150px;
  }

  & .grid {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: auto;
  }
}
</style>
