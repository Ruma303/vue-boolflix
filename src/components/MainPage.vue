<template>
  <div>
    <main class="container-fluid m-0 p-3 d-flex flex-column
    justify-content-center aling-items-center gap-3">
      <div class="movies-container">
        <!-- <h1 v-if="arrMovies.length">Film</h1> -->
        <ul v-for="objMovie in arrMovies"
        :key="objMovie.id">
          <li>{{objMovie.title}}</li>
          <li>{{objMovie.original_title}}</li>
          <li>{{objMovie.language}}</li>
          <li>{{objMovie.vote_average}}</li>
        </ul>
        <!-- <FilmList /> -->
      </div>
      <div class="series-container">
        <!-- <h1 v-if="arrSeries.length">Film</h1> -->
        <ul v-for="objTV in arrSeries"
        :key="objTV.id">
          <li>{{objTV.name}}</li>
          <li>{{objTV.original_name}}</li>
          <li>{{objTV.language}}</li>
          <li>{{objTV.vote_average}}</li>
        </ul>
        <!-- <SeriesList /> -->
      </div>
    </main>
  </div>
</template>

<script>
// import SeriesList from './SeriesList.vue';
// import FilmList from './FilmList.vue';

export default {
  name: 'MainPage',
  // components: {
  //   SeriesList,
  //   FilmList,
  // },
  props: {
    arrMovies: Array,
    arrSeries: Array,
  },
};
</script>

<style lang="scss" scoped>
main{
  background-color: rgb(67, 67, 67);
  height: 100vh;
}
</style>
