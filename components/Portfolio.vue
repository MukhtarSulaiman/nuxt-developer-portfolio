<script setup lang="ts">
    import { useIntersectionObserver } from '~/composables/onItersectionObserver';

    const { data } = await useFetch(() => '/api/projects');

    onMounted(() => {
        useIntersectionObserver(document.querySelectorAll<HTMLElement>(`.portfolio-container__project-wrapper`), 0.3);
    })

    const currentItems = ref(9);
    const isAllItemsVisible = ref(false);

    const showMoreOrLessProject = (): void => {
        if(currentItems.value === data.value.projects.length) {
            currentItems.value = 9;
            isAllItemsVisible.value = false;
        } else {
            currentItems.value = data.value.projects.length;
            if(currentItems.value === data.value.projects.length) {
                isAllItemsVisible.value = true;
            }
        }
    }

    const isDevProjects = ref(true);

    const filterProjectType = (type: string): void => {
        if( type === 'dev') isDevProjects.value = true;
         else if(type === 'design') isDevProjects.value = false;
    }
</script>


<template>
    <section id="portfolio">
        <div class="portfolio-headings">
            <h2>{{ $t('portfolio.heading.main') }}</h2>
            <div class="portfolio-headings__navigational-titles">
                <h3 
                    @click="filterProjectType('dev')" 
                    role="button" :class="{active: isDevProjects}">
                    {{ $t('portfolio.heading.navigational_title', 1) }}
                </h3>
                <h3 
                    @click="filterProjectType('design')" 
                    role="button" :class="{active: !isDevProjects}">
                    {{ $t('portfolio.heading.navigational_title', 2) }}
                </h3>
            </div>
        </div>
        <Designs v-show="!isDevProjects" />
        <div v-show="isDevProjects" class="portfolio-container">
            <div 
                v-for="project in data.projects.slice(-currentItems).reverse()"  :key="project.id"
                class="portfolio-container__project-wrapper">
                <div class="portfolio-container__img-preview">
                    <div 
                        :class="['portfolio-container__img-holder', {'light-mode': $colorMode.preference === 'light'}]"
                        :style="{ backgroundImage: `url(/images/projects/previews/${project.previewImageUrl})`}">
                    </div>
                </div>
                <div class="portfolio-container__project-details">
                    <h4>{{ project.title.length > 14 ? project.title.slice(0, 14) + '...' :  project.title }}</h4>
                    <div class="portfolio-container__sub-heading-description">
                        <h5>{{ $t(project.type) }}</h5>
                        <p>{{ $t(project.briefDescription) }}</p>
                    </div>
                    <NuxtLink :to="`projects/${project.id}`" class="btn-read-more">
                       {{ $t('portfolio.btn.read_more') }}
                    </NuxtLink>                  
                </div>
                <small>{{ project.year }}</small>
            </div>
        </div>
        <button @click="showMoreOrLessProject" v-show="isDevProjects" class="btn-load-more">
            <Icon name="mdi:eye" /> 
            {{ isAllItemsVisible ? $t('portfolio.btn.load_more_less', 2) : $t('portfolio.btn.load_more_less', 1) }}
        </button>
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
                    font-size: 1.02rem;
                    cursor: pointer;
                    border-image: linear-gradient(to left, $color-brand-primary, $color-brand-secondary);
                    border-image-slice: 1;
                }
                h3:first-child.active { border-bottom: 2px solid transparent; }
                h3:last-child.active { border-bottom: 2px solid transparent; }
            }
        }

        .portfolio-container {
            @include flexbox(space-around);
            flex-wrap: wrap;
            column-gap:  2rem;
            row-gap:  1.5rem;
            margin-top: 2.5rem;

            &__project-wrapper {
                width: 410px;
                height: 320px;
                position: relative;
                direction: ltr !important;
                @include animation-on-scroll($transform-value: translateX(90px));

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
            &__project-wrapper.show {
                @include animation-on-scroll(1, translateX(0));
            }

            &__project-wrapper:nth-child(n+10):nth-child(-n+12) {
                @include animation-on-scroll(1, $transform-value: translateX(0));
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
                @include box-shadow(inset -50px, 0px, 36px, -28px, $color-brand-tertiary);
            }

            &__img-holder.light-mode {
                @include box-shadow(inset -50px, 0px, 36px, -28px, $color-text-primary)
            }

            &__project-details {
                position: absolute;
                top: 0;
                right: 0;
                min-height: 230px;
                transform: translateY(10%);
                width: 150px;
                @include flexbox(space-between, left, $flex-direction: column);

                h4 {
                    font-family:  'Raleway', sans-serif;
                    font-size: 1rem;
                    font-weight:700;
                    text-transform: uppercase;
                }
            }

            &__sub-heading-description {
                margin: 2rem 0;
                // direction: rtl !important; Review this line !

                h5 {
                    margin-bottom: .3rem;
                }

                p {
                    font-weight: 200;
                }
            }

            .btn-read-more {
                @include flexbox;
                @include custom-btn(150px, 35px, light);
                border-radius: 10px;
                background: $color-brand-secondary;
                background-size: 200%;
                color: $color-text-primary !important;
            }

            @media screen and (min-width: 576px) {
                &__img-preview {
                    width: 60%;
                }

                &__project-details {
                    width: 180px !important;
                    transform: translateY(15%);

                    h4 {
                        font-size: 1.2rem;
                    }
                }
            }

            @media screen and (min-width: 768px){
                &__project-wrapper {
                    @include animation-on-scroll($transform-value: translateX(90px));
                }
            }
        }
        .btn-load-more {
            margin: 3rem auto;
            @include custom-btn(150px, 40px, light);
            @include flexbox(space-evenly);
        }
    }

</style>