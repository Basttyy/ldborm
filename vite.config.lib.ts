import { resolve } from "path"
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({
            include: ['lib'],
            exclude: ['src']
        })
    ],
    build: {
        copyPublicDir: false,
        lib: { 
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'ldb-orm',
            fileName: 'ldb-orm',
        },
    }
})