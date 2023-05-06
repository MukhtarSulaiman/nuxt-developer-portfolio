
<script setup lang="ts">

    const { locale } = useI18n();

    const year: number = new Date().getFullYear();

</script>

<template>
    <footer>
        <div>
            <small v-if="locale === 'en'">&copy; {{ $t('footer.copyright') }} {{ year }} - Zool Developer</small>
            <small v-else>&copy; {{ year }}  Zool Developer - {{ $t('footer.copyright') }}</small>
            <small> 44300 Nantes, France</small>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        width: inherit;
        margin: 6rem 1.2rem 0;
        padding: 2rem 0;
        border-top: 2px solid darken($color-text-primary, 25);
        
        div:first-child {
            height: 80px;
            @include flexbox(space-around, $flex-direction: column);

            small {
                // display: block;
                font-size: 1rem;
                font-weight: 200 !important;
            }
        }
        @media only screen and (min-width: 640px) {
            margin: 6rem 4rem 0 !important;
        }
    }
</style>