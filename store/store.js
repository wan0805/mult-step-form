import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";

export const useStepStore = defineStore("store", () => {
  const step = ref(1);

  const name = ref("");
  const isErrorName = ref(false);
  const isActiveMessageName = ref(false);
  const errorMessageName = ref("This field required");
  const nameCorrect = ref(false);

  const email = ref("");
  const isErrorEmail = ref(false);
  const isActiveMessageEmail = ref(false);
  const errorMessageEmail = ref("This field required");
  const emailCorrect = ref(false);

  const numberPhone = ref("");
  const isErrorNumberPhone = ref(false);
  const isActiveMessageNumberPhone = ref(false);
  const errorMessageNumberPhone = ref("This field required");
  const NumberPhoneCorrect = ref(false);

  const person = reactive({
    name: "",
    email: "",
    phone: "",
  });

  const planName = ref("Arcade");
  const PlanPrice = ref(9);
  const planType = ref("Monthly");

  const isCardArcade = ref(true);
  const isCardAdvanced = ref(false);
  const isCardPro = ref(false);

  const isMontlhyActive = ref(true);
  const isYearlhyActive = ref(false);

  const isCircleRight = ref(false);

  const pickUp = ref([]);

  const totalValueOfPickups = computed(() => {
    let total = 0;

    pickUp.value.forEach((item) => {
      total += item.price;
    });

    return total;
  });

  const totalValueOfThePlan = computed(() => {
    const discountOnTheAnnualPlan = 10;
    if (isYearlhyActive.value) {
      return (
        PlanPrice.value * discountOnTheAnnualPlan +
        totalValueOfPickups.value * discountOnTheAnnualPlan
      );
    } else {
      return PlanPrice.value + totalValueOfPickups.value;
    }
  });

  return {
    step,
    name,
    isErrorName,
    isActiveMessageName,
    errorMessageName,
    nameCorrect,
    email,
    isErrorEmail,
    isActiveMessageEmail,
    errorMessageEmail,
    emailCorrect,
    numberPhone,
    isErrorNumberPhone,
    isActiveMessageNumberPhone,
    errorMessageNumberPhone,
    NumberPhoneCorrect,
    person,
    planName,
    PlanPrice,
    planType,
    isCardArcade,
    isCardAdvanced,
    isCardPro,
    isMontlhyActive,
    isYearlhyActive,
    isCircleRight,
    pickUp,
    totalValueOfPickups,
    totalValueOfThePlan,
  };
});
