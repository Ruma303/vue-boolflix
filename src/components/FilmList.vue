<template>
  <div>
    <div class="col">
      <h1 v-if="arrMovies.length">Film</h1>
      <MovieCard v-for="objMovie in arrMovies"
      :arr-movies="arrMovies"
      @render-movies="renderMovies"
      :key="objMovie.id"
      :title="objMovie.title"
      :original_title="objMovie.original_title"
      :vote_average="objMovie.vote_average"
      :original_language="objMovie.original_language"
      />
    </div>
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
  methods: {
    renderMovies(cardInfo) {
      this.renderMovies = cardInfo;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
