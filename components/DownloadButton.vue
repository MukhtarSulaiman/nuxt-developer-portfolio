<script setup lang="ts">

    defineProps<{
        bottom: string
    }>();

      const downLoadResume = () => {
        window.open(
            '/files/cv-mukhtar_sulaiman-fr.pdf',
            '_blank',
            'fullscreen=yes'
        );
    }
</script>


<template>
     <button @click="downLoadResume">{{ $t('download_resume')}}</button>
</template>


<style lang="scss" scoped>
    button {
        @include custom-btn(200px);
        position: absolute;
        left: 50%;
        bottom: v-bind(bottom);
        transform: translateX(-50%);
    }
</style>