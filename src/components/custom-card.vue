<template>
  <article class="card">
    <div class="card__side card__side--front">
      <slot name="front"></slot>
    </div>
    <div class="card__side card__side--back">
      <slot name="back"></slot>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.card {
  perspective: 150rem;
  position: relative;
  height: 100%;

  &__side {
    // height: 20rem;
    // width: 250px;
    transition: all 0.8s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);

    &--front {
      background-color: #fff;
    }

    &--back {
      transform: rotateY(180deg);
    }
  }

  &:hover &__side--front {
    transform: rotateY(180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0);
  }
}
</style>
