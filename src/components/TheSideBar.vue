<script setup>
import { ref, watch } from "vue";
import { useStepStore } from "../../store/store.js";
import { storeToRefs } from "pinia";

const store = useStepStore();

const { step } = storeToRefs(store);

const isactiveOne = ref(false);
const isactiveTwo = ref(false);
const isactiveThree = ref(false);
const isactiveFour = ref(false);

function StepChange() {
  if (store.step == 1) {
    isactiveOne.value = true;
    isactiveTwo.value = false;
    isactiveThree.value = false;
    isactiveFour.value = false;
  } else if (store.step == 2) {
    isactiveOne.value = false;
    isactiveTwo.value = true;
    isactiveThree.value = false;
  } else if (store.step == 3) {
    isactiveTwo.value = false;
    isactiveThree.value = true;
    isactiveFour.value = false;
  } else if (store.step == 4) {
    isactiveTwo.value = false;
    isactiveThree.value = false;
    isactiveFour.value = true;
  }
}

watch(step, StepChange);
</script>
<template>
  <section class="sideBar__wrapper">
    <div class="side__progress" :class="{ active: isactiveOne }">
      <div class="side__circle">
        <p class="side__number">1</p>
      </div>
      <div class="side__information">
        <span>Step 1</span>
        <h2>Your Info</h2>
      </div>
    </div>

    <div class="side__progress" :class="{ active: isactiveTwo }">
      <div class="side__circle">
        <p class="side__number">2</p>
      </div>
      <div class="side__information">
        <span>Step 2</span>
        <h2>select plans</h2>
      </div>
    </div>

    <div class="side__progress" :class="{ active: isactiveThree }">
      <div class="side__circle">
        <p class="side__number">3</p>
      </div>
      <div class="side__information">
        <span>Step 3</span>
        <h2>add-ons</h2>
      </div>
    </div>

    <div class="side__progress" :class="{ active: isactiveFour }">
      <div class="side__circle">
        <p class="side__number">4</p>
      </div>
      <div class="side__information">
        <span>Step 4</span>
        <h2>summary</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sideBar__wrapper {
  width: 100%;
  height: 220px;
  background: url("/src/assets/images/bg-sidebar-mobile.svg") no-repeat bottom;
  background-size: cover;

  padding: 2rem 5rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.side__circle {
  width: 35px;
  height: 35px;

  border-radius: 50%;

  border: 2px solid var(--White);

  transition: 500ms;

  display: flex;
  align-items: center;
  justify-content: center;
}

.side__progress.active .side__circle {
  background-color: var(--PastelBlue);

  border: 2px solid var(--PastelBlue);
}
.side__number {
  font-size: 1rem;
  color: var(--White);
  font-weight: 700;
}
.side__information {
  display: none;
}
.side__progress.active .side__circle .side__number {
  color: var(--MarineBlue);
}
.side__information span {
  font-size: 14px;
  color: var(--PastelBlue);

  text-transform: uppercase;
}
.side__information h2 {
  color: var(--White);
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5;

  text-transform: uppercase;
}

@media (min-width: 1000px) {
  .sideBar__wrapper {
    width: 50%;
    height: 100%;
    background: url("/src/assets/images/bg-sidebar-desktop.svg") no-repeat
      bottom;
    background-size: cover;

    display: block;

    padding: 0;
    padding-top: 3rem;

    border-radius: 9px;
  }
  .side__progress {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding-left: 3rem;
  }
  .side__progress + .side__progress {
    margin-top: 2rem;
  }
  .side__information {
    display: flex;
    flex-direction: column;
  }
}
</style>
