# Frontend Mentor - Multi-step form App

![](./src/assets/design/desktop-design-step-1.jpg)

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

<p align="center">
    <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
    <img src="https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" />
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
    
</p>
## 📖 Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Environment Configuration](#Environment-Configuration)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## 🔭 Overview

### 📌 The challenge

Users should be able to:

Complete each step of the sequence

- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:

  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

  ## ⚙️ Environment Configuration

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### 📷 Screenshot

#### 🖥️ Desktop

![](./src/assets/design/desktop-preview.jpg)

![](./src/assets/design/desktop-design-step-2-monthly.jpg)

![](./src/assets/design/desktop-design-step-3-monthly.jpg)

![](./src/assets/design/desktop-design-step-4-monthly.jpg)

![](./src/assets/design/desktop-design-step-5.jpg)

#### 📱 Mobile

![](./src/assets/design/mobile-design-step-1.jpg)

![](./src/assets/design/mobile-design-step-2-monthly.jpg)

![](./src/assets/design/mobile-design-step-3-monthly.jpg)

![](./src/assets/design/mobile-design-step-4-monthly.jpg)

![](./src/assets/design/mobile-design-step-5.jpg)

### 🔗 Links

Code:

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)]([[https://your-solution-url.com](https://github.com/wan0805/mult-step-form)](https://github.com/wan0805/mult-step-form))

Live:

[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)]([[https://your-live-site-url.com](https://mult-step-form-eight.vercel.app/)](https://mult-step-form-eight.vercel.app/))

## ⚙️ My process

### 🛠️ Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Position
- Mobile-first workflow
- [Vue 3](https://vuejs.org/) - The Progressive framework
- [Pinia](https://pinia.vuejs.org/) - store library for Vue

### 🎓 What I learned

the use of the tag slot because with this tag I can reuse in several the styling and just change the information contained

To see how you can add code snippets, see below:

```html
<template>
  <header>
    <h1 class="form__title">
      <slot name="title"> </slot>
    </h1>

    <p class="form__description">
      <slot name="description"></slot>
    </p>
  </header>
</template>
```

```html
<template>
  <section class="form__wrapper">
    <TheHeader>
      <template v-slot:title>Personal info</template>
      <template v-slot:description
        >Please provide your name, email adress and phone number.</template
      >
    </TheHeader>
  </section>
</template>
```

## 🤵🏿Author

[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3F54A3.svg?style=for-the-badge&logo=Frontend-Mentor&logoColor=white)](https://www.frontendmentor.io/profile/wan0805)

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wanderson-duarte-a9778711b/)

## 🙌 Acknowledgments

I want to thank God and my family for all the support
