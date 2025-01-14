<<<<<<< HEAD
import {fileURLToPath,URL} from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MatteoThiebaut.github.io',

  plugins: [vue()],
  resolve:{
    alias:{
      '@':fileURLToPath(new URL("./src",import.meta.url))
    }
  }
})
=======
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/MatteoThiebaut.github.io',
  plugins: [vue()],
})
>>>>>>> d9e5c2efe69ac03603a149ac1fed7b6b397af7ae
