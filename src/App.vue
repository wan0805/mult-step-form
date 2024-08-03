<script setup>
import TheSideBar from "./components/TheSideBar.vue";
import TheMain from "./views/TheMain.vue";
import TheFooter from "./components/TheFooter.vue";

import { useStepStore } from "../store/store.js";

const store = useStepStore();
</script>

<template>
  <TheSideBar />
  <TheMain />
  <TheFooter v-show="store.step < 5" />
</template>

<style>
body {
  font-family: "Ubuntu", sans-serif;
  background-color: var(--LightBlue);
}
body {
  width: 100%;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  position: relative;
}

@media (min-width: 1000px) {
  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #app {
    max-width: 1100px;
    max-height: 650px;
    flex-direction: row;
    justify-content: space-between;
    gap: 3.5rem;
    padding: 1rem;

    background-color: var(--White);

    border-radius: 12px;
  }
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
