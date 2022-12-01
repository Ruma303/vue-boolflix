<template>
  <div>
    <div class="col">
      <h1 v-if="arrMovies.length">Film</h1>
      <ul v-for="objMovie in arrMovies"
      :key="objMovie.id">
        <li>{{objMovie.title}}</li>
        <li>{{objMovie.original_title}}</li>
        <li>{{objMovie.language}}</li>
        <li>{{objMovie.vote_average}}</li>
      </ul>
    </div>
    <MovieCard />
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
  },
};
</script>

<style lang="scss" scoped>

</style>
