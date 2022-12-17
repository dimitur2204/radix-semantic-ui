import { defineConfig } from 'vite'
// vite.config.ts
import typescript from '@rollup/plugin-typescript'
import path from 'path'

export default defineConfig({
    plugins: [],
    build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            fileName: 'main',
            name: 'radix-semantic-ui',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            plugins: [
                typescript({
                    sourceMap: false,
                    declaration: true,
                    outDir: 'dist',
                    include: ['src/main.ts', 'src/components/**/*'],
                }),
            ],
        },
    },
})
