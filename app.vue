<!-- @format -->

<script setup lang="ts">
     import { useI18n } from 'vue-i18n';
     
     const { locale, t} = useI18n();

     function changLangDirection() {
          locale.value === 'ar' ?
               document.body.style.direction = 'rtl'
               : document.body.style.direction = 'ltr';
     }

     watch(locale, () => {
          changLangDirection();
     });

</script>

<template>
     <NuxtLayout>
          <NuxtPage />
     </NuxtLayout>
</template>

<style lang="scss">
     :root {
          --color-page-background: #{$color-brand-tertiary};
          --color-text-icon: #{$color-text-primary};
     }

     .dark-mode,
     .dark-mode :is(i, .dynamic-description) {
          @include color-mode(
               var(--color-text-icon),
               var(--color-page-background)
          );
     }

     .light-mode,
     .light-mode :is(i, .dynamic-description) {
          @include color-mode(
               var(--color-page-background),
               var(--color-text-icon)
          );
     }

     html {
          transition: all 0.7s;
     }

     body {
          font-family: 'Raleway', sans-serif;
     }

     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }

     main {
          margin: 0 1.2rem;
          // overflow: hidden;
     }

     a {
          text-decoration: none;
     }

     ul {
          list-style: none;
     }

     @media only screen and (min-width: 640px) {
          main {
               margin: 0 4rem;
          }
     }
</style>