import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import jsconfigPaths from 'vite-jsconfig-paths'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [
      jsconfigPaths(),
      react(),
      basicSsl(),
    ],
    resolve: { extensions: ['.js', '.jsx'] },
    server: { host: isDev, https: isDev }
  }
})
