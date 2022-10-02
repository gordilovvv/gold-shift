<script setup>
import VContainer from '../../Container/VContainer.vue';
import VButton from '../../Button/VButton.vue';
import VIcon from '@/components/Icon/VIcon';
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { TELEGRAM } from '@/config';

const background = ref(null);

onMounted(() => {
    const media = gsap.matchMedia();
    // const phone = background.value.querySelector('.js-hero-phone');
    const cards = background.value.querySelectorAll('.js-hero-card');

    media.add('(min-width: 1000px)', () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.js-hero',
                start: 'top top',
                end: '100%',
                scrub: 0.3,
                refreshPriority: -14
            }
        });

        const y = {
            0: -110,
            1: -30,
            2: -180,
            3: -45
        };

        cards.forEach((card, index) => {
            tl.fromTo(card, {
                y: 0
            }, {
                y: y[index],
                ease: 'none'
            }, 0);
        });
    });
});
</script>

<template>
    <div
        :class="styles.hero"
        class="js-hero"
    >
        <VContainer :class="styles.container">

            <h1 :class="styles.title">Telegram-бот для P2P торговли без <span :class="styles.gradient"><span>KYC</span> <VIcon name="kyc-gradient" /></span></h1>

            <VButton
                view="inverse"
                :class="styles.button"
                :href="TELEGRAM.link"
            >
                Запустить бота <VIcon name="telegram" />
            </VButton>

        </VContainer>

        <div
            ref="background"
            :class="styles.background"
        >
            <div
                :class="styles.line"
                style="background-image: url('/images/hero-line.png')"
            />

            <div
                :class="styles.phone"
                class="js-hero-phone"
                style="background-image: url('/images/hero-phone.png');"
            />
            <div
                :class="[styles.card, styles.card1]"
                class="js-hero-card"
                data-index="0"
                style="background-image: url('/images/hero-card-1.png');"
            />
            <div
                :class="[styles.card, styles.card2]"
                class="js-hero-card"
                data-index="1"
                style="background-image: url('/images/hero-card-2.png');"
            />
            <div
                :class="[styles.card, styles.card3]"
                class="js-hero-card"
                data-index="2"
                style="background-image: url('/images/hero-card-3.png');"
            />
            <div
                :class="[styles.card, styles.card4]"
                class="js-hero-card"
                data-index="4"
                style="background-image: url('/images/hero-card-4.png');"
            />
        </div>
    </div>
</template>

<style lang="scss" module="styles">
@import './HeroSection.module.scss';
</style>