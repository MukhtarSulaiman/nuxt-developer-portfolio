<!-- @format -->

<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
        
    const frontTools: string[] = [
        'JavaScript', 'VueJS', 'ReactJS', 'TypeScript',
        'HTML', 'CSS', 'SASS', 'Bootstrap', 'Figma',
    ] 

     const backTools: string[] = [
        'NodeJS', 'MySql', 'MongoDB',
        'Express','GitHub','Postman',
    ]

    const downLoadResume = () => {
        window.open(
            '/files/cv-mukhtar_sulaiman-fr.pdf',
            '_blank',
            'fullscreen=yes'
        );
    }
    
</script>
 
<template>
    <section id="skills">
        <h2>{{ $t('skills_main_title') }}</h2>
        <div class="skills-container">
            <div class="skills-container__bg-color">
                <h3>Front-end</h3>
                <div class="skills-container__frontend">
                    <div v-for="(frontTool, index) in frontTools" :key="index" class="skills-container__content">
                        <img 
                            :src="`/images/toolIcons/${frontTool.toLocaleLowerCase()}.png`" 
                            :alt="useI18n().locale.value === 'fr' ? `${$t('tools_alt_desc')} ${frontTool}` : `${frontTool} ${$t('tools_alt_desc')}`" />
                        <small>{{ frontTool }}</small>
                    </div>
                </div>
            </div>
            <div class="skills-container__bg-color">
                <h3>Back-end</h3>
                <div class="skills-container__backend">
                    <div v-for="(backTool, index) in backTools" :key="index" class="skills-container__content">
                        <img 
                            :src="`/images/toolIcons/${backTool.toLocaleLowerCase()}.png`"
                            :alt="useI18n().locale.value === 'fr' ? `${$t('tools_alt_desc')} ${backTool}` : `${backTool} ${$t('tools_alt_desc')}`" />
                        <small>{{ backTool }}</small>
                    </div>
                </div>
            </div>
            <button @click="downLoadResume">{{ $t('download_resume')}}</button>
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


        button {
            @include custom-btn(200px);
            position: absolute;
            left: 50%;
            bottom: -80px;
            transform: translateX(-50%);
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
           
            button {
                bottom: 90px !important;
            }
        }

        @media screen and (min-width: 768px) and (max-width: 900px) {
            &__content {
                width: 110px !important;
            }
        }
    }
</style>
