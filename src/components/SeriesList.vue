<template>
  <div class="row container-fluid
    d-flex flex-wrap justify-content-center
    aling-items-center gap-1 m-0">
    <h1 v-if="arrSeries.length">Serie TV</h1>
    <MovieCard v-for="objTV in arrSeries"
    :arr-series="arrSeries"
    :key="objTV.id"
    :name="objTV.name"
    :original_name="objTV.original_name"
    :vote_average="objTV.vote_average"
    :original_language="objTV.original_language"
    />
    <!-- @seriesReady="seriesInfo" -->
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
  // data() {
  //   return {
  //     seriesReady: [],
  //   };
  // },
  // methods: {
  //   seriesInfo(cardInfo) {
  //     this.seriesReady = cardInfo;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
