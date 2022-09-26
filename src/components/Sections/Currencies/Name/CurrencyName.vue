<script setup lang="ts">
import VIcon from '@/components/Icon/VIcon';
import { ref } from 'vue';

defineProps<{
    name: string,
    icon: string,
    iconPosition: 'top' | 'bottom'
}>();

const nameEl = ref(null);

defineExpose({
    nameEl
});
</script>

<template>
    <div :class="styles.currency">

        <div
            ref="nameEl"
            :class="styles.name"
        >
            {{ name }}
        </div>

        <div
            :class="[styles.icon, {
                [styles.top]: iconPosition === 'top',
                [styles.bottom]: iconPosition === 'bottom'
            }]"
        >
            <VIcon :name="icon" />
        </div>
        
    </div>
</template>

<style lang="scss" module="styles">
@import './CurrencyName.module.scss';
</style>