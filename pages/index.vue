<!-- @format -->
<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    
    const { locale, t } = useI18n();

    onMounted(() => {
        useHead({
            title: t('main_title', { pipe: '|' }),
            meta: [
                { name: 'description', content: t('main_description', { pipe: '|' }) },
            ],
        }); 
    });

</script>

<template>
    <main :class="{'lang-ar': locale === 'ar'}">
        <Hero />
        <Skills />
        <Portfolio />
        <Education />
        <Contact />
        <Footer />
    </main>
</template>

<style lang="scss" scoped>
    main.lang-ar {
        font-family: 'Cairo', sans-serif;;
    }

</style>