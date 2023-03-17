
<script setup lang="ts">

</script>

<template>
    <div class="language">
        <div class="language__globe-icon  position-relative">
            <i><Icon class="globe-icon" name="globe" size="3/5rem"/></i>    
        </div>
        <div class="language__language-levels position-relative">
            <div class="individual-languages">
                <small class="lang-progress-bar">{{ $t('education.languages', 0) }}</small>
                <small class="lang-progress-bar">{{ $t('education.languages', 1) }}</small>
                <small class="lang-progress-bar">{{ $t('education.languages', 2) }}</small>
            </div>
            <div class="progress-bars">
                <div class="progress-bar-circle">
                    <div class="progress-value progress-value-one">0%</div>
                </div>
                <div class="progress-bar-circle">
                    <div class="progress-value progress-value-two">0%</div>
                </div>
                <div class="progress-bar-circle">
                    <div class="progress-value progress-value-three">0%</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .language {
        width: 100%;
        max-width:1200px;
        margin: 7rem auto;
        direction: ltr;

        &__globe-icon {
            margin: 0 auto 2rem;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-image: linear-gradient(to left, $color-brand-primary, $color-brand-secondary);

            i {
                color: $color-text-primary !important;
                background: none;
            }
        }

        &__language-levels {
            width: 100% !important;
            height: 100px;
            @include flexbox(space-between);

            .individual-languages,
            .progress-bars {
                height: 100%;
                @include flexbox(space-between, flex-start, column);
            }

            .individual-languages {
                width: 90%;
                margin-right: 6rem !important;			

                small {
                    width: 100%;
                    position: relative;

                    &::before {
                        @include gradient;
                        height: 6px !important;
                        left: 70px !important;
                    }
                }

                // :nth-child(n)::before {
                // 	display: none;
                // }

                :nth-child(1)::before {
                    @include line(0%, $top: 5px);
                    @include animation(2s) {
                        0% {
                            width: 0px;
                        }
                        100% {
                            width: 80%;
                        }
                    }
                }

                :nth-child(2)::before {
                    @include line(0%, $top: 5px);
                    @include animation(2s) {
                        0% {
                            width: 0px;
                        }
                        100% {
                            width: 90%;
                        }
                    }
                }

                :nth-child(3)::before {
                    @include line(0%, $top: 5px);
                    @include animation(2s) {
                        0% {
                            width: 0px;
                        }
                        100% {
                            width: 100%;
                        }
                    }
                }
            }

            .progress-bars {
                height: 120px;
                // display: none;

                .progress-bar-circle {
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    
                    @include gradient;
                    @include flexbox;
                    &::after {
                        content: '';
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background-color: var(--color-page-background);
                    }
                    .progress-value {
                        position: absolute;
                        font-size: 0.6rem;
                        color: var(--color-text-icon);
                    }
                }
            }
            // .show, .show::before {
            // 	display: flex !important;
            // }
        }

        @media screen and (min-width: 768px) {
            @include flexbox();

            &__globe-icon {
                margin: 0 !important;
                position: relative;

                &::after {
                    @include line(143px, $left: 100%, $top: 50%);
                    @include gradient;
                }
            }

            &__language-levels {
                width: 80% !important;
                margin-left: 10.1rem;
                position: relative;

                &::before {
                    @include gradient;
                }

                &::before {
                    @include line($width: 2px, $height: 100%, $left: -20px, $top: 0);
                }
            }
        }

        @media screen and (min-width: 992px) {
            &__language-levels > .individual-languages {
                width: 85%;
            }
        }
    }
</style>