<script setup>
import SectionTitle from '@/components/Title/SectionTitle';
import { guide } from '@/config/guide';
import GuideRow from './Row/GuideRow.vue';
import VContainer from '../../Container/VContainer.vue';
import { onMounted, ref } from 'vue';
import { gsap, Elastic } from 'gsap';

const wrap = ref(null);
const background = ref(null);

onMounted(() => {
    const scaleBg = (num) => {
        gsap.to(background.value, {
            scale: num,
            duration: 0.2,
            ease: Elastic
        });
    };

    const media = gsap.matchMedia();
    const items = wrap.value.querySelectorAll('.js-guide-row');

    media.add('(min-width: 1000px)', () => {
        scaleBg(0.95);

        const tl = gsap.timeline({
            defaults: {
                overwrite: true
            },
            scrollTrigger: {
                trigger: '.js-guide-wrap',
                end: '100%',
                start: 'top top',
                scrub: true 
            }
        });

        tl.set(items, {
            opacity: 1,
            ease: 'none'
        });

        tl.to(items, {
            opacity: 0,
            stagger: 0.35,
            ease: 'none'
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.js-guide-wrap',
                pin: '.js-guide-background',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true
            }
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.js-guide-wrap',
                start: 'top-=50 top',
                end: 'bottom bottom-=50',
                onEnter: () => scaleBg(1),
                onEnterBack: () => scaleBg(1),
                onLeave: () => scaleBg(0.97),
                onLeaveBack: () => scaleBg(0.97)
            }
        });
    });
});
</script>

<template>
    <div
        ref="wrap"
        :class="styles.wrap"
        class="js-guide-wrap"
    >
        <div
            ref="background"
            :class="styles.background"
            class="js-guide-background"
        />

        <div :class="styles.guide">

            <VContainer>
                <div :class="styles.head">
                    <SectionTitle
                        badge="help"
                        :class="styles.title"
                    >
                        Как пользоваться
                    </SectionTitle>
                </div>

                <div :class="styles.list">
                    <GuideRow
                        v-for="({ title, image }, index) in guide"
                        :key="index"
                        :title="title"
                        :image="image"
                        :num="index + 1"
                        class="js-guide-row"
                    />
                </div>
            </VContainer>

        </div>
    </div>
</template>

<style lang="scss" module="styles">
@import './GuideSection.module.scss';
</style>