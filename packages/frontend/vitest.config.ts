import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          'babel-plugin-twin',
          [
            '@emotion/babel-plugin',
            {
              importMap: {
                '@emotion/styled': {
                  default: {
                    canonicalImport: ['@emotion/styled', 'default'],
                    styledBaseImport: ['@emotion/styled', 'default'],
                  },
                },
                '@emotion/react': {
                  default: {
                    canonicalImport: ['@emotion/react', 'default'],
                  },
                },
              },
            },
          ],
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
