<template>
  <header>
    <h1>Final Space</h1>
    <!-- <a src="https://www.buymeacoffee.com/bporcel">Buy me a coffee</a> -->
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
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-template-rows: auto;
  // align-items: center;
  // justify-content: space-between;

  text-align: center;
  & h1 {
    font-size: 3em;
    margin: 0;
    padding-bottom: 0.1em;
  }
  & a {
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      color: #deb887;
    }
  }
}
</style>
