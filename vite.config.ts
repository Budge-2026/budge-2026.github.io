import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    {
      name: 'offer-v5-glp-static',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const [pathname, search = ''] = (req.url ?? '').split('?')
          if (pathname === '/offer-v5-glp' || pathname === '/offer-v5-glp/') {
            req.url = `/offer-v5-glp/index.html${search ? `?${search}` : ''}`
          }
          next()
        })
      },
    },
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
