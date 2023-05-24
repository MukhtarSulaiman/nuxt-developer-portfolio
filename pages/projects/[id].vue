<script setup lang="ts">
    import { useSetMetaData } from '~/composables/onPageMetaData';
    
    const { locale, t } = useI18n();

    onMounted(() => {
        useSetMetaData('portfolio.meta.page_title', 'portfolio.meta.page_description')
    });

</script>

<template>
    <main :class="{'lang-ar': locale === 'ar'}">
        <Project />
    </main>
</template>

<style lang="scss" scoped>
      main.lang-ar {
        font-family: 'Cairo', sans-serif;
    }
</style>