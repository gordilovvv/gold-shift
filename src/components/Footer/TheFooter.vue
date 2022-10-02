<script setup>
import VIcon from '../Icon/VIcon';
import { PROJECT_NAME, SOCIALS } from '@/config';
</script>

<template>
    <div
        ref="footer"
        :class="styles.footer"
    >
        <div :class="styles.top">
            <div :class="styles.logo">
                <div :class="styles.logoIcon">
                    <VIcon name="logo" />
                </div>
                <div :class="styles.logoText">
                    {{ PROJECT_NAME }}
                </div>
            </div>
        </div>
        <div :class="styles.bottom">
            <div :class="styles.copyright">
                Copyright© 2022 {{ PROJECT_NAME }}
            </div>
            
            <div :class="styles.socials">
                <a
                    v-for="social in SOCIALS"
                    :key="social.link"
                    :class="styles.socialsLink"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <VIcon :name="social.icon" />
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module="styles">
@import './TheFooter.module.scss';
</style>