<script setup lang="ts">
    const { locales, locale, setLocale } = useI18n();

    const props = defineProps<{
        error: Object
    }>();

    const handleError = () => clearError({ redirect: '/' });
</script>
    
<template>
    <div :class="['error-page', {'lang-ar': locale === 'ar'}]">
        <div>
            <h1>{{ $t('errors.title') }} {{ props.error.statusCode }}</h1>
            <div v-if="props.error.statusCode === 500">
                <h2>{{ $t('errors.server_side.main_message') }}</h2>
                <p>{{ $t('errors.server_side.additional_info') }}</p>
            </div>
            <div v-else-if="props.error.statusCode === 404">
                <h2>{{ $t('errors.client_side.main_message') }}</h2>
                <p>{{ $t('errors.client_side.additional_info') }}</p>
            </div>
            <div v-else>
                <h2>{{ $t('errors.else.main_message') }}</h2>
                <p>{{ $t('errors.else.additional_info') }}</p>
            </div>
            <button @click="handleError" :class="{'light-mode': $colorMode.preference === 'light'}">
                {{ $t('errors.btn') }}
            </button>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .error-page.lang-ar {
        font-family: 'Cairo', sans-serif;
    }
    .error-page {
       @include flexbox;
        width: 100vw;
        height: 100vh;

        &:first-child {
            padding: 1rem;
            text-align: center;     

            h1 {
                margin-bottom: 1rem;
                color: lighten(#ff0000, 20);
                font-weight: 600;
            }

            h2 {
                margin-bottom: .5rem;
                font-family: 'Raleway', sans-serif;
                font-size: 1.8rem;
                font-weight: 600;
                text-transform:initial;
            }

            button {
                margin: 1.5rem auto;
                padding: 10px;
                border: 1px solid;
                background: none;
                border-radius: 5px;
                color: $color-text-primary;
                cursor: pointer;

                &:hover {
                    border-color: $color-brand-secondary;
                }
            }
            button.light-mode {
                color: $color-text-inverted;
            }
        }
    }
</style>