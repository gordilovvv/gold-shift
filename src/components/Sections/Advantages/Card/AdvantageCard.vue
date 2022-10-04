<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
    title: string,
    description: string
    image: string
}>();

const card = ref<HTMLDivElement | null>(null);

const adaptiveImage = computed(() => {
    const [image, extension] = props.image.split('.');
    
    return `${ image }-s.${ extension }`;
});
// const cursorX = ref(0);
// const cursorY = ref(0);

// const cursorVars = computed(
//     () => `--cursor-x: ${cursorX.value}; --cursor-y: ${cursorY.value};`
// );

// const setCursorCoords = (x: number, y: number) => {
//     cursorX.value = x;
//     cursorY.value = y;
// };

const getBoundingClientRect = () => {
    return card.value?.getBoundingClientRect();
};

defineExpose({
    // setCursorCoords,
    getBoundingClientRect
});
</script>

<template>
    <div
        ref="card"
        :class="styles.card"
    >
        <div :class="styles.shine" />

        <div :class="styles.content">
            <div :class="styles.contentText">
                <div :class="styles.title">
                    {{ title }}
                </div>

                <div :class="styles.description">
                    {{ description }}
                </div>
            </div>

            <div :class="styles.image">
                <img
                    :src="image"
                    :alt="title"
                >
            </div>

            <div :class="styles.adaptiveImage">
                <img
                    :src="adaptiveImage"
                    :alt="title"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" module="styles">
@import './AdvantageCard.module.scss';
</style>