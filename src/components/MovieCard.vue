<template>
  <div class="col mb-5 d-flex justify-content-center aling-items-center px-0">
    <div class="container-card text-center mx-0"
    style="width: 18rem;">
      <!-- RENDERING CARDS DEI FILM -->
      <div class="card-body text-white m-0" v-if="title">
        <img :src="poster_path"
        :alt="title" class="figure-img img-fluid m-0">
        <ul class="card-text">
          <li>Titolo: <span class="inside-text">{{title}}</span></li>
          <li>Titolo originale: <span class="inside-text">{{original_title}}</span></li>
          <li>Lingua originale: <lang-flag :iso='original_language' /></li>
          <li>Voto: <span class="inside-text">
            {{convertScore(score).score}}</span></li>
          <li>
            <font-awesome-icon
            v-for="i in convertScore(score).score"
            :key="i.score"
            icon="fa-solid fa-star" :style="{color:'yellow'}"/>
            <font-awesome-icon
            v-for="i in (convertScore(score).maxScore - convertScore(score).score)"
            :key="i.score"
            icon="fa-regular fa-star" :style="{color:'yellow'}"/>
            </li>
          <li>Generi:
            <span
          v-for="genre in reduceMoviesGenres(arrMoviesGenres)"
          :key="genre.id"
          class="inside-text">
          {{genre.name}}, </span>
          </li>
          <li>Panoramica: <span class="inside-text">
            {{reduceOverview(overview)}}</span></li>
        </ul>
      </div>
      <!-- RENDERING CARDS DELLE SERIE TV -->
      <div class="card-body text-white m-0" v-else>
        <img :src="poster_path"
        :alt="name" class="figure-img img-fluid m-0">
        <ul class="card-text">
          <li>Titolo: <span class="inside-text">
            {{name}}</span></li>
          <li>Titolo originale: <span class="inside-text">
            {{original_name}}</span></li>
          <li>Lingua originale: <lang-flag :iso='original_language' /></li>
          <li>
            <font-awesome-icon
            v-for="i in convertScore(score).score"
            :key="i.score"
            icon="fa-solid fa-star" :style="{color:'yellow'}"/>
            <font-awesome-icon
            v-for="i in (convertScore(score).maxScore - convertScore(score).score)"
            :key="i.score"
            icon="fa-regular fa-star" :style="{color:'yellow'}"/>
            </li>
          <li>Generi:
            <span
          v-for="genre in reduceSeriesGenres(arrSeriesGenres)"
          :key="genre.id"
          class="inside-text">
          {{genres.name}}, </span>
          </li>
          <li>Panoramica:<span class="inside-text">
            {{reduceOverview(overview)}}</span></li>
        </ul>
      </div>
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
    score: Number,
    name: String,
    original_name: String,
    poster_path: String,
    overview: String,
    arrMoviesGenres: Array,
    arrSeriesGenres: Array,
  },
  methods: {
    changeLang() {
      this.flag = this.original_language;
    },
    convertScore(score) {
      const maxScore = 5;
      const originalScore = 10;
      return { score: Math.ceil((score * maxScore) / originalScore), maxScore };
    }, // Riduzione caratteri panoramica
    reduceOverview(overview) {
      if (overview.length > 100) {
        return `${overview.slice(0, 100)}...`;
      }
      return overview;
    }, // Riduzione caratteri Generi Movies AL MOMENTO NON FUNZIONANTE
    reduceMoviesGenres(arrMoviesGenres) {
      if (arrMoviesGenres.length > 30) {
        console.log(arrMoviesGenres);
        return `${arrMoviesGenres.slice(0, 30)}...`;
      }
      return arrMoviesGenres;
    }, // Riduzione caratteri Serie TV AL MOMENTO NON FUNZIONANTE
    reduceSeriesGenres(arrSeriesGenres) {
      if (arrSeriesGenres.length > 50) {
        console.log(arrSeriesGenres);
        return `${arrSeriesGenres.slice(0, 50)}...`;
      }
      return arrSeriesGenres;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-card{
  height: 430px;
  width: 342px;
  cursor:pointer;
  perspective: 1000px;
  background-color: transparent;
}
.container-card ul,
.container-card img{
  height: 100%;
  width: 100%;
}
.container-card img{
  position: relative;
  z-index: 4;
}
.card-text{
  height: 100%;
  width: 100%;
  padding: .5rem;
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container-card:hover img{
    filter:brightness(20%);
    z-index:2;
}
.inside-text {
  font-size: .8rem;
}
</style>
