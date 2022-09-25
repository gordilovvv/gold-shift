type Advantage = {
    key: string,
    title: string,
    description: string,
    image: string
}

export const advantages: Advantage[]  = [
    {
        key: 'kyc',
        title: 'Нет KYC - нет лимитов',
        description: 'Верификация не нужна. Мы верим в крипто-конфиденциальность.',
        image: '/images/kyc.png'
    },
    {
        key: 'fees',
        title: 'Низкие комиссии сервиса',
        description: 'Комиссия сервиса 0.5% от сделки. Комиссия за обмен - 0.25%.',
        image: '/images/fees.png'
    },
    {
        key: 'swap',
        title: 'Crypto2Сrypto трейдинг',
        description: 'Автоматизированный функционал для свапа монет.',
        image: '/images/swap.png',
    },
    {
        key: 'transactions',
        title: 'Быстрые и недорогие транзакции',
        description: 'Средства зачисляются после 1-2 подтверждений..',
        image: '/images/transactions.png',
    },
    {
        key: 'telegram',
        title: 'Работа на базе Telegram',
        description: 'Надежность Telegram и защита ваших средств и транзакций в ваших руках.',
        image: '/images/telegram.png',
    },
    {
        key: 'support',
        title: 'Поддержка 24/7',
        description: 'Ваши проблемы решаются в приоритетном порядке без ожидания.',
        image: '/images/support.png',
    }
];