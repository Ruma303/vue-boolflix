<template>
  <div>
    <HeaderPage />
    <MainPage />
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
      urlApi: 'https://api.themoviedb.org/3/movie/550?api_key=2ae73c2a516d5dc0685dd21989f5bc01',
      arrObj: null, // array di tutti gli oggetti
      arrMovies: null,
      arrSeries: null,
      lang: 'it-IT',
      key: '2ae73c2a516d5dc0685dd21989f5bc01',
    };
  },
  created() {
    axios.get(this.urlApi)
      .then((axiosResponse) => {
        console.log(axiosResponse);
        this.arrObj = axiosResponse.data.response;
      });
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
