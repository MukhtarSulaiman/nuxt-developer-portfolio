<!-- @format -->
<script setup lang="ts">
    import { useScrollingSpy } from '~/composables/onSectionObserver';
    import { useSetMetaData } from '~/composables/onPageMetaData';
    
    const { locale, t } = useI18n();
    
    onMounted(() => {
        useSetMetaData('main_title', 'main_description');
        useScrollingSpy();
    });

</script>

<template>
    <main :class="{'lang-ar': locale === 'ar'}">
        <Cursor />
        <Hero />
        <Skills />
        <Portfolio />
        <!-- <Education /> -->
        <Contact />
    </main>
</template>

<style lang="scss" scoped>
    main.lang-ar {
        font-family: 'Cairo', sans-serif;
    }

</style>