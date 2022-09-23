<script setup lang="ts">
type VButtonProps = {
    view: 'inverse'
}

withDefaults(defineProps<VButtonProps>(), {
    view: 'inverse'
});
</script>

<template>
    <button :class="[styles.button, styles[view]]">
        <span :class="styles.buttonContent">
            <slot />
        </span>
    </button>
</template>

<style lang="scss" module="styles">
@import './VButton.module.scss';
</style>