<script setup>
import TheHeader from "./TheHeader.vue";
import TheButtonsForm from "./TheButtonsForm.vue";
import { useStepStore } from "../../store/store.js";

const store = useStepStore();

const pickAdds = [
  {
    id: "online",
    name: "Online Service",
    description: "Acess to multiplayer games",
    price: 1,
    priceEarlhy: 10,
  },
  {
    id: "larger",
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    price: 2,
    priceEarlhy: 20,
  },
  {
    id: "profile",
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    price: 2,
    priceEarlhy: 20,
  },
];
</script>
<template>
  <TheHeader>
    <template v-slot:title>Pick add-ons</template>
    <template v-slot:description
      >Add-ons help enhance your gaming experience.</template
    >
  </TheHeader>
  <section class="card__wrapper">
    <div class="card" v-for="(card, index) in pickAdds" :key="index">
      <input
        type="checkbox"
        class="input"
        :name="card.name"
        :id="card.name"
        :value="card"
        v-model="store.pickUp"
        v-if="store.planType == 'Monthly'" />
      <input
        type="checkbox"
        class="input"
        :name="card.name"
        :id="card.name"
        :value="card"
        v-model="store.pickUp"
        v-else />
      <label :for="index">
        <div class="card__checbox"></div>
        <div class="card__information">
          <div>
            <h3 class="card__title">{{ card.name }}</h3>
            <p class="card__details">{{ card.description }}</p>
          </div>
          <span class="card__price" v-if="store.planType == 'Monthly'"
            >+${{ card.price }}/mo</span
          >
          <span class="card__price" v-else>+${{ card.priceEarlhy }}/yr</span>
        </div>
      </label>
    </div>
  </section>
  <TheButtonsForm />
</template>

<style scoped>
.card__wrapper {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 99px);
  gap: 1rem;
}
.card {
  width: 100%;

  cursor: pointer;

  background-color: transparent;

  position: relative;
}

.card input[type="checkbox"] {
  width: 100%;
  height: 100%;

  border-radius: 6px;

  background-color: transparent;

  position: relative;
  z-index: 2;

  appearance: none;

  cursor: pointer;
}
.card input[type="checkbox"]:hover {
  border: 2px solid var(--PurplishBlue);
}
label {
  width: 100%;
  height: 100%;

  padding: 1rem 1.5rem;

  border: 2px solid var(--Lightgray);
  border-radius: 6px;

  position: absolute;
  top: 0;
  left: 0;

  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 2rem;
  align-items: center;

  cursor: pointer;
}
label:hover {
  border: 2px solid var(--PurplishBlue);
}
label .card__checbox {
  width: 30px;
  height: 30px;
  border: 1px solid var(--Lightgray);
  border-radius: 4px;

  position: relative;
}
label .card__checbox::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--PurplishBlue);
  background-image: url("../assets/images/icon-checkmark.svg") no-repeat center;
}
label .card__checbox::before {
  content: "";
  width: 100%;
  height: 100%;
  display: none;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  background: url("../assets/images/icon-checkmark.svg") no-repeat;
  background-size: 20px 20px;
  background-position: center;
}

input[type="checkbox"]:checked ~ label .card__checbox::after {
  display: flex;
}
input[type="checkbox"]:checked ~ label .card__checbox::before {
  display: block;
}
input[type="checkbox"]:checked ~ label {
  background-color: var(--LightBlue);
  border: 2px solid var(--PurplishBlue);
}
label .card__information {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
}

.card__information .card__title {
  color: var(--MarineBlue);
  font-weight: 700;
  font-size: 1.125rem;

  margin-bottom: 4px;
}
.card__information .card__details {
  color: var(--Coolgray);
}
.card__price {
  color: var(--PurplishBlue);
}
@media (max-width: 430px) {
  label {
    gap: 1rem;
  }

  .card__information .card__title {
    font-size: 1rem;
    margin-bottom: 2px;
  }
  .card__information .card__details,
  .card__price {
    font-size: 13px;
  }
}
@media (min-width: 1000px) {
  .card__wrapper {
    height: 70%;
    grid-template-rows: 95px 95px 95px;
  }
}
</style>
