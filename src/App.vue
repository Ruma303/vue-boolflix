<template>
  <div>
    <HeaderPage @queryChange="search"/>
    <MainPage
    :arr-movies="arrMovies"
    :arr-series="arrSeries"
    :arrMoviesGenres="arrMoviesGenres"
    :arrSeriesGenres="arrSeriesGenres"
    />
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
      arrMoviesGenres: [],
      arrSeriesGenres: [],
    };
  },
  methods: {
    search(queryStr) {
      // chiamata per i movies
      axios.get(`${this.urlApi}/search/movie`, {
        params: {
          api_key: this.apiKey,
          query: queryStr,
          language: this.lang,
        },
      })
        .then((axiosResponse) => {
          this.arrMovies = axiosResponse.data.results;
          // console.log(this.arrMovies);
        });
      // chiamata per le series
      axios.get(`${this.urlApi}/search/tv`, {
        params: {
          api_key: this.apiKey,
          query: queryStr,
          language: this.lang,
        },
      })
        .then((axiosResponse) => {
          this.arrSeries = axiosResponse.data.results;
          // console.log(this.arrSeries);
        });
      // chiamata per GENERI FILM
      axios.get(`${this.urlApi}/genre/movie/list`, {
        params: {
          api_key: this.apiKey,
          query: queryStr,
          language: this.lang,
        },
      })
        .then((axiosResponse) => {
          this.arrMoviesGenres = axiosResponse.data.genres;
          console.log(this.arrMoviesGenres);
        });
      // chiamata per GENERI SERIES
      axios.get(`${this.urlApi}/genre/tv/list`, {
        params: {
          api_key: this.apiKey,
          query: queryStr,
          language: this.lang,
        },
      })
        .then((axiosResponse) => {
          this.arrSeriesGenres = axiosResponse.data.genres;
          console.log(this.arrSeriesGenres);
        });
    },
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import '@/assets/scss/reset';
body {
  background-color: rgb(67, 67, 67);
}
ul {
  list-style: none;
}
</style>
