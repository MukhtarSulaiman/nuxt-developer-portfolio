<script setup lang="ts">
    import { Network } from '../types/index';

    const socialNetworks: Network[] = [
        {
            id: 1,
            icon: 'linkedin',
            link: 'https://linkedin.com/in/mukhtar-sulaiman',
        },
        {
            id: 2,
            icon: 'github',
            link: 'https://github.com/MukhtarSulaiman',
        },
        {
            id: 3,
            icon: 'youtube',
            link: 'https://www.youtube.com/channel/UCSvuJVJdF3NDsg9CjeM6I-Q',
        },
        {
            id: 4,
            icon: 'twitter',
            link: 'https://twitter.com/zooldeveloper',
        },
    ]

</script>

<template>
    <div class="network-container">
        <div v-for="network in socialNetworks" :key="network.id" class="network-container__icon-wrapper">
            <NuxtLink :to="network.link" target="_blank"
                :aria-label="$t('network_aria_label', { iconName: network.icon })">
                <i class=" dark-mode light-mode"><Icon :name="'mdi:' + network.icon" aria-hidden="true"/></i>
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .network-container {
        display: none;

        @media screen and (min-width: 1024px) {
            @include flexbox($flex-direction: column);
            @include contact-and-network-icon(7px);
            height: inherit;
            position: relative;
            // opacity: 0;
            // @include animation(2s, 1.7s) {
            // 	0% {
            // 		opacity: 0;
            // 		transform: translateX(-118px);
            // 	}
            // 	20% {
            // 		opacity: 0.5;
            // 	}
            // 	100% {
            // 		opacity: 1;
            // 		transform: translateX(0px);
            // 	}
            // }
            // display: initial;

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
</style>