<!-- @format -->
<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    
    const { t } = useI18n();

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
    <main>
        <Hero />
        <Skills />
        <Portfolio />
        <Education />
    </main>
</template>