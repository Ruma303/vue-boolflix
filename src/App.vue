<template>
  <div>
    <HeaderPage @queryChange="search"/>
    <MainPage :arrMovies="arrMovies"
    :arrSeries="arrSeries"/>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
  },
  data() {
    return {
      urlApi: 'https://api.themoviedb.org/3',
      apiKey: '2ae73c2a516d5dc0685dd21989f5bc01',
      lang: 'it-IT',
      arrMovies: [],
      arrSeries: [],
    };
  },
  methods: {
    search(queryStr) {
      // chiamata axios
      axios.get(`${this.urlApi}/search/movie`, {
        params: {
          api_key: this.apiKey,
          query: queryStr,
          language: this.lang,
        },
      })
        .then((axiosResponse) => {
          this.arrMovies = axiosResponse.data.results;
          console.log(this.arrMovies);
        });
      axios.get(`${this.urlApi}/search/tv`, {
        params: {
          api_key: this.apiKey,
          query: queryStr,
          language: this.lang,
        },
      })
        .then((axiosResponse) => {
          this.arrSeries = axiosResponse.data.results;
          console.log(this.arrSeries);
        });
    },
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import '@/assets/scss/reset';
</style>
