<script setup lang="ts">
    import { useWatchRoute } from "~/composables/onWatchRoute";

    useWatchRoute('blogs');
</script>

<template>
    <main>
       <h1>{{ $t('blogs.main_title') + ' 😉' }}</h1>
    </main>
</template>


<style lang="scss" scoped>
    main {
        width: 100vw;
        height: 100vh;

        h1 {
            margin-top: 12rem;
            font-size: 1.5rem;
            text-align: center;
            font-weight: 200;
            opacity: .8;
        }
    }
</style>