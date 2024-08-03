<script setup>
import { ref } from "vue";

import TheHeader from "./TheHeader.vue";
import TheButtonWrapper from "./TheButtonsForm.vue";
import { useStepStore } from "../../store/store.js";

const store = useStepStore();

const button = ref("montlhy");

function selectCard(event) {
  const cardSelected = event.target.dataset;

  if (cardSelected.name === "Arcade") {
    store.isCardArcade = true;
    store.isCardAdvanced = false;
    store.isCardPro = false;
    store.planName = cardSelected.name;
    getPriceOfTheSelectedCard(cardSelected);
  } else if (cardSelected.name === "Advanced") {
    store.isCardArcade = false;
    store.isCardAdvanced = true;
    store.isCardPro = false;

    store.planName = cardSelected.name;
    getPriceOfTheSelectedCard(cardSelected);
  } else if (cardSelected.name === "Pro") {
    store.isCardArcade = false;
    store.isCardAdvanced = false;
    store.isCardPro = true;

    store.planName = cardSelected.name;
    getPriceOfTheSelectedCard(cardSelected);
  }
}

function getPriceOfTheSelectedCard(plan) {
  const price = Number(plan.value);

  return (store.PlanPrice = price);
}

function buttontoogle() {
  if (store.buttonCheck == true) {
    store.isMontlhyActive = true;
    store.isYearlhyActive = false;
    store.isCircleRight = false;

    store.planType = "Monthly";
    button.value = "Monthly";
  } else {
    store.isYearlhyActive = true;
    store.isMontlhyActive = false;
    store.isCircleRight = true;

    store.planType = "Earlhy";
    button.value = "Earlhy";
  }
}
</script>
<template>
  <TheHeader>
    <template v-slot:title>Select your plan</template>
    <template v-slot:description
      >You have the option of monthly or yearlhy biling.</template
    >
  </TheHeader>
  <section class="cards__wrapper">
    <section
      class="card"
      id="arcade"
      data-name="Arcade"
      data-value="9"
      :class="{ clicked: store.isCardArcade }"
      @click="selectCard">
      <img src="../assets/images/icon-arcade.svg" alt="icon arcade" />

      <div class="card__details" v-if="store.isMontlhyActive">
        <h3>Arcade</h3>
        <span>$ 9/mo</span>
      </div>

      <div class="card__details" v-else>
        <h3>Arcade</h3>
        <span>$ 90/yr</span>
        <p>2 months free</p>
      </div>
    </section>

    <div
      class="card"
      id="advanced"
      data-name="Advanced"
      data-value="12"
      :class="{ clicked: store.isCardAdvanced }"
      @click="selectCard">
      <img src="../assets/images/icon-advanced.svg" alt="icon arcade" />

      <div class="card__details" v-if="store.isMontlhyActive">
        <h3>Advanced</h3>
        <span>$ 12/mo</span>
      </div>

      <div class="card__details" v-else>
        <h3>Advanced</h3>
        <span>$ 120/yr</span>
        <p>2 months free</p>
      </div>
    </div>

    <div
      class="card"
      id="pro"
      data-name="Pro"
      data-value="15"
      :class="{ clicked: store.isCardPro }"
      @click="selectCard">
      <img
        class="card__logo"
        src="../assets/images/icon-pro.svg"
        alt="icon pro" />
      <div class="card__description">
        <div class="card__details" v-if="store.isMontlhyActive">
          <h3>Pro</h3>
          <span>$ 15/mo</span>
        </div>

        <div class="card__details" v-else>
          <h3>Pro</h3>
          <span>$ 150/yr</span>
        </div>
        <p v-if="store.isYearlhyActive">2 months free</p>
      </div>
    </div>
  </section>

  <section class="controller__wrapper">
    <p class="controller__text" :class="{ active: store.isMontlhyActive }">
      monthly
    </p>

    <label
      for="button"
      class="button--type"
      :class="{ right: store.isCircleRight }"
      @click="buttontoogle">
      <input
        type="checkbox"
        name="button"
        id="button"
        v-model="store.buttonCheck" />
      <div class="circle"></div>
    </label>
    <p class="controller__text" :class="{ active: store.isYearlhyActive }">
      yearly
    </p>
  </section>
  <TheButtonWrapper />
</template>

<style scoped>
.cards__wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(95px, 100px);

  gap: 12px;
  margin-bottom: 2rem;
}
.card {
  border: 2px solid var(--Lightgray);
  border-radius: 9px;
  background-color: transparent;
  padding: 1rem;

  position: relative;
  z-index: 3;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  cursor: pointer;

  gap: 1rem;
}
.card__logo {
  align-self: flex-start;
}
.card__description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.card__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;
}

.card__details h3 {
  font-size: 1.125rem;
  color: var(--MarineBlue);
  font-weight: 700;

  text-transform: capitalize;

  margin-bottom: 8px;
}
.card__details span {
  color: var(--Coolgray);
  font-weight: 500;
  display: block;
  margin-bottom: 6px;
}
.card p {
  color: var(--MarineBlue);
  font-weight: 700;
  font-size: 12px;
}
.clicked {
  background-color: var(--Magnolia);
  border: 2px solid var(--MarineBlue);
}
.controller__wrapper {
  padding: 1rem 0;
  background-color: var(--Magnolia);

  border-radius: 9px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
.button--type {
  width: 60px;
  height: 30px;

  border-radius: 18px;

  padding: 4px;

  background-color: var(--MarineBlue);

  cursor: pointer;

  display: flex;
}
.button--type input {
  appearance: none;
}
.circle {
  width: 45%;
  height: 100%;

  border-radius: 50%;

  background-color: var(--White);
}

.right {
  justify-content: end;
}
.controller__text {
  color: var(--Coolgray);
  font-weight: 700;
  font-size: 1rem;

  text-transform: capitalize;
}
.controller__text.active {
  color: var(--MarineBlue);
}

@media (min-width: 1000px) {
  .cards__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 200px;

    gap: 2rem;
  }
  .card {
    flex-direction: column;
    justify-content: space-between;
  }
  .card img {
    height: 50px;
  }
}
</style>
