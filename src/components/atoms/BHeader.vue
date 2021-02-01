<template>
  <header>
    <h1>Final Space</h1>
  </header>
</template>

<script>
export default {
  name: "b-header"
};
</script>

<style lang="scss" scoped>
header {
  background-color: #191f25;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 1em 0 1em 0;

  text-align: center;
  & h1 {
    font-size: 3em;
    margin: 0;
    padding-bottom: 0.1em;
  }
}
</style>
