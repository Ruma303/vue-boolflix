<template>
  <div class="row container-fluid
    d-flex flex-wrap justify-content-center
    aling-items-center gap-1 m-0">
    <h1 v-if="arrSeries.length">Serie TV</h1>
    <MovieCard v-for="objTV in arrSeries"
    :arr-series="arrSeries"
    :arrSeriesGenres="arrSeriesGenres"
    :poster_path="`http://image.tmdb.org/t/p/w342/${objTV.poster_path}`"
    :alt="objTV.name"
    :key="objTV.id"
    :name="objTV.name"
    :original_name="objTV.original_name"
    :score="objTV.vote_average"
    :original_language="objTV.original_language"
    :overview="objTV.overview"
    :genres="objTV.arrSeriesGenres"
    />
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
  name: 'SeriesList',
  components: {
    MovieCard,
  },
  props: {
    arrSeries: Array,
    arrSeriesGenres: Array,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
