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

     html {
          transition: all .7s;
     }
     
     body {
          font-family: 'Raleway', sans-serif;
          // color: var(--color-text-icon);
          // background-color: var(--color-page-background);
     }

     .dark-mode {
          color: var(--color-text-icon);
          background-color: var(--color-page-background);
     }

     .light-mode {
          color: var(--color-page-background);
          background-color: var(--color-text-icon);
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