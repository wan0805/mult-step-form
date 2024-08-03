<script setup>
import TheButtonNext from "./buttons/TheButtonNext.vue";
import TheButtonPreviuos from "./buttons/TheButtonPrevious.vue";
</script>
<template>
  <section class="button__wrapper">
    <TheButtonPreviuos />
    <TheButtonNext />
  </section>
</template>

<style scoped>
.button__wrapper {
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 1000px) {
  .button__wrapper {
    display: none;
  }
}
</style>
