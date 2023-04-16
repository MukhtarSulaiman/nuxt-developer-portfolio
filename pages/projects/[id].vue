<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
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