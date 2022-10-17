<script setup lang="ts">
import { onMounted, provide, useCssModule } from 'vue';
import TheHeader from './components/Header/TheHeader.vue';
import TheFooter from './components/Footer/TheFooter.vue';
import ScrollSmoother from '@/scroll/ScrollSmoother.min.js';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
  
const vars = useCssModule('vars');
  
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
    document.body.classList.add(...Object.values(vars));
}

const gsapPlugins = {};

onMounted(() => {
    // @ts-ignore
    gsapPlugins.scrollSmoother = ScrollSmoother.create({
        smooth: 0.8,
        effects: false,
        // normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
        // ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
        // effects: true,
    });
});

provide('gsapPlugins', gsapPlugins);
</script>
  
<template>
    <TheHeader />
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <RouterView />
            <TheFooter />
        </div>
    </div>
</template>
  
  <style lang="scss" module="vars">
  @import './assets/scss/vars/colors.module.scss';
  @import './assets/scss/vars/decoration.module.scss';
  </style>

  <style lang="scss">
  #smooth-content {
    will-change: transform;
  }
  </style>