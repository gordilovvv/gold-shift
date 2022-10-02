export const PROJECT_NAME = 'Goldshift';

export const TELEGRAM = {
    username: '@goldshift_bot',
    link: 'https://t.me/goldshift_bot'
};

export const AFFILIATE_LINK = TELEGRAM.link;

export const SOCIALS: {icon: string, link: string}[] = [
    {
        icon: 'twitter',
        link: 'https://twitter.com'
    },
    {
        icon: 'facebook',
        link: 'https://facebook.com'
    }
];

export const ICONS = import.meta.glob('../assets/icons/*.svg', { eager: true });