<template>
  <div>
    <main class="container-fluid m-0 p-3 d-flex justify-content-center aling-items-center">
      <div class="films-container">
        <ul key=""v-for="objMovie in arrMovies"
        :key="objMovie.id">
          <li>{{}}</li>
          <li>{{}}</li>
          <li>{{}}</li>
          <li>{{}}</li>
        </ul>
        <FilmList />
      </div>
      <div class="shows-container">
        <SeriesList />
      </div>
    </main>
  </div>
</template>

<script>
import SeriesList from './SeriesList.vue';
import FilmList from './FilmList.vue';

export default {
  name: 'MainPage',
  components: {
    SeriesList,
    FilmList,
  },
  props: {
    arrMovies: Array,
  },
};
</script>

<style lang="scss" scoped>
main{
  background-color: rgb(67, 67, 67);
  height: 100vh;
}
</style>
