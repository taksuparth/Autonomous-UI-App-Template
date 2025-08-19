import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    // This tells Vite to bundle '@apollo/client' and its related packages
    // with your server-side code, which resolves the CJS/ESM import issue.
    noExternal: [/@apollo\/client/],
  },
  // This is still useful for optimizing the dependency in the browser build.
  optimizeDeps: { include: ['@apollo/client'] },
});
