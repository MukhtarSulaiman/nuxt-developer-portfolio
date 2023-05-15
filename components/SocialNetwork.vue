<script setup lang="ts">
   import { Network } from '~/types';

   const { locales, locale, setLocale } = useI18n();

    const socialNetworks: Network[] = [
        { id: 1, icon: 'linkedin', link: 'https://linkedin.com/in/mukhtar-sulaiman' },
        { id: 2, icon: 'github', link: 'https://github.com/MukhtarSulaiman' },
        { id: 3, icon: 'youtube', link: 'https://www.youtube.com/channel/UCSvuJVJdF3NDsg9CjeM6I-Q' },
        { id: 4, icon: 'twitter', link: 'https://twitter.com/zooldeveloper' },
    ]

    const props = defineProps<{
        classElement?: string
    }>()

</script>

<template>
    <div :class="['network-container', props.classElement, {'lang-ar': locale === 'ar'}]">
        <div v-for="network in socialNetworks" :key="network.id" class="network-container__icon-wrapper">
            <NuxtLink :to="network.link" target="_blank" :aria-label="$t('network_aria_label', { iconName: network.icon })">
                <i class=" dark-mode light-mode">
                    <Icon :name="network.icon" aria-hidden="true"/>
                </i>
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>


    .network-container {
        @include contact-and-network-icon(7px);
    }
    .network-container.hero__column-layout {
        display: none;

        @media screen and (min-width: 1024px) {
            @include flexbox($flex-direction: column);
            height: inherit;
            position: relative;
            opacity: 0;
            @include top-level-animation($dely: 1.7s, $translate: -118px);

            &::before,
            &::after {
                content: '';
                width: 2px;
                height: 130px;
                position: absolute;
                @include gradient;
            }

            &::before {
                top: 0px;
            }

            &::after {
                bottom: 0px;
            }

            &__icon-wrapper {
                margin: .6rem 0;
            }
        }
	}

    .network-container.hero__column-layout.lang-ar {
        @include top-level-animation($dely: 1.7s, $translate: 118px);
    }

    .network-container.contact__row-layout {
        @include flexbox(flex-start !important);
        gap: 2rem;
        
        &::before, &::after {
            display: none !important;
        }
    }
</style>