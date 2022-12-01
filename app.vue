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
     .dark-mode :is(i) {
          @include color-mode(
               var(--color-text-icon), var(--color-page-background)
          );
     }

     .light-mode,
     .light-mode :is(i) {
         @include color-mode(
               var(--color-page-background), var(--color-text-icon)
          );
     }

     html {
          transition: all .7s;
     }
     
     body {
          font-family: 'Raleway', sans-serif;
     }

     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }

     a {
          text-decoration: none;
     }

     ul {
          list-style: none;
     }
</style>