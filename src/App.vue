<script setup lang="ts">
import { useCssModule } from 'vue';
import TheHeader from './components/Header/TheHeader.vue';
import TheFooter from './components/Footer/TheFooter.vue';
  
const vars = useCssModule('vars');
  
if (typeof window !== 'undefined') {
    document.body.classList.add(...Object.values(vars));
}
</script>
  
<template>
    <TheHeader />
    <RouterView />
    <TheFooter />
</template>
  
  <style lang="scss" module="vars">
  @import './assets/scss/vars/colors.module.scss';
  @import './assets/scss/vars/decoration.module.scss';
  </style>