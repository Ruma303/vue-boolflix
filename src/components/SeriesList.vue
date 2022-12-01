<template>
  <div>
    <div class="col">
      <h1 v-if="arrSeries.length">Serie TV</h1>
      <ul v-for="objTV in arrSeries"
      :key="objTV.id">
        <li>{{objTV.name}}</li>
        <li>{{objTV.original_name}}</li>
        <li>{{objTV.language}}</li>
        <li>{{objTV.vote_average}}</li>
      </ul>
    </div>
    <MovieCard />
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
  },
};
</script>

<style lang="scss" scoped>

</style>
