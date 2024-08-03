<script setup></script>
<template>
  <header>
    <h1 class="form__title">
      <slot name="title"> </slot>
    </h1>

    <p class="form__description">
      <slot name="description"></slot>
    </p>
  </header>
</template>

<style scoped>
header {
  margin-bottom: 1rem;
}
.form__title {
  font-size: 2rem;
  font-weight: 700;

  color: var(--MarineBlue);

  margin-bottom: 1rem;
}
.form__description {
  font-size: 18px;
  color: var(--Coolgray);
}
</style>
