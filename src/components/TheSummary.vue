<script setup>
import { ref } from "vue";
import { useStepStore } from "../../store/store.js";
import TheHeader from "./TheHeader.vue";
import TheButtonWrapper from "./TheButtonsForm.vue";

function convertValueToMultipleOf10(valor) {
  const valueMultiplicador = 10;
  return valor * valueMultiplicador;
}

const store = useStepStore();

const CompletedActive = ref(false);
</script>
<template>
  <TheHeader>
    <template v-slot:title>Finishing up</template>
    <template v-slot:description
      >Double-check everything looks OK before confirming.</template
    >
  </TheHeader>
  <section class="form__wrapper" v-if="CompletedActive == false">
    <section class="cards__wrapper">
      <div class="card__result">
        <div class="card__plan">
          <div>
            <h4 class="card__title">
              {{ store.planName }} ({{ store.planType }})
            </h4>

            <button class="button--change" @click="store.step = 2">
              Change
            </button>
          </div>
          <span class="card__price" v-if="store.isMontlhyActive"
            >${{ store.PlanPrice }}/mo</span
          >
          <span class="card__price" v-else
            >${{ convertValueToMultipleOf10(store.PlanPrice) }}/yr</span
          >
        </div>
        <hr class="line" />
        <div class="card__pickUp">
          <div v-for="escolha in store.pickUp" class="card__choose">
            <span>{{ escolha.name }}</span>
            <h5 v-if="store.isMontlhyActive">+${{ escolha.price }}/mo</h5>
            <h5 v-else>+${{ convertValueToMultipleOf10(escolha.price) }}/yr</h5>
          </div>
        </div>
      </div>
      <div class="card__total">
        <p>
          Total
          <span v-if="store.isMontlhyActive">(per month)</span>
          <span v-else>(per year)</span>
        </p>
        <h3 class="card__total__price" v-if="store.isMontlhyActive">
          +${{ store.totalValueOfThePlan }}/mo
        </h3>
        <h3 class="card__total__price" v-else>
          ${{ store.totalValueOfThePlan }}/yr
        </h3>
      </div>
    </section>
  </section>
  <TheButtonWrapper />
</template>

<style scoped>
.cards__wrapper {
  margin-bottom: 3rem;
}
.card__result {
  background-color: var(--Alabaster);

  padding: 1.5rem;

  border-radius: 7px;
}
.card__title,
.card__price {
  font-size: 18px;
  color: var(--MarineBlue);
  font-weight: 700;
}
.card__plan {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.line {
  background-color: var(--Lightgray);

  margin: 2rem 0;
}
.button--change {
  border: none;
  background-color: transparent;
  margin-top: 5px;
  padding-left: 0;

  color: var(--Coolgray);
  font-size: 16px;
  text-decoration: underline;

  cursor: pointer;
}
.card__choose {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__choose + .card__choose {
  margin-top: 1rem;
}
.card__total {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;

  padding: 0 1.5rem;
}
.card__total__price {
  font-size: 20px;
  color: var(--PurplishBlue);
  font-weight: 700;
}
span,
p {
  color: var(--Coolgray);
  font-weight: 500;
}
h5 {
  color: var(--MarineBlue);
  font-size: 15px;
  font-weight: 500;
}
@media (min-width: 1000px) {
  .cards__wrapper {
    margin-bottom: 4rem;
  }
}
</style>
