<script setup></script>
<template>
  <section class="completed__wrapper">
    <img src="../assets/images/icon-thank-you.svg" alt="icon thank you" />
    <div class="completed__details">
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  </section>
</template>

<style scoped>
.completed__wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
img {
  display: block;
  height: 100px;

  margin-bottom: 2rem;
}
.completed__details {
  text-align: center;
}
.completed__details h1 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--MarineBlue);

  margin-bottom: 1.5rem;
}
.completed__details p {
  max-width: 50ch;
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--Coolgray);
  line-height: 1.4;
}
</style>
