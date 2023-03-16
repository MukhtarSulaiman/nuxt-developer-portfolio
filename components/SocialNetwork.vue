<script setup lang="ts">
   import { socialNetworks } from '~/content/db';

</script>

<template>
    <div class="network-container">
        <div v-for="network in socialNetworks" :key="network.id" class="network-container__icon-wrapper">
            <NuxtLink :to="network.link" target="_blank"
                :aria-label="$t('network_aria_label', { iconName: network.icon })">
                <i class=" dark-mode light-mode">
                    <Icon :name="network.icon" aria-hidden="true"/>
                </i>
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
</style>