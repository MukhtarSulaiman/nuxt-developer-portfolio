<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    
    const { locale, t } = useI18n();

    onMounted(() => {
        useHead({
            title: t('portfolio.meta.page_title', { pipe: '|' }),
            meta: [
                { name: 'description', content: t('portfolio.meta.page_description', { pipe: '|' }) },
            ],
        }); 
    });

</script>

<template>
    <main :class="{'lang-ar': useI18n().locale.value === 'ar'}">
        <Project />
    </main>
</template>

<style lang="scss" scoped>
      main.lang-ar {
        font-family: 'Cairo', sans-serif;
    }
</style>