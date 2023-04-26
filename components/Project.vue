<script setup lang="ts">
    import { useRoute } from 'vue-router';
    
    const { locale } = useI18n();
    const route = useRoute();

    const { data } = await useFetch(() => '/api/projects');
    const toolTitle = ref('');

    const handleIconTitle = (eventType: string, title: any): void => {
        switch(eventType) {
            case 'mouseover':
                    toolTitle.value = title.split('.').slice(0, 1).join();
                break;
            case 'mouseleave':
                    setTimeout(() => toolTitle.value = '', 200);
                break;
            default :
        }
    }

    // Try to find a better solution!
    watch(() => route.name, (newValue, oldValue) => {
        if(newValue === 'index' && oldValue !== 'index') {
            location.reload();
        }
    });
   
</script>

<template>
    <section id="project-section">
       <Cursor />
        <div v-for="project in data.projects" :key="project.id">
            <div  v-if="project.id == route.params.id" class="project">
                <h1>{{ project.title }}</h1>
                <img :src="`/images/projects/main/${project.mainImage.url}`" :alt="$t(project.mainImage.alt)">
                <div class="project__details-wrapper">
                    <p> 
                        {{ $t(project.mainDescription, 0) }}
                        <br>
                        <br>
                        {{ $t(project.mainDescription, 1) !== "null" ? $t(project.mainDescription, 1)  : null }}
                        <br/>
                        <br/>
                        {{ $t(project.mainDescription, 2) !== "null" ? $t(project.mainDescription, 2)  : null }}
                    </p>
                    <div class="project__context-technology">
                        <div class="project__context">
                            <h2 :class="{'lang-ar': locale === 'ar'}">{{ $t('portfolio.heading.context') }}</h2>
                            <p>{{ project.year }}</p>
                            <p>{{ $t(project.type) }}</p>
                            <div class="project__buttons">
                                <a 
                                    :href="project.links.demo" target="_blank"
                                    v-if="project.links.demo"
                                    id="btn-demo">
                                    {{ $t('portfolio.btn.demo') }}
                                </a>
                                <a 
                                    :href="project.links.sourceCode" 
                                    target="_blank"  
                                    v-if="project.links.sourceCode" 
                                    id="btn-see-source-code">
                                    {{ $t('portfolio.btn.see_source_code') }}
                                </a>
                            </div>
                        </div>
                        <div class="project__technology">
                            <h2 :class="{'lang-ar': locale === 'ar'}">{{ toolTitle ? toolTitle : $t('portfolio.heading.technology') }}</h2>
                            <div @mouseleave="handleIconTitle('mouseleave', null)">
                                <a  
                                    v-for="technology in project.technology" 
                                    :href="technology.link" 
                                    target="_blank" >
                                    <img 
                                        @mouseover="handleIconTitle('mouseover', technology.url)"
                                        :src="`/images/toolIcons/${technology.url}`" 
                                        :alt="technology.url.split('.').slice(0, 1).join()">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    #project-section {
        margin-top: 6rem;
    }
    .project {
        @include flexbox($flex-direction: column);

        h1 {
            font-size: 1.8rem;
            font-weight: 800;
            text-transform: uppercase;
            margin-bottom: 2rem;
        }

        h2 {
            text-align: left;
            font-family: 'Raleway', sans-serif !important;
            margin-bottom: .5rem;
        }

        h2.lang-ar {
            text-align: right !important;
        }

        img {
            width: 90vmin;
            max-width: 35vmax;
            margin: 0 auto !important;
        }

        &__details-wrapper {
           margin: 3rem 0;

            p:first-child {
                font-size: 1.1rem;
                font-weight: 200;
                line-height: 1.5;
            }
        }

        &__context-technology{
            margin-top: 1rem;
            min-height: 250px;
            @include flexbox(space-between, flext-end, $flex-direction: column);
        }

        &__context {
            p {
                margin-top: .5rem;
                font-weight: 100;
                font-size: 1.1rem;
            }
        }

        &__technology {
            margin-top: 3rem;

            div:last-child {
                width: 270px;
                padding-top: 1rem;
                @include flexbox(flex-start);
                flex-wrap: wrap;

                img {
                    width: 30px;
                    margin: 0 1.5rem 0 0 !important;
                    padding-bottom: 1rem;
                }
            }
        }


        &__buttons {
            margin-top: 2rem;
            width: 290px;
            @include flexbox(space-between);

            a {
                @include custom-btn(130px, 40px);
                @include flexbox;
            }

            a#btn-demo {
                border-radius: 5px;
                padding: .5rem 2rem;
                color: $color-text-primary !important;
            }

            a#btn-see-source-code {
                width: 140px !important;
                padding: .4rem .5rem;
                background: none;
                border-bottom: 2px solid;
                border-left: none;
                border-top: none;
                border-right: none;
                border-color: linear-gradient(to right, $color-brand-primary, $color-brand-secondary);

                &:hover {
                    box-shadow: 0 0 5px 0 rgb($color-brand-secondary, 1);                    
                }
            }
        }

         
        @media screen and (min-width: 768px) {
            &__details-wrapper {
                @include flexbox(space-around, $align-items: flex-start);

                p:first-child {
                    width: 35%;
                }
            }

            &__context-technology {
                width: 300px;
                margin-top: 0 !important;
            }

            &__technology {
                div:last-child img {
                    filter: grayscale(100%);
                    opacity: .5;
                    transition: all .6s;
                    &:hover {
                        filter: grayscale(0) !important;
                        transform: scale(1.1);
                        opacity: 1 !important;
                    }
                }
            }
        }
    }
</style>