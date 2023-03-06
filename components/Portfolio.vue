<script setup lang="ts">

import { Projects } from '../types/index';

    const projects: Projects[] = [
        {
            id: 1,
            title: 'Réservia',
            type: 'portfolio.project1.type',
            imgUrl: 'hotel.jpg',
            description: 'portfolio.project1.description',
            year: '07/2021'
        },
        {
            id: 2,
            title: 'Ohmyfood',
            type: 'portfolio.project2.type',
            imgUrl: 'restaurant.jpg',
            description: 'portfolio.project2.description',
            year: '08/2021'
        },
        {
            id: 3,
            title: 'La Chouette',
            type: 'portfolio.project3.type',
            imgUrl: 'seo.jpg',
            description: 'portfolio.project3.description',
            year: '09/2021'
        },
        {
            id: 4,
            title: 'Orinoco',
            type: 'portfolio.project4.type',
            imgUrl: 'camera.jpg',
            description: 'portfolio.project4.description',
            year: '10/2021'
        },
        {
            id: 5,
            title: 'Hot Take',
            type: 'portfolio.project5.type',
            imgUrl: 'like.jpg',
            description: 'portfolio.project5.description',
            year: '11/2021'
        },
        {
            id: 6,
            title: 'Groupomania',
            type: 'portfolio.project6.type',
            imgUrl: 'media.jpg',
            description: 'portfolio.project6.description',
            year: '01/2022'
        },
    ]

</script>


<template>
    <section id="portfolio">
        <div class="portfolio-headings">
            <h2>{{ $t('portfolio.headings.main') }}</h2>
            <div class="portfolio-headings__navigational-titles">
                <h3>{{ $t('portfolio.headings.navigational_title', 1) }}</h3>
                <h3>{{ $t('portfolio.headings.navigational_title', 2) }}</h3>
            </div>
        </div>
        <div class="portfolio-container">
            <div 
                v-for="project in projects"  :key="project.id"
                class="portfolio-container__project-wrapper">
                <div class="portfolio-container__img-preview">
                    <div 
                        :class="['portfolio-container__img-holder', {'light-mode': $colorMode.preference === 'light'}]"
                        :style="{ backgroundImage: `url(/images/projects/previews/${project.imgUrl})`}">
                    </div>
                </div>
                <div class="portfolio-container__project-details">
                    <h4>{{ project.title }}</h4>
                    <div class="portfolio-container__sub-heading-description">
                        <h5>{{ $t(project.type) }}</h5>
                        <p>{{ $t(project.description) }}</p>
                    </div>
                    <button>{{ $t('portfolio.btn_see_more') }}</button>
                </div>
                <small>{{ project.year }}</small>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    section {
        .portfolio-headings {
            @include flexbox(space-between, flex-end);

            &__navigational-titles {
                width: 180px;
                margin-bottom: 2rem;
                @include flexbox(space-between);

                h3 {
                    font-size: 1.05rem;
                    border-bottom: 2px solid transparent;
                    cursor: pointer;
        
                    &:hover {
                        border-image: linear-gradient(to left, $color-brand-primary, $color-brand-secondary);
                        border-image-slice: 1;
                    }
                }
            }
        }

        .portfolio-container {
            @include flexbox(space-around);
            flex-wrap: wrap;
            column-gap:  2.3rem;
            row-gap:  1.5rem;
            margin-top: 2.5rem;

            &__project-wrapper {
                width: 410px;
                height: 320px;
                position: relative;
                direction: ltr !important;

                small {
                    position: absolute;
                    left: -36px;
                    top:40%;
                    transform: rotate(-90deg);
                    transition: all .5s;
                }

                &::before  {               
                    @include line(.6px, 45%, -10px, $bottom: 0);
                    background: darken($color-text-primary, 50);
                    transition: all .5s;
                }

                &:hover {
                    .portfolio-container__img-holder {
                        transform: scale(1.1)
                    }

                    small {
                        top: 30%;
                    }

                    &::before {
                        @include line(1.3px, 55%, -10px, $bottom: 0);
                        @include gradient(to top);
                    }
                }
            }

            &__img-preview {
                width: 67%;
                height:inherit;
                overflow: hidden; 
            }

            &__img-holder {
                width: 100%;
                height:inherit;            
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 30% 20%;
                transition: all .5s;
                box-shadow: inset -50px 0px 36px -28px $color-brand-tertiary;
            }

            &__img-holder.light-mode {
                box-shadow: inset -50px 0px 36px -28px $color-text-primary;
            }

            &__project-details {
                position: absolute;
                top: 0;
                right: 0;
                transform: translateY(15%);
                width: 150px;
                @include flexbox(space-between, left, $flex-direction: column);

                h4 {
                    font-family:  'Raleway', sans-serif;
                    font-size: 1.3rem;
                    font-weight:700;
                    text-transform: uppercase;
                }
            }

            &__sub-heading-description {
                margin: 2rem 0;

                h5 {
                    margin-bottom: .3rem;
                }

                p {
                    font-weight: 300;
                }
            }

            button {
                @include custom-btn(150px, 35px, light);
                border-radius: 10px;
                background: $color-brand-secondary;
                background-size: 200%;
            }

            @media screen and (min-width: 576px) {
                &__img-preview {
                    width: 60%;
                }

                &__project-details {
                    width: 180px !important;
                }
            }
        }
    }

</style>