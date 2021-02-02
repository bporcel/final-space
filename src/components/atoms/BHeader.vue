<template>
  <header>
    <h1>FINAL SPACE</h1>
  </header>
</template>

<script>
export default {
  name: "b-header"
};
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 1em 0 1em 0;

  text-align: center;
  & h1 {
    font-size: 4em;
    margin: 0;
    padding-bottom: 0.1em;
  }
}
</style>
