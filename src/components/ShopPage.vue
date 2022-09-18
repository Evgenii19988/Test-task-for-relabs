<template>
  <div class="card-container">
    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />
  </div>
</template>

<script>
import ProductCard from "../components/shop_page_components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0 10px;
  align-items: center;
}
</style>
