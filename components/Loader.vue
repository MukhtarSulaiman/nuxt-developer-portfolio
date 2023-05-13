
<script setup lang="ts"></script>

<template>
    <div></div>
</template>

<style lang="scss" scoped>
      div.loader {
            width: 100%;
            height: 70%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            opacity: 0.9;
            z-index: 1;
            @include flexbox;
            
            &::after {
                content: "";
                width: 70px;
                height: 70px;
                border-radius: 50%;
                border: 5px solid transparent;
                border-top-color: $color-brand-secondary;
                border-bottom-color: $color-brand-secondary;
                z-index: 2;
                animation-iteration-count: infinite !important;
                @include animation(1.5s) {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            }
        }
</style>