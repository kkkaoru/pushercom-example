import { reactPlugins, rollupOptions } from '@kkkaoru/vite-config';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PusherComComponents',
      fileName: 'pusher-com-components',
    },
    rollupOptions,
  },
  plugins: reactPlugins,
});
