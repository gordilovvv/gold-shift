<script setup lang="ts">
import VIcon from '../Icon/VIcon';
import { TELEGRAM } from '@/config';
    
const nav = [
    {
        id: '#advantages',
        text: 'Преимущества'
    },
    {
        id: '#guide',
        text: 'Как использовать'
    },
    {
        id: '#affiliate',
        text: 'Партнерская программа'
    }
];

const handleNavItemClick = (e: Event) => {
    (e.target as HTMLLinkElement).scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
    <div :class="styles.header">
        
        <a
            href="/"
            :class="styles.logo"
        >
            <VIcon name="logo" />
        </a>

        <div :class="styles.nav">
            <a
                v-for="item in nav"
                :key="item.id"
                :href="item.id"
                :class="styles.navItem"
                @click.prevent="handleNavItemClick"
            >
                <span :class="styles.navItemText">
                    {{ item.text }}
                </span>
            </a>
            
        </div>

        <a
            :class="styles.button"
            :href="TELEGRAM.link"
            target="_blank"
        >
            <span :class="styles.buttonText">
                {{ TELEGRAM.username }}
            </span>
        </a>

    </div>
</template>

<style lang="scss" module="styles">
@import './TheHeader.module.scss';
</style>