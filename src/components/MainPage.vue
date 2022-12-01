<template>
  <div>
    <main class="container-fluid m-0 p-3 d-flex flex-column
    justify-content-center aling-items-center gap-3">
      <div class="movies-container">
        <FilmList :arr-movies="arrMovies"/>
      </div>
      <div class="series-container">
        <SeriesList :arr-series="arrSeries"/>
      </div>
    </main>
  </div>
</template>

<script>
import FilmList from './FilmList.vue';
import SeriesList from './SeriesList.vue';

export default {
  name: 'MainPage',
  components: {
    FilmList,
    SeriesList,
  },
  props: {
    arrMovies: Array,
    arrSeries: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>
