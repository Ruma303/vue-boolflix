<template>
  <div>
    <main class="container-fluid m-0 p-3 d-flex justify-content-center aling-items-center">
      <div class="films-container">
        <MovieCard />
      </div>
      <div class="shows-container">
        <MovieCard />
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import MovieCard from './MovieCard.vue';

export default {
  name: 'MainPage',
  components: {
    MovieCard,
  },
  data() {
    return {
      urlApi: 'https://api.themoviedb.org/3',
      arrObj: null, // array di tutti gli oggetti
      arrFilms: [],
      arrSeries: [],
    };
  },
  created() {
    axios.get(this.urlApi)
      .then((axiosResponse) => { this.arrObj = axiosResponse.data; });
  },
};
</script>

<style lang="scss" scoped>
main{
  background-color: rgb(67, 67, 67);
  height: 100vh;
}
</style>
