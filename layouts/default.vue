<script setup lang="ts">
     import { useRoute } from 'vue-router';
     
     const renderLayouts = ref(false);

     onMounted(() => {
          setTimeout(() => renderLayouts.value = true, 1000)
     });

     const route = useRoute();

     watch(() => route.name, () => { 
          renderLayouts.value = false;
          setTimeout(() => renderLayouts.value = true, 1000)
     });
</script>

<template>
     <div >
          <Header />
          <!-- The content of the layout will be loaded in the <slot /> -->
          <slot />
          <Footer v-show="renderLayouts" />
     </div>
</template>