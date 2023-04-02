<script setup lang="ts">

   import { Input } from '~/types';

    const inputs: Input[] = [
        {   id: 1,  for: 'fullName', type: 'text',label: 'contact.fullName_input.label',  placeholder: 'contact.fullName_input.placeholder' },
        {   id: 2, for: 'email', type: 'email', label: 'contact.email_input.label', placeholder: 'contact.email_input.placeholder' },
        {   id: 3, for: 'text', type: 'subject', label: 'contact.subject_input.label', placeholder: 'contact.subject_input.placeholder' }
    ]


</script>

<template>
   <form novalidate>
        <div v-for="input in inputs" class="form-group">
            <label :for="input.label">{{ $t(input.label) }}</label>
            <input :type="input.type" :id="input.label" :placeholder="$t(input.placeholder, { at: '@'})" />
            <!-- <small></small> -->
        </div>
        <div class="form-group">
            <label for="textarea">{{ $t('contact.textarea_input.label') }}</label>
            <textarea id="textarea" :placeholder="$t('contact.textarea_input.placeholder')" ></textarea>
            <!-- <small class="textarea-error-message"></small> -->
        </div>
        <button type="submit">{{ $t('contact.submit_btn') }}</button>
    </form>
</template>


<style lang="scss" scoped>
    form {
        width: 100%;
        height: 470px;
        margin-bottom: 7rem;
        padding: 2rem;
        border-top-width: 2px solid;
        position: relative;

        &::before,
        &::after {
            border-image: linear-gradient(to right, $color-brand-primary,$color-brand-secondary);
            border-image-slice: 1;
        }
        &::before {
            @include line($width: 50%, $left: 0, $right: auto, $top: 0, $bottom: auto);
            border-top: 2px solid;
            border-left: 2px solid;
            padding-bottom: 3rem;
        }
        &::after {
            @include line( $width: 50%, $left: auto, $right: 0, $top: auto, $bottom: 10px);
            border-bottom: 2px solid;
            border-right: 2px solid;
            padding-top: 3rem;
        }
        div:nth-child(1).loader {
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
        button {
            @include custom-btn(100px);
            height: 40px !important;
            position: absolute;
            right: 60px;
            bottom: 35px;
            z-index: 1;
        }
    }

    
    .form-group {
        width: 100%;
        height: 50px;
        margin-bottom: 1rem;
        position: relative;

        label {
            display: block;
        }

        input {
            height: 40px;
        }

        input, textarea {
            width: 100%;
            border: none;
            outline: none;
            padding-left: 1rem;
            font-family: 'Raleway', sans-serif;
            font-size: 1rem;
            font-weight: 200 !important;
            opacity: 0.7;
            background: transparent;
            border-bottom: 1px solid darken($color-text-primary, 20);
            transition: all .4s;

            &:hover, &:focus {
                border-width: 2px;
            }
        }

        textarea {
            min-height: 90px;
            max-height: 120px;
            padding-top: 1rem;
            transition: min-height 400ms;

            &:focus {
                min-height: 120px;
            }
        }

        // small {
        //     display: none;
        // }

        // small.error {
        //     display: initial;
        //     position: absolute;
        //     right: 0;
        //     bottom: -22px;
        //     color: $color-brand-primary;
        // }
        // small.succes {
        //     display: none !important;
        // }
        // .textarea-error-message {
        //     top: 110px !important;
        //     transition: top 400ms;
        // }
        textarea:focus + .textarea-error-message {
            top: 141px !important;
        }
    }
</style>