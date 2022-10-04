<script setup lang="ts">
import { onMounted, useCssModule } from 'vue';
import TheHeader from './components/Header/TheHeader.vue';
import TheFooter from './components/Footer/TheFooter.vue';
import '@/scroll/ScrollSmoother.min.js';
import gsap from 'gsap';
  
const vars = useCssModule('vars');
  
if (typeof window !== 'undefined') {
    document.body.classList.add(...Object.values(vars));
}

onMounted(() => {
    // eslint-disable-next-line no-undef
    gsap.registerPlugin(ScrollSmoother);

    // eslint-disable-next-line no-undef
    ScrollSmoother.create({
        smooth: 1,
        // normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
        // ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
        // effects: true,
    });
});
</script>
  
<template>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <TheHeader />
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