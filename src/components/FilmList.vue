<template>
    <div class="row container-fluid
      d-flex flex-wrap justify-content-center
      aling-items-center gap-1 m-0 p-3">
      <h1 v-if="arrMovies.length">Film</h1>
      <MovieCard v-for="objMovie in arrMovies"
      :arr-movies="arrMovies"
      :key="objMovie.id"
      :title="objMovie.title"
      :original_title="objMovie.original_title"
      :vote_average="objMovie.vote_average"
      :original_language="objMovie.original_language"
      />
    </div>
  </template>
    <!-- @moviesReady="moviesInfo" -->

<script>
import MovieCard from './MovieCard.vue';

export default {
  name: 'FilmList',
  components: {
    MovieCard,
  },
  props: {
    arrMovies: Array,
  },
  //  data() {
  //   return {
  //     moviesReady: [],
  //   };
  // },
  // methods: {
  //   moviesInfo(cardInfo) {
  //     this.moviesReady = cardInfo;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
