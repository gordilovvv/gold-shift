<script setup>
import SectionTitle from '@/components/Title/SectionTitle';
import VButton from '../../Button/VButton.vue';
import VIcon from '@/components/Icon/VIcon';
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { AFFILIATE_LINK } from '@/config';

onMounted(() => {
    const affiliate = document.querySelector('.js-affiliate');
    const ghosts = affiliate.querySelectorAll('.js-affiliate-ghost');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: affiliate,
            start: 'top bottom-=150',
            end: 'bottom bottom',
        }
    });

    ghosts.forEach(ghost => {
        tl.from(ghost, {
            scale: 0,
            ease: 'none',
            stagger: 0.1,
            duration: 0.2
        }, '+=0.18');
    });
});
</script>

<template>
    <div
        id="affiliate"
        class="js-affiliate"
        :class="styles.section"
    >
        <div :class="styles.container">
            <div
                :class="styles.background"
                style="background-image: url('/images/affiliate.png');"
            >
                <div
                    :class="[styles.ghost, styles.ghost1]"
                    class="js-affiliate-ghost"
                >
                    <VIcon name="ghost-1" />
                </div>
                <div
                    :class="[styles.ghost, styles.ghost2]"
                    class="js-affiliate-ghost"
                >
                    <VIcon name="ghost-2" />
                </div>
                <div
                    :class="[styles.ghost, styles.ghost3]"
                    class="js-affiliate-ghost"
                >
                    <VIcon name="ghost-3" />
                </div>
                <div
                    :class="[styles.ghost, styles.ghost4]"
                    class="js-affiliate-ghost"
                >
                    <VIcon name="ghost-4" />
                </div>
            </div>
            
            <div :class="styles.content">
                <SectionTitle
                    icon="link"
                    :class="styles.title"
                >
                    ?????????????????????? ??????????????????
                </SectionTitle>

                <div :class="styles.description">
                    ?????????????????? ???????????????? 0.25% ???? ???????????? ???????????? ????????????????????????, ?????????????? ?????????????????????????? ?? Goldshift ???? ?????????? ?????????????????????? ????????????.
                </div>
                
                <VButton
                    view="inverse"
                    :href="AFFILIATE_LINK"
                >
                    ??????????????????????
                </VButton>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" module="styles">
@import './AffiliateSection.module.scss';
</style>