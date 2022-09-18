<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="main">Главная страница</el-menu-item>
    <el-menu-item index="login">Авторизация</el-menu-item>
    <el-menu-item index="shop">Магазин</el-menu-item>
  </el-menu>
  <div class="h-6" />
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      activeIndex: "main",
    };
  },
  methods: {
    handleSelect(key) {
      router.push(`/${key}`);
    },
  },
};
</script>

<style scoped></style>
