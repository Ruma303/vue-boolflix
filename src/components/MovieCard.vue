<template>
  <div class="col mb-5 d-flex justify-content-center aling-items-center px-0">
    <div class="container-card text-center mx-0"
    style="width: 18rem;">
      <!-- RENDERING CARDS DEI FILM -->
      <ul class="card-body text-white m-0" v-if="title">
        <li><img :src="poster_path"
        :alt="title" class="figure-img img-fluid m-0">
      </li>
        <li class="card-title card-text">
          Titolo: {{title}}</li>
        <li class="card-o-title card-text">
          Titolo originale: {{original_title}}</li>
        <li class="card-lang card-text">
          Lingua originale: <lang-flag :iso='original_language' /></li>
        <li class="card-vote card-text">
          Voto: {{convertScore(score).score}}</li>
        <li class="card-vote card-text">
        <font-awesome-icon
        v-for="i in convertScore(score).score"
        :key="i.score"
        icon="fa-solid fa-star" :style="{color:'yellow'}"/>
        <font-awesome-icon
        v-for="i in (convertScore(score).maxScore - convertScore(score).score)"
        :key="i.score"
        icon="fa-regular fa-star" :style="{color:'yellow'}"/>
        </li>
        <li class="card-text overview">Panoramica: {{reduceOverview(overview)}}</li>
      </ul>
      <!-- RENDERING CARDS DELLE SERIE TV -->
      <ul class="card-body text-white m-0" v-else>
        <li><img :src="poster_path"
        :alt="name" class="figure-img img-fluid m-0"></li>
        <li class="card-title card-text">
          Titolo: {{name}}</li>
        <li class="card-o-title card-text">
          Titolo originale: {{original_name}}</li>
        <li class="card-lang card-text">
          Lingua originale: <lang-flag :iso='original_language' /></li>
        <li class="card-vote card-text">
        <font-awesome-icon
        v-for="i in convertScore(score).score"
        :key="i.score"
        icon="fa-solid fa-star" :style="{color:'yellow'}"/>
        <font-awesome-icon
        v-for="i in (convertScore(score).maxScore - convertScore(score).score)"
        :key="i.score"
        icon="fa-regular fa-star" :style="{color:'yellow'}"/>
        </li>
        <li class="card-text overview">Panoramica: {{reduceOverview(overview)}}</li>
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
      if (overview.length > 250) {
        return `${overview.slice(0, 250)}...`;
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
.card-text{
  display: none;
  padding: .5rem;
}
.overview{
  overflow-y: auto;
}
.container-card:hover .card-text{
  display: block;
}
.container-card:hover {
  background-color: black;
  padding-top: 2rem;
}
.container-card:hover img{
  display: none;
}
</style>
