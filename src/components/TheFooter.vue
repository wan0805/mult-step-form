<script setup>
import TheButtonNext from "./buttons/TheButtonNext.vue";
import TheButtonPreviuos from "./buttons/TheButtonPrevious.vue";
</script>
<template>
  <footer class="button__wrapper">
    <TheButtonPreviuos />

    <TheButtonNext />
  </footer>
</template>

<style scoped>
.button__wrapper {
  width: 100%;
  height: 80px;
  padding: 1rem;
  background-color: var(--White);

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  top: 485px;
}
.button {
  font-family: "Ubuntu", sans-serif;
  font-size: 1rem;
  font-weight: 400;

  border: none;
  padding: 15px 20px;

  cursor: pointer;

  transition: 700ms;
}
.button--back {
  background-color: transparent;

  color: var(--Coolgray);
  font-weight: 500;
}
.button--back:hover {
  color: var(--MarineBlue);
}
.button--next {
  background-color: var(--MarineBlue);

  color: var(--White);
  border: none;
  border-radius: 7px;

  margin-left: auto;
}
.button--next:hover {
  background-color: var(--PurplishBlue);
}
.buttonNext {
  background-color: var(--MarineBlue);
  color: var(--White);

  font-family: "Ubuntu", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;

  padding: 15px 20px;

  border: none;
  border-radius: 7px;

  float: right;

  margin-top: 9rem;
}
@media (min-width: 1000px) {
  .button__wrapper {
    display: none;
  }
}
</style>
