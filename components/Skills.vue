<!-- @format -->

<script setup lang="ts">
    import { Tools } from '../types/index';
    
    const frontTools: Tools[] = [
        {
            id: 1,
            title: 'JavaScript',
            alt: 'javascript icon' 
        },
        {
            id: 2,
            title: 'VueJS',
            alt: 'vue icon'
        },
        {
            id: 3,
            title: 'ReactJS',
            alt: 'react icon'
        },
        {
            id: 4,
            title: 'TypeScript',
            alt: 'typescript icon'
        },
        {
            id: 5,
            title: 'HTML',
            alt: 'html icon'
        },
        {
            id: 6,
            title: 'CSS',
            alt: 'css icon'
        },
        {
            id: 7,
            title: 'SASS',
            alt: 'sass icon'
        },
        {
            id: 8,
            title: 'Bootstrap',
            alt: 'bootstrap icon'
        },
        {
            id: 9,
            title: 'Figma',
            alt: 'figma icon'
        },
    ] 

     const backTools: Tools[] = [
        {
            id: 1,
            title: 'NodeJS',
            alt: 'nodejs icon' 
        },
        {
            id: 2,
            title: 'MySql',
            alt: 'mysql icon'
        },
        {
            id: 3,
            title: 'MongoDB',
            alt: 'react icon'
        },
        {
            id: 4,
            title: 'Express',
            alt: 'typescript icon'
        },
        {
            id: 5,
            title: 'GitHub',
            alt: 'html icon'
        },
        {
            id: 6,
            title: 'Postman',
            alt: 'css icon'
        }
    ]

</script>
 
<template>
    <section id="skills">
        <h2>{{ $t('skills_main_title') }}</h2>
        <div class="skills-container">
            <div class="skills-container__bg-color">
                <h3>Front-end</h3>
                <div class="skills-container__frontend">
                    <div v-for="frontTool in frontTools" :key="frontTool.id" class="skills-container__content">
                        <img :src="`/images/${frontTool.title.toLocaleLowerCase()}.png`" :alt="frontTool.alt" />
                        <small>{{ frontTool.title }}</small>
                    </div>
                </div>
            </div>
            <div class="skills-container__bg-color">
                <h3>Back-end</h3>
                <div class="skills-container__backend">
                    <div v-for="backTool in backTools" :key="backTool.id" class="skills-container__content">
                        <img :src="`/images/${backTool.title.toLocaleLowerCase()}.png`" alt="nodejs icon" />
                        <small>{{ backTool.title }}</small>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .skills-container {
        gap: 1.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
        color: $color-text-primary;
        background-image: url('~/assets/images/backgrounds/desktop-bg.jpeg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom -30px center;
        object-fit: cover;
        position: relative;

        &__bg-color {
            @include gradient(to bottom, 0.17);
            
            h3 {
                margin-top: 40px;
            }
        }

        &__frontend,
        &__backend {
            @include flexbox($align-items: flex-start);
            flex-wrap: wrap;
            margin-top: 20px;
            padding: 1rem;
            overflow: hidden;
        }

        &__content {
            width: 110px;
            height: 120px;
            @include flexbox($flex-direction: column);
            cursor: pointer;
            position: relative;
            @include animation-on-scroll;

            img {
                width: 40px;
                margin-bottom: 20px;
            }

            small {
                display: block;
                padding: 7px 0
            }

            &::after {
                content: '';
                width: 60px;
                height: 2px;
                background-color: $color-text-primary;
                position: absolute;
                bottom: 50px;
            }

            &:hover {
                background-color: $color-text-primary;
                color: $color-text-inverted;

                img {
                    width: 47px;
                    transform: translateY(8px);
                    transition: width 500ms, transform 500ms;
                }
                
                small {    
                    transform: translateY(-15px);
                    transition: transform 500ms;
                }

                &::after {
                    background-color: $color-text-inverted;
                    @include animation(400ms) {
                        0% { opacity: 0; bottom: 50px; }
                        40% { opacity: 0.5; bottom: 25px; }
                        100% { opacity: 1; bottom: 10px };
                    }
                }
            } 
        }
        
        &__content.show {
            @include animation-on-scroll(1, translateY(0));
        }
        
        @media screen and (min-width: 576px) {
            &__content {
                width: 160px;
            }
        }

        @media screen and (min-width: 768px) {
            display: flex;
            padding: 2rem 2rem 12rem !important;
            height: fit-content;

            &__bg-color {
                flex: 1;                
            }
           
        }

        @media screen and (min-width: 768px) and (max-width: 900px) {
            &__content {
                width: 110px !important;
            }
        }
    }
</style>
