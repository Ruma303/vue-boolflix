<template>
  <div class="header container-fluid d-flex justify-content-between aling-items-center px-5 py-2">
    <h1 id="title">Boolflix</h1>
    <form @submit.prevent="$emit('queryChange', queryString)"
    class="d-flex justify-content-center aling-items-center py-2">
      <label for="input-search" class="d-flex justify-content-center aling-items-center">
        <input type="text"
        class="px-2"
        placeholder="Ricerca Film o Serie TV..." id="input-search"
        v-model="queryString">
        <button id="search-button">Cerca</button>
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      queryString: '',
    };
  },
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
  border:none;
  padding:.2rem;
}
</style>
