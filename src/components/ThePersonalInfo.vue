<script setup>
import { onMounted } from "vue";
import { useStepStore } from "../../store/store.js";
import { storeToRefs } from "pinia";
import TheHeader from "./TheHeader.vue";
import TheButtonsForm from "./TheButtonsForm.vue";

const store = useStepStore();

const { numberPhone } = storeToRefs(store);

onMounted(() => {
  if (
    store.person.name !== "" &&
    store.person.email !== "" &&
    store.person.number !== ""
  ) {
    store.name = store.person.name;
    store.email = store.person.email;
    numberPhone.value = store.person.number;
  }
});
</script>
<template>
  <section class="form__wrapper">
    <TheHeader>
      <template v-slot:title>Personal info</template>
      <template v-slot:description
        >Please provide your name, email adress and phone number.</template
      >
    </TheHeader>

    <form class="form">
      <div class="form__control">
        <label for="name">name</label>
        <small
          class="form__message"
          :class="{ active: store.isActiveMessageName }"
          >{{ store.errorMessageName }}</small
        >
      </div>
      <input
        class="input"
        :class="{ error: store.isErrorName }"
        id="name"
        type="text"
        placeholder="e.g. Stephen King"
        v-model.trim="store.name" />
      <div class="form__control">
        <label for="email">Email Adress</label>
        <small
          class="form__message"
          :class="{ active: store.isActiveMessageEmail }"
          >{{ store.errorMessageEmail }}</small
        >
      </div>

      <input
        class="input"
        :class="{ error: store.isErrorEmail }"
        id="email"
        type="text"
        placeholder="e.g. stephenking@lorem.com"
        @input="checkInputEmail"
        v-model="store.email" />

      <div class="form__control">
        <label for="number">Phone Number</label>
        <small
          class="form__message"
          :class="{ active: store.isActiveMessageNumberPhone }"
          >{{ store.errorMessageNumberPhone }}</small
        >
      </div>

      <input
        class="input"
        :class="{ error: store.isErrorNumberPhone }"
        id="number"
        type="text"
        v-model="numberPhone"
        maxlength="15"
        placeholder="e.g. +1 234 567 890" />
    </form>
  </section>
  <TheButtonsForm />
</template>

<style scoped>
.form__control {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
label {
  display: block;

  text-transform: capitalize;
  font-weight: 500;

  color: var(--MarineBlue);

  margin-bottom: 8px;
}
small {
  color: var(--strawberryred);
  font-size: 1rem;
  font-weight: 500;
  display: none;
}

.form__title {
  font-size: 1rem;
  font-weight: 700;

  color: var(--MarineBlue);

  margin-bottom: 1rem;
}
.form__description {
  font-size: 16px;
  line-height: 1.5;
  max-width: 26ch;
  color: var(--Coolgray);

  margin-bottom: 1rem;
}

.input {
  width: 100%;
  height: 50px;

  border-radius: 7px;
  border: 1px solid var(--Lightgray);

  outline: none;

  padding-left: 18px;

  margin-bottom: 1.3rem;
}
.input::placeholder {
  color: var(--Coolgray);
  font-weight: 700;
  font-size: 1rem;
}
.error {
  border: 1px solid var(--strawberryred);
}
.active {
  display: block;
}
</style>
