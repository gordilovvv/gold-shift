<script setup lang="ts">
import { computed, ref } from 'vue';

defineProps<{
    title: string,
    description: string
    image: string
}>();

const card = ref<HTMLDivElement | null>(null);

const cursorX = ref(0);
const cursorY = ref(0);

const cursorVars = computed(
    () => `--cursor-x: ${cursorX.value}; --cursor-y: ${cursorY.value};`
);

const setCursorCoords = (x: number, y: number) => {
    cursorX.value = x;
    cursorY.value = y;
};

const getBoundingClientRect = () => {
    return card.value?.getBoundingClientRect();
};

defineExpose({
    setCursorCoords,
    getBoundingClientRect
});
</script>

<template>
    <div
        ref="card"
        :class="styles.card"
        :style="cursorVars"
    >
        <div :class="styles.shine" />

        <div :class="styles.content">
            <div :class="styles.title">
                {{ title }}
            </div>

            <div :class="styles.description">
                {{ description }}
            </div>

            <div :class="styles.image">
                <img
                    :src="image"
                    :alt="title"
                >
            </div>
        </div>
    </div>
</template>

<style lang="scss" module="styles">
@import './AdvantageCard.module.scss';
</style>