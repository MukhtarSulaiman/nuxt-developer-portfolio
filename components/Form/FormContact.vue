<script setup lang="ts">

    import { object, string, ObjectSchema, ref as yupRef } from "yup";
    import { configure } from "vee-validate";
    import { Input, FormContact } from '~/types';

    const inputs: Input[] = [
        {   id: 1,  for: 'fullName', type: 'text',label: 'contact.fullName_input.label',  placeholder: 'contact.fullName_input.placeholder' },
        {   id: 2, for: 'email', type: 'email', label: 'contact.email_input.label', placeholder: 'contact.email_input.placeholder' },
        {   id: 3, for: 'subject', type: 'text', label: 'contact.subject_input.label', placeholder: 'contact.subject_input.placeholder' }
    ]

    const handleSubmit = (values: FormContact, actions: any): void => {
        console.log(values)
        console.log(actions)
        actions.resetForm()
    }

    configure({
        validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
        validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
        validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
        validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
    });

    const schema: ObjectSchema<FormContact> = object({
        fullName: string().required().min(3),
        email: string().required().email(),
        subject: string().required().min(3),
        message: string().required().min(20)
    });

    const initialValues: FormContact = { fullName: '', email: '', subject: '', message: '' };

</script>

<template>
    <VForm 
        @submit="handleSubmit" 
        :validation-schema="schema" 
        :initial-values="initialValues"
        v-slot="{ meta: formMeta, errors: formErrors }"
        novalidate
    >
        <FormInput
            formGroupClass="form-group"
            v-for="input in inputs"
            :key="input.id"
            :name="input.for"
            :type="input.type"
            :label="input.label"
            :placeholder="input.placeholder"
        />
        <FormInput
            formGroupClass="form-group"
            errorClass="textarea-error-message"
            name="message"
            type="textarea"
            label="contact.textarea_input.label"
            placeholder="contact.textarea_input.placeholder"
         />
        <button     
            type="submit">
            {{ $t('contact.submit_btn') }}
        </button>
    </VForm>
</template>


<style lang="scss">
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
        // div:nth-child(1).loader {
        //     width: 100%;
        //     height: 70%;
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     z-index: 2;
        //     opacity: 0.9;
        //     z-index: 1;
        //     @include flexbox;
        //     &::after {
        //         content: "";
        //         width: 70px;
        //         height: 70px;
        //         border-radius: 50%;
        //         border: 5px solid transparent;
        //         border-top-color: $color-brand-secondary;
        //         border-bottom-color: $color-brand-secondary;
        //         z-index: 2;
        //         animation-iteration-count: infinite !important;
        //         @include animation(1.5s) {
        //             0% {
        //                 transform: rotate(0deg);
        //             }
        //             100% {
        //                 transform: rotate(360deg);
        //             }
        //         }
        //     }
        // }
        button {
            @include custom-btn(100px);
            height: 40px !important;
            position: absolute;
            right: 60px;
            bottom: 35px;
            z-index: 1;
        }
    }
</style>