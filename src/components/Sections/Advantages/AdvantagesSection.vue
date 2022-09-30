<script setup>
import { onMounted } from 'vue';
import VContainer from '../../Container/VContainer.vue';
import SectionTitle from '@/components/Title/SectionTitle';
import AdvantageCard from './Card/AdvantageCard.vue';
import { advantages } from '@/config/advantages';
import { gsap } from 'gsap';
import { useTemplateRefs } from '@/hooks/useTemplateRefs';

const { templateRefs, handleTemplateRefMount } = useTemplateRefs();

onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.js-advantages',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true
        }
    });

    const cards = Object.entries(templateRefs);

    let position = 0;

    cards.forEach(([index, { $el: card }]) => {
        position += (index % 2) === 0 ? 0.5 : 0;

        tl.from(card, {
            y: 80,
            // x: (index % 2) === 0 ? -20 : 20,
            stagger: 0.2,
            ease: 'none'
        }, position);
    });
});
</script>

<template>
    <div
        id="advantages"
        :class="styles.advantages"
        class="js-advantages"
    >
        <VContainer>
            <div :class="styles.head">
                <SectionTitle badge="badge">
                    Преимущества
                </SectionTitle>
            </div>

            <div :class="styles.grid">
                <AdvantageCard
                    v-for="({ key, title, description, image }, index) in advantages"
                    :key="key"
                    :ref="component => handleTemplateRefMount(index, component)"
                    :title="title"
                    :description="description"
                    :image="image"
                />
            </div>
        </VContainer>
    </div>
</template>

<style lang="scss" module="styles">
@import './AdvantageSection.module.scss';
</style>