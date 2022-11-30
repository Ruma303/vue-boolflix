<template>
  <div>
    <HeaderPage />
    <MainPage />
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    HeaderPage,
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
