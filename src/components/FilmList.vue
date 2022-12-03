<template>
    <div class="row container-fluid
      d-flex flex-wrap justify-content-center
      aling-items-center gap-1 m-0 p-3">
      <h1 v-if="arrMovies.length">Film</h1>
      <MovieCard v-for="objMovie in arrMovies"
      :arr-movies="arrMovies"
      :arrMoviesGenres="arrMoviesGenres"
      :poster_path="`http://image.tmdb.org/t/p/w342/${objMovie.poster_path}`"
      :alt="objMovie.title"
      :key="objMovie.id"
      :title="objMovie.title"
      :original_title="objMovie.original_title"
      :score="objMovie.vote_average"
      :original_language="objMovie.original_language"
      :overview="objMovie.overview"
      :genres="objMovie.arrMoviesGenres"
      />
    </div>
  </template>

<script>
import MovieCard from './MovieCard.vue';

export default {
  name: 'FilmList',
  components: {
    MovieCard,
  },
  props: {
    arrMovies: Array,
    arrMoviesGenres: Array,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
