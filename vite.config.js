import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/js/react-app.tsx',
                'resources/js/react-userarea.tsx',
                'resources/js/react-admin.tsx'
            ],
            refresh: true,
        }),
        svgr(),
        react()
    ],
    // server: {
    //     host: '0.0.0.0',
    //     hmr: {
    //         host: ,
    //     },
    // }
});
