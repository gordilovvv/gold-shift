<script setup lang="ts">
defineProps<{
    title: string,
    image: string,
    num: number
}>();
</script>

<template>
    <div :class="styles.row">

        <div :class="styles.image">
            <img
                :src="image"
                alt=""
            />
        </div>
        
        <div :class="styles.number">
            <div :class="styles.numberText">
                {{ num }}
            </div>
        </div>

        <div :class="styles.title">
            {{ title }}
        </div>

    </div>
</template>

<style lang="scss" module="styles">
@import './GuideRow.module.scss';
</style>