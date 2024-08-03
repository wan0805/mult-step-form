<script setup>
import { useStepStore } from "@/../store/store";

const store = useStepStore();

function voltarestapa() {
  store.step--;
}
</script>
<template>
  <button
    class="button button--back"
    @click="voltarestapa"
    v-show="store.step >= 2">
    Go Back
  </button>
</template>

<style scoped>
.button {
  font-family: "Ubuntu", sans-serif;
  font-size: 1rem;
  font-weight: 400;

  border: none;
  padding: 0;

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
</style>
