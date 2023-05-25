<script setup lang="ts">
    import { useRoute } from 'vue-router';
    
    const { locale, t } = useI18n();

    const route = useRoute();
    const { id } = route.params;

    const { data: project } = await useFetch(() => `/api/projects?id=${id}`);
    if (!project.value) {
        throw createError({ statusCode: 404, fatal: true})
    }
   
    // Try to find a better solution!
    watch(() => route.name, (newValue, oldValue): void => {
        if(newValue === 'index' && oldValue !== 'index') {
            location.reload();
        }
    });

</script>

<template>
    <main :class="{'lang-ar': locale === 'ar'}">
        <Project :project="project" />
    </main>
</template>

<style lang="scss" scoped>
      main.lang-ar {
        font-family: 'Cairo', sans-serif;
    }
</style>