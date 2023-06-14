<template>
  <div class="sample">
    <h1>this is sample page layout</h1>
    <slot></slot>
    <Popups></Popups>
  </div>
</template>

<script>
export default {
  name: "AppLayoutSample",
  components: {},
};
</script>

<style scoped>
div.sample {
  border: solid 2px cornflowerblue;
}
</style>
