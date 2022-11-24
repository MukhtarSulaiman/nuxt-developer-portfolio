<script setup lang="ts">
import { Network } from '../types/index';

function ariaLabelNetwork(iconName: string): string {
    return `Lien vers le compte ${iconName} de Mukhtar`
}

const socialNetworks: Network[] = [
    {
        id: 1,
        icon: 'linkedin',
        link: 'https://linkedin.com/in/mukhtar-sulaiman',
        ariaLabel: ariaLabelNetwork('linkedin'),
    },
    {
        id: 2,
        icon: 'github',
        link: 'https://github.com/MukhtarSulaiman',
        ariaLabel: ariaLabelNetwork('github'),
    },
    {
        id: 3,
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCSvuJVJdF3NDsg9CjeM6I-Q',
        ariaLabel: ariaLabelNetwork('youtube'),
    },
    {
        id: 4,
        icon: 'twitter',
        link: 'https://twitter.com/zooldeveloper',
        ariaLabel: ariaLabelNetwork('twitter'),
    },
]


</script>

<template>
    <div class="network-container">
        <div v-for="network in socialNetworks" class="network-container__icon-wrapper">
            <NuxtLink :to="network.link" target="_blank"
                :aria-label="network.ariaLabel">
                <Icon :name="'mdi:' + network.icon" aria-hidden="true"/>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>

</style>