<!-- @format -->
<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    
    const useLocal = useI18n();
   
    onMounted(() => {
        useHead({
            title: useLocal.t('main_title', { pipe: '|' }),
            meta: [
                { name: 'description', content: useLocal.t('main_description', { pipe: '|' }) },
            ],
        });
        
    })

</script>

<template>
     <main>
         <Hero />
     </main>
</template>

<style lang="scss" scoped>
</style>