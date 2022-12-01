<template>
  <div class="header container-fluid d-flex justify-content-between aling-items-center px-5 py-2">
    <h1 id="title">Boolflix</h1>
    <label for="input-search" class="d-flex justify-content-center aling-items-center">
      <input type="text"
      class="px-2"
      placeholder="Ricerca..." id="input-search">
      <button id="search-button">Cerca</button>
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
#search-button{
  background-color:red;
  color: white;
}
</style>
