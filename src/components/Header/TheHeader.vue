<script setup>
import VIcon from '../Icon/VIcon';
import { TELEGRAM } from '@/config';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { inject, onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const gsapPlugins = inject('gsapPlugins', {});
    
const nav = [
    {
        id: '#advantages',
        text: 'Преимущества'
    },
    {
        id: '#guide',
        text: 'Как использовать'
    },
    {
        id: '#affiliate',
        text: 'Партнерская программа'
    }
];

const active = ref(null);
const isScrolling = ref(false);

onMounted(() => {
    setTimeout(() => {
        const onEnter = index => {
            active.value = index;
        };
        const onLeave = () => {
            active.value = null;
        };

        nav.forEach(({ id }, index) => {
            ScrollTrigger.create({
                trigger: id,
                start: 'top+=20% bottom',
                end: `bottom+=${ index === 2 ? 50 : 0}% bottom`,
                onEnter: () => onEnter(index),
                onLeave: () => onLeave(), 
                onEnterBack: () => onEnter(index),
                onLeaveBack: () => onLeave(),
            });
        });
    }, 100);
});

const handleNavItemClick = e => {
    const hash = e.currentTarget.getAttribute('href');
    const elem = hash ? document.querySelector(hash) : false;

    const scrollTop = window.scrollY;
    const scrollTarget = elem.offsetTop;

    if(elem) {
        e.preventDefault();

        gsap.to(gsapPlugins.scrollSmoother, {
            scrollTop: Math.min(ScrollTrigger.maxScroll(window), gsapPlugins.scrollSmoother.offset(elem, 'top-=150px top')),
            duration: Math.max(Math.abs(scrollTarget - scrollTop) / 4000, 0.8),
            onStart: () => isScrolling.value = true,
            onComplete: () => isScrolling.value = false
        });
    }
};
</script>

<template>
    <div
        :class="[styles.header, {
            [styles.scrolling]: isScrolling
        }]"
    >
        
        <a
            href="/"
            :class="styles.logo"
        >
            <VIcon name="logo" />
        </a>

        <div :class="styles.nav">
            <a
                v-for="(item, index) in nav"
                :key="item.id"
                :href="item.id"
                :class="[styles.navItem, {[styles.active]: active === index }]"
                @click.prevent="handleNavItemClick"
            >
                <span :class="styles.navItemText">
                    {{ item.text }}
                </span>
            </a>
            
        </div>

        <a
            :class="styles.button"
            :href="TELEGRAM.link"
            target="_blank"
        >
            <span :class="styles.buttonText">
                {{ TELEGRAM.username }}
            </span>

            <span :class="styles.buttonIcon">
                <VIcon name="telegram" />
            </span>
        </a>

    </div>
</template>

<style lang="scss" module="styles">
@import './TheHeader.module.scss';
</style>