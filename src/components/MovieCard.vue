<template>
  <div class="col mb-3">
    <div class="container-card card content text-center" style="width: 18rem;">
      <!-- <img :src="poster" :alt="title" class="figure-img img-fluid p-4"> -->
      <!-- RENDERING CARDS DEI FILM -->
      <ul class="card-body" v-if="title">
        <li class="card-title card-text">
          Titolo: {{title}}</li>
        <li class="card-o-title card-text">
          Titolo originale: {{original_title}}</li>
        <li class="card-lang card-text">
          Lingua originale: <lang-flag :iso='original_language' /></li>
        <li class="card-vote card-text">
          Voto: {{vote_average}}</li>
      </ul>
      <!-- RENDERING CARDS DELLE SERIE TV -->
      <ul class="card-body" v-else>
        <li class="card-title card-text">
          Titolo: {{name}}</li>
        <li class="card-o-title card-text">
          Titolo originale: {{original_name}}</li>
        <li class="card-lang card-text">
          Lingua originale: <lang-flag :iso='original_language' /></li>
        <li class="card-vote card-text">
          Voto: {{vote_average}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number,
    name: String,
    original_name: String,
  },
  methods: {
    changeLang() {
      this.flag = this.original_language;
    },
  },
  // data() {
  //   return {
  //     flag: '',
  //     renderMovies: [],
  //     renderSeries: [],
  //   };
  // },
  // watch: {
  //   arrMovies(newValue) {
  //     console.log('arrMovies watch triggerata', +newValue);
  //     this.$emit('moviesReady', newValue);
  //   },
  //   arrSeries(newValue) {
  //     console.log('arrMovies watch triggerata', +newValue);
  //     this.$emit('seriesReady', newValue);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.container-card{
  height: 20rem;
}
</style>
