<template>
  <div class="home-wrapper">
    <home-menu />
    <router-view></router-view>
  </div>
</template>

<script>
import HomeMenu from "../components/HomeMenu.vue";

export default {
  components: {
    HomeMenu,
  },
};
</script>

<style scoped>
.home-wrapper {
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 15px;
}
</style>
