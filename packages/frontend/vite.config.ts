import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  define: {
    // Ensure compatibility with some packages
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
})
