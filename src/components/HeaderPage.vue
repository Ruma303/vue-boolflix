<template>
  <div class="header container-fluid d-flex justify-content-between aling-items-center p-3">
    <h1 id="title">Boolflix</h1>
    <label for="input-search" >
      <input type="text" placeholder="Ricerca film..." id="input-search">
    </label>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
};
</script>

<style lang="scss" scoped>
#title{
  color: red;
  text-transform: uppercase;
  margin: 0;
}
.header{
  background-color: black;
}
</style>
