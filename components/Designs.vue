<script setup lang="ts">
    import { Design } from '~/types';

    const mpHouseLocation = 'https://www.figma.com/file/3KG2MkqGBkEhPP2sr901fJ/MP-House-Location?node-id=0%3A1&t=coUHFA0jBYSxwroR-1';
    const zoolDeveloper = 'https://www.figma.com/file/5Ndy1AFfl9WDCWYOsNxFDE/MyPortfolio?node-id=1634%3A988&t=rKI5xE0uNlbuiphP-0';
    const kidekchan = 'https://www.figma.com/file/Nicp78MoNcT6FuofKglkEy/kidekchan?node-id=0%3A1&t=28jmmSPwn1ZwtrRb-1';

    const designs: Design[] = [
        { url: 'flyer-kidekchan', link: kidekchan },
        { url: 'mp-house-location',  link: mpHouseLocation },
        { url: 'baraka-saken' },
        { url: 'iftar-ramadan' },
        { url: 'cultural-day' },
        { url: 'zool-developer',  link: zoolDeveloper },
        { url: 'hinda-altahir' },
        { url: 'business-card' },
    ]

    const openFileInNewTap = (src: string, link?: string): void => {
        if(link) {
            const a = document.createElement('a');
            const url = a.href = link;
            window.open(url, '_blank')
        } else {
            window.open(
                `/files/designs/${src}.png`,
                '_blank',
                'fullscreen=yes'
            );
        }
    }

</script>


<template>
    <div class="parent-container">
        <div class="grid-container">
            <div class="grid-container__file-group" v-for="(design , index) in designs"  :key="index">
                <img :src="`/files/designs/${design.url}.png`" :alt="$t('portfolio.design_project.alt_image', {project: design.url})">
                <div class="icon-wrapper" role="button" @click="openFileInNewTap(design.url, design.link)">
                    <Icon name="new-tap" size="20" class="tap-icon"/>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .parent-container {
        margin-top: 3rem;
        @include flexbox;
    }
    .grid-container {
        width: 100%;
        display: grid;
        grid-column: repeat(1, 1fr);
        justify-items: center;
        gap: 1rem;

        &__file-group {
            position: relative;
            overflow: hidden;

            img {
                max-width: 230px;
                height: 100%;

                object-position: top;
                object-fit: cover;
            }

            .icon-wrapper {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                cursor: pointer;
                @include flexbox;
                @include animation-on-scroll(0, $transform-value: translateY(20%));

                .tap-icon {
                    color: $color-text-primary !important;
                }
            }

            &:hover .icon-wrapper {
                @include animation-on-scroll(1, $transform-value: translateY(0),  $transition-duration:  .8s);
                @include gradient(to top, .6);
            }
        }

        @media screen and (min-width: 768px) {
           
            grid-template-columns: repeat(6, 1fr) !important;
            grid-auto-rows: minmax(50px, auto);
            justify-items: normal !important;
            width: 700px !important;
            height: 40vh;

            &__file-group {
                img {
                    width: 100%;
                    max-width: 100% !important;
                    height: 100%;
                    object-position: top;
                    object-fit: cover;
                }
            }

            &__file-group:nth-child(1) {
                grid-column: 1 / 3;
                grid-row:  1 / 5 ;
            }
            &__file-group:nth-child(2) {
                grid-column: 3 / 5;
                grid-row: 1 / 3;
            }
            &__file-group:nth-child(3) {
                grid-column: 5 / 7;
                grid-row: 1 / 5 ;
            }
            &__file-group:nth-child(4) {
                grid-column: 1 / 3;
                grid-row: 5 / 7;
            }
            &__file-group:nth-child(5) {
                grid-column: 3 / 5;
                grid-row:  3 / 7;
            }
            &__file-group:nth-child(6) {
                grid-column: 5 / 6;
                grid-row: 5 / 6;
            }
            &__file-group:nth-child(7) {
                grid-column: 6 / 7;
                grid-row: 5 / 7;
            }
            &__file-group:nth-child(8) {
                grid-column: 5 / 6;
                grid-row: 6 / 7;
            }
        }

        @media screen and (min-width: 992px) {
            width: 900px !important;
        }
    } 

</style>