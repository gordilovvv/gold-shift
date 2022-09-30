<script setup lang="ts">
import { computed } from 'vue';

type VButtonProps = {
    view: 'inverse'
    href?: string
}

const props = withDefaults(defineProps<VButtonProps>(), {
    view: 'inverse',
    href: undefined
});

const tag = computed(() => props.href ? 'a' : 'button');
</script>

<template>
    <Component
        :is="tag"
        :class="[styles.button, styles[view]]"
        :href="href"
    >
        <span :class="styles.buttonContent">
            <slot />
        </span>
    </Component>
</template>

<style lang="scss" module="styles">
@import './VButton.module.scss';
</style>