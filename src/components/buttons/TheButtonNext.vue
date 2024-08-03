<script setup>
import { watch } from "vue";
import { useStepStore } from "@/../store/store.js";
import { storeToRefs } from "pinia";

const store = useStepStore();
const regexName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
const regexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
const regexNumberPhone = /(\+[0-9]{2})\s([0-9]{3})\s([0-9]{3})\s([0-9]{3})/;
const regexMaskNumberPhone = /([0-9]{2,3})([0-9]{3})([0-9]{3})([0-9]{3})/g;

const { numberPhone } = storeToRefs(store);

function checkInputName() {
  if (store.name == "" || store.name == null) {
    store.isErrorName = true;
    store.isActiveMessageName = true;
    store.errorMessageName = "Name is required";
    store.nameCorrect = false;
  } else if (store.name.length <= 4) {
    store.isErrorName = true;
    store.isActiveMessageName = true;
    store.errorMessageName = "Name at least 3 letters";
    store.nameCorrect = false;
  } else if (store.name.match(regexName)) {
    store.isErrorName = false;
    store.isActiveMessageName = false;
    store.nameCorrect = true;
  } else {
    store.isErrorName = true;
    store.isActiveMessageName = true;
    store.errorMessageName = "Invalid name";
    store.nameCorrect = false;
  }
}
function checkInputEmail() {
  if (store.email == "") {
    store.isErrorEmail = true;
    store.isActiveMessageEmail = true;
    store.emailCorrect = false;
  } else if (store.email.match(regexEmail)) {
    store.isErrorEmail = false;
    store.isActiveMessageEmail = false;
    return (store.emailCorrect = true);
  } else {
    store.isErrorEmail = true;
    store.isActiveMessageEmail = true;
    store.errorMessageEmail = "Invalid email";
  }
}

watch(numberPhone, () => {
  const numeroFormatado = numberPhone.value.replace(
    regexMaskNumberPhone,
    "+$1 $2 $3 $4"
  );
  return (numberPhone.value = numeroFormatado);
});

function verificarInputPhoneNumber() {
  if (numberPhone === "") {
    store.isErrorNumberPhone = true;
    store.isActiveMessageNumberPhone = true;
    store.errorMessageNumberPhone = "Number Phone is required";
  } else if (numberPhone.value.match(regexNumberPhone)) {
    store.isErrorNumberPhone = false;
    store.isActiveMessageNumberPhone = false;
    store.NumberPhoneCorrect = true;
  } else {
    store.isErrorNumberPhone = true;
    store.isActiveMessageNumberPhone = true;
    store.NumberPhoneCorrect = false;
    store.errorMessageNumberPhone = "Invalid number Phone";
  }
}

function checkInputs() {
  checkInputName();
  checkInputEmail();
  verificarInputPhoneNumber();
  if (store.NumberPhoneCorrect && store.nameCorrect && store.emailCorrect) {
    store.step++;
  }
}
</script>
<template>
  <button class="button button--next" @click="checkInputs">Next Step</button>
</template>

<style scoped>
.button {
  font-family: "Ubuntu", sans-serif;
  font-size: 1rem;
  font-weight: 400;

  border: none;
  padding: 15px 20px;

  cursor: pointer;

  transition: 700ms;
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
</style>
