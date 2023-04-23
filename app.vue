<!-- @format -->

<script setup lang="ts">
     
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
          scroll-behavior: smooth;
     }

     .dark-mode,
     .dark-mode :is(header, nav.active, i, .dynamic-description) {
          @include color-mode(
               var(--color-text-icon),
               var(--color-page-background)
          );
     }

     .light-mode,
     .light-mode :is(header, nav.active, i, .dynamic-description) {
          @include color-mode(
               var(--color-page-background),
               var(--color-text-icon)
          );
     }

     .dark-mode :is(a, .btn-see-source-code, input, textarea) {
          color: $color-text-primary !important;
     }

     .light-mode :is(a, .btn-see-source-code, input, textarea) {
          color: $color-text-inverted !important;
     }

     html {
          transition: all 0.7s;
     }

     body {
          font-family: 'Raleway', sans-serif;
          max-width: 1728px;
          margin: 0 auto;
          // position: relative;
     }

     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }

     main {
          padding: 0 1.2rem;
          overflow: hidden;
     }

     section {
          margin-top: 10rem;
          scroll-margin-top: 5rem !important;
     }

     a {
          text-decoration: none;
     }

     ul {
          list-style: none;
     }

     // ----------------------------------------
     // These selectors have declared in Header components. Couldn't target them inside their component !!!
     .selector-options {
          width: 100%;
          padding: 15px 0 5px;
          position: absolute;
          top: 0;
          background-color: darken($color-brand-secondary, 20);
          // direction: ltr;  
     }

     .selector-options li {
          @include flexbox();
          height: 35px;
          padding: 0 15px;
          font-size: 1rem;
          cursor: pointer;
          transition: background .3s ease;
          color: $color-text-primary;

          &:hover {
               background-color: $color-brand-secondary;
          }
     }
     // ------------------------------------

     .page-enter-active,
     .page-leave-active {
          transition: all 0.4s;
     }
     .page-enter-from,
     .page-leave-to {
          opacity: 0;
          filter: blur(1rem);
     }

     @media only screen and (min-width: 640px) {
          main {
               padding: 0 4rem;
          }
     }
</style>