<template>
  <div class="card">
    <div class="card__image">
      <img
        src="https://img.mvideo.ru/Pdb/30059036b.jpg"
        alt="Avatar"
        style="width: 100%"
      />
    </div>
    <div class="card__price">86 956 ₽ <span>99 990 ₽</span></div>
    <div class="card__description">
      Apple / смартфон iphone 12 Pro 128GB / 6.1 / 2532х1170 / OLED / 125Гб
    </div>
    <el-rate
      v-model="value"
      size="large"
      :colors="['#8B008B', '#8B008B', '#8B008B', '#8B008B']"
    />
    <a href="">
      <div class="card__credit">РАССРОЧКА 0-0-6</div>
    </a>
    <a href="">
      <div class="card__button">В корзину</div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap");

.card {
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.06),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  max-width: 340px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  &__image {
    & img {
      object-fit: contain;
    }
  }

  &__price {
    font-family: "Source Sans Pro";
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3f3f3f;
    margin: 0.5rem 0;
    & span {
      text-decoration: line-through;
      font-size: 12px;
      color: darkgray;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 1rem;
    line-height: 20px;
    color: #3f3f3f;
  }

  &__credit {
    padding: 0.5rem 1rem;
    background: linear-gradient(to right, orange, yellow);
    border-radius: 1rem;
    display: inline-block;
    color: black;
  }

  &__button {
    background-color: #8b008b;
    color: #fff;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin: 0.5rem 0;
    transition-duration: 1s;
    &:hover {
      opacity: 0.7;
      transition-duration: 1s;
    }
  }
}
</style>
