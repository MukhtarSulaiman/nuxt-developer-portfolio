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
                <Icon :name="'mdi:' + network.icon" aria-hidden="true"/>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>

</style>