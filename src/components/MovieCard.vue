<template>
  <div class="col">
    <div class="card content text-center" style="width: 18rem;">
      <!-- <img :src="poster" :alt="title" class="figure-img img-fluid p-4"> -->
      <div class="card-body">
        <ul @renderMovies="renderMovies">
          <li class="card-title card-text">
            Titolo: {{objMovie.title}}</li>
          <li class="card-o-title card-text">
            Titolo originale: {{objMovie.original_title}}</li>
          <li class="card-lang card-text">
            Lingua originale: {{objMovie.original_language}} <lang-flag :iso='flag' /></li>
          <li class="card-vote card-text">
            Voto: {{objMovie.vote_average}}</li>
        </ul>
        <ul @renderSeries="renderSeries">
          <li class="card-title card-text">
            Titolo: {{objTV.name}}</li>
          <li class="card-o-title card-text">
            Titolo originale: {{objTV.original_name}}</li>
          <li class="card-lang card-text">
            Lingua originale: {{objMovie.original_language}} <lang-flag :iso='flag' /></li>
          <li class="card-vote card-text">
            Voto: {{objTV.vote_average}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    arrMovies: Array,
    arrSeries: Array,
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number,
    name: String,
    original_name: String,
  },
  data() {
    return {
      flag: '',
      renderMovies: [],
      renderSeries: [],
    };
  },
  methods: {
    // changeLang() {
    //   this.flag = this.arrMovies.original_language;
    // },
    renderCard() {
      this.$emit('renderMovies', this.renderMovies);
      this.$emit('renderSeries', this.renderSeries);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
