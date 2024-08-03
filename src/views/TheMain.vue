<script setup>
import ThePersonalInfo from "../components/ThePersonalInfo.vue";
import TheSelectPlan from "../components/TheSelectPLan.vue";
import ThePickAddOn from "../components/ThePickAddOn.vue";
import TheSummary from "../components/TheSummary.vue";
import TheCompleted from "../components/TheCompleted.vue";

import { useStepStore } from "../../store/store";
const store = useStepStore();
</script>
<template>
  <main class="wrapper">
    <ThePersonalInfo v-if="store.step == 1" />
    <TheSelectPlan v-else-if="store.step == 2" />
    <ThePickAddOn v-else-if="store.step == 3" />
    <TheSummary v-else-if="store.step == 4" />
    <TheCompleted v-else-if="store.step == 5" />
  </main>
</template>

<style scoped>
.wrapper {
  width: 90%;
  min-height: 480px;
  background-color: var(--White);
  padding: 1.5rem;

  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%);

  border-radius: 9px;
}
@media (max-width: 430px) {
  .wrapper {
    width: 90%;
    min-height: 480px;
    background-color: var(--White);
    padding: 1.5rem;

    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%);

    border-radius: 9px;
  }
}
@media (min-width: 1000px) {
  .wrapper {
    width: 100%;
    height: 100%;
    position: static;
    transform: translateX(0%);

    padding: 2.5rem 6rem 0 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
