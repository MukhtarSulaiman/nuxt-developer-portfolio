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

        
        const observer = new IntersectionObserver(enteries => {
                enteries.forEach(entery => {
                    entery.target.classList.toggle('show', entery.isIntersecting);
                });
            },
            { threshold: 0.3, }
        );
        // This slector is declared in Skills component
        document.querySelectorAll(`.skills-container__content`).forEach(selector => {
            observer.observe(selector);
        });
    });
</script>

<template>
    <main>
        <Hero />
        <Skills />
    </main>
</template>