<template>
  <div class="col mb-5 d-flex justify-content-center aling-items-center px-0">
    <div class="container-card text-center mx-0"
    style="width: 18rem;">
      <!-- RENDERING CARDS DEI FILM -->
      <div class="card-body text-white m-0" v-if="title">
        <img :src="poster_path"
        :alt="title" class="figure-img img-fluid m-0">
        <ul class="card-text">
          <li class="card-title ">
            Titolo: {{title}}</li>
          <li class="card-o-title ">
            Titolo originale: {{original_title}}</li>
          <li class="card-lang ">
            Lingua originale: <lang-flag :iso='original_language' /></li>
          <li class="card-vote ">
            Voto: {{convertScore(score).score}}</li>
          <li class="card-vote ">
          <font-awesome-icon
          v-for="i in convertScore(score).score"
          :key="i.score"
          icon="fa-solid fa-star" :style="{color:'yellow'}"/>
          <font-awesome-icon
          v-for="i in (convertScore(score).maxScore - convertScore(score).score)"
          :key="i.score"
          icon="fa-regular fa-star" :style="{color:'yellow'}"/>
          </li>
          <li class=" overview">Panoramica: {{reduceOverview(overview)}}</li>
        </ul>
      </div>
      <!-- RENDERING CARDS DELLE SERIE TV -->
      <div class="card-body text-white m-0" v-else>
        <img :src="poster_path"
        :alt="name" class="figure-img img-fluid m-0">
        <ul class="card-text">
          <li class="card-title ">
            Titolo: {{name}}</li>
          <li class="card-o-title ">
            Titolo originale: {{original_name}}</li>
          <li class="card-lang ">
            Lingua originale: <lang-flag :iso='original_language' /></li>
          <li class="card-vote ">
          <font-awesome-icon
          v-for="i in convertScore(score).score"
          :key="i.score"
          icon="fa-solid fa-star" :style="{color:'yellow'}"/>
          <font-awesome-icon
          v-for="i in (convertScore(score).maxScore - convertScore(score).score)"
          :key="i.score"
          icon="fa-regular fa-star" :style="{color:'yellow'}"/>
          </li>
          <li class=" overview">Panoramica: {{reduceOverview(overview)}}</li>
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
  },
  methods: {
    changeLang() {
      this.flag = this.original_language;
    },
    convertScore(score) {
      const maxScore = 5;
      const originalScore = 10;
      return { score: Math.ceil((score * maxScore) / originalScore), maxScore };
    },
    reduceOverview(overview) {
      if (overview.length > 150) {
        return `${overview.slice(0, 150)}...`;
      }
      return overview;
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
</style>
