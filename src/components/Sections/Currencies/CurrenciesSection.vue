<script setup>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import CurrencyName from './Name/CurrencyName.vue';
import SectionTitle from '@/components/Title/SectionTitle';
import { currenciesList } from '@/config/currencies';
import { onBeforeUpdate, onMounted } from 'vue';

const ROWS = 2;
const currenciesRows = [...Array(ROWS).keys()].map(() => currenciesList);

let currenciesRefs = {};

onBeforeUpdate(() => {
    currenciesRefs = {};
});

const handleCurrencyMount = (key, ref) => {
    currenciesRefs[key] = ref;
};


const marquee = (list, row, {
    addedTimeScale,
    direction,
    duration
}) => {
    const reverseRepeat = () => {
        tl.reverse(0);
    };

    const repeat = () => {
        tl.restart();
    };

    const tl = gsap.timeline({
        paused: true,
        onReverseComplete: reverseRepeat,
        onComplete: repeat,
        onUpdate: () => {
            tl.timeScale((1 + addedTimeScale.value) * direction);
        },
        scrollTrigger: {
            trigger: list,
            start: 'top bottom',
            end:  'bottom top',
            toggleActions: 'resume pause resume pause'
        }
    });

    tl.to(row, {
        duration,
        x: '-100%',
        ease: 'none'
    });

    return tl;
};

let marqueeTl;
const marqueeDirection = -1;

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    marqueeTl = marquee('.js-marquee-list', '.js-marquee-row', {
        addedTimeScale: {
            value: 0
        },
        direction: marqueeDirection,
        duration: 18
    });
});

let hoverAnim = null;

const handleMouseEnter = (key) => {
    const currency = currenciesRefs[key];

    if (!currency?.nameEl)
        return;

    hoverAnim = gsap.to(currency.nameEl, {
        backgroundImage: 'linear-gradient(130.2deg, #DC8AFF -3.76%, #7EE8FF 97.97%)',
        duration: 0.3,
        ease: 'none',
        onComplete: () => hoverAnim = null
    });

    gsap.to(marqueeTl, {timeScale: 0, overwrite: true});
};

const handleMouseLeave = (key) => {
    const currency = currenciesRefs[key];

    if (!currency?.nameEl)
        return;

    if (hoverAnim) {
        hoverAnim.pause();
    }

    gsap.to(currency.nameEl, {
        backgroundImage: 'linear-gradient(270deg, #707174 0%, #707174 100%)',
        duration: 0.15,
        ease: 'none',
    });
    
    gsap.to(marqueeTl, {timeScale: marqueeDirection, overwrite: true});
};
</script>

<template>
    <div :class="styles.currencies">
        <div :class="styles.head">
            <SectionTitle badge="box">
                Поддержка <div :class="styles.titleRow">{{ currenciesList.length }} криптовалют</div>
            </SectionTitle>
        </div>

        <div
            :class="styles.list"
            class="js-marquee-list"
        >
            
            <div
                v-for="(row, i) in currenciesRows"
                :key="i"
                :class="styles.row"
                class="js-marquee-row"
            >
                <CurrencyName
                    v-for="({ name, icon }, index) in row"
                    :ref="component => handleCurrencyMount(`row-${ i }-currency-${ index }`, component)"
                    :key="name"
                    :name="name"
                    :icon="icon"
                    :icon-position="(index + 1) % 2 === 0 ? 'bottom' : 'top'"
                    @mouseenter="handleMouseEnter(`row-${ i }-currency-${ index }`)"
                    @mouseleave="handleMouseLeave(`row-${ i }-currency-${ index }`)"
                />
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" module="styles">
@import './CurrenciesSection.module.scss';
</style>