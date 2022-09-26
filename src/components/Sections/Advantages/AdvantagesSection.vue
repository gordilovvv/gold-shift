<script setup lang="ts">
import { onBeforeUpdate } from 'vue';
import VContainer from '../../Container/VContainer.vue';
import SectionTitle from '@/components/Title/SectionTitle';
import AdvantageCard from './Card/AdvantageCard.vue';
import { advantages } from '@/config/advantages';

let cardsRefs: Record<string, InstanceType<typeof AdvantageCard>> = {};

onBeforeUpdate(() => {
    cardsRefs = {};
});

const handleMouseMove = (e: MouseEvent) => {
    const cards = Object.entries(cardsRefs);

    cards.map(([ key, card ]) => {
        const rect = card.getBoundingClientRect();

        if (rect) {
            const top = parseFloat((e.clientY - rect.top).toFixed(3));
            const left = parseFloat((e.clientX - rect.left).toFixed(3));

            cardsRefs[key].setCursorCoords(left, top);
        }
    });
};

const handleCardRefMount = (key: string, component: any) => {
    cardsRefs[key] = component;
};
</script>

<template>
    <div
        id="advantages"
        :class="styles.advantages"
    >
        <VContainer>
            <div :class="styles.head">
                <SectionTitle badge="badge">
                    Преимущества
                </SectionTitle>
            </div>

            <div
                :class="styles.grid"
                @mousemove="handleMouseMove"
            >
                <AdvantageCard
                    v-for="({ key, title, description, image }) in advantages"
                    :key="key"
                    :ref="component => handleCardRefMount(key, component)"
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