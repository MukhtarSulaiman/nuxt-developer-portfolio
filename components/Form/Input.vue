
<script setup lang="ts">

    const props = defineProps<{
        formGroupClass: string,
        errorClass?: string,
        name: string,
        label: string,
        type: string,
        placeholder: string
    }>();

</script>


<template>
    <div :class="props.formGroupClass">
        <label :for="props.label">{{ $t(props.label) }}</label>
        <VField :name="props.name" v-slot="{ field, meta, errors }">
            <VField
                v-bind="field"
                :type="props.type" 
                :id="props.name" 
                :placeholder="$t(props.placeholder, { at: '@'})"
                :as="props.type === 'textarea' ? 'textarea' : ''"
            />
            <VErrorMessage :name="props.name" as="span" :class="errorClass" />
        </VField>
    </div>
</template>

<style lang="scss" scoped>
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

        span {
            position: absolute;
            right: 0;
            bottom: -27px;
            color: $color-brand-primary;
        }

        span.textarea-error-message {
            right: 0;
            bottom: -78px !important;
            color: $color-brand-primary;
            transition: bottom 400ms;
        }
        textarea:focus + .textarea-error-message {
            bottom: -108px !important;
        }
    }
</style>