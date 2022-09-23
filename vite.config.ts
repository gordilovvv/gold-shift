import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        svgLoader({
            svgo: false
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    },
    server: {
        port: 3000
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly'  
        },
        preprocessorOptions: {
            scss: {
                // eslint-disable-next-line quotes
                additionalData: `@import '@/assets/scss/abstracts/abstracts.scss';`
            }
        }
    }
});
