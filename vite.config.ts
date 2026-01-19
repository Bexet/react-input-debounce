import { defineConfig, LibraryFormats } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { fileURLToPath, URL } from 'node:url'

const formats: { format: LibraryFormats, extension: string }[] = [
    {
        format: 'cjs',
        extension: 'js',
    },
    {
        format: 'es',
        extension: 'mjs',
    },
];

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            rollupTypes: true
        })
    ],
    root: '.',

    build: {
        lib: {
            entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
            name: 'DebounceInput',
            fileName: (format) => {
                const { extension } = formats.find(({format: f}) => f === format)!;
                return `index.${extension}`;
            },
            formats: formats.map(({format}) => format)
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        },
        sourcemap: true
    },

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
