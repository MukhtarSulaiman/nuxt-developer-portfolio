
<script setup lang="ts">

    const props = defineProps<{
        formGroupClass: string,
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
                :id="props.label" 
                :placeholder="$t(props.placeholder, { at: '@'})"
                :as="props.name === 'textarea' ? 'textarea' : ''"
            />
            <VErrorMessage :name="props.name" />
        </VField>
    </div>
</template>

<style lang="scss">
</style>