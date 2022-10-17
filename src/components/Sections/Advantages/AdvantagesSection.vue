<script setup>
import { onMounted, ref } from 'vue';
import VContainer from '../../Container/VContainer.vue';
import SectionTitle from '@/components/Title/SectionTitle';
import AdvantageCard from './Card/AdvantageCard.vue';
import { advantages } from '@/config/advantages';
import { gsap } from 'gsap';

const advantagesEl = ref(null);

onMounted(() => {
    const media = gsap.matchMedia();
    const cards = advantagesEl.value.querySelectorAll('.js-advantage-card');

    media.add('(min-width: 1001px)', () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.js-advantages',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
            }
        });

        let position = 0;

        gsap.set(cards, {
            y: 80
        });

        cards.forEach((card, index) => {
            position += (index % 2) === 0 ? 0.5 : 0;

            tl.to(card, {
                y: 0,
                stagger: 0.2,
                ease: 'none'
            }, position);
        });
    });
});
</script>

<template>
    <div
        id="advantages"
        ref="advantagesEl"
        class="js-advantages"
        :class="styles.advantages"
    >
        <VContainer>
            <div :class="styles.head">
                <SectionTitle badge="badge">
                    Преимущества
                </SectionTitle>
            </div>

            <div :class="styles.grid">
                <AdvantageCard
                    v-for="({ key, title, description, image }) in advantages"
                    :key="key"
                    :title="title"
                    :description="description"
                    :image="image"
                    class="js-advantage-card"
                />
            </div>
        </VContainer>
    </div>
</template>

<style lang="scss" module="styles">
@import './AdvantageSection.module.scss';
</style>