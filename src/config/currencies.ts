export type Currency = {
    name: string,
    icon: string // path src/assets/icons
}

export const currencies: Currency[] = [
    {
        name: 'Bitcoin',
        icon: 'bitcoin'
    },
    {
        name: 'Ethereum',
        icon: 'ethereum'
    },
    {
        name: 'USDT',
        icon: 'usdt'
    },
    {
        name: 'Litecoin',
        icon: 'litecoin'
    },
    {
        name: 'Ton',
        icon: 'ton'
    },
    {
        name: 'Aptos',
        icon: 'aptos'
    }
];

export const currenciesList = Object.values(currencies);