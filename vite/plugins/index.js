import vue from '@vitejs/plugin-vue'

import autoImport from 'unplugin-auto-import/vite'

import legacyPlugin from '@vitejs/plugin-legacy'

export function createPlugins() {
  const plugins = []
  // vite-plugin-vue
  plugins.push(vue())
  // unplugin-auto-import
  plugins.push(
    autoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts:'src/auto-import.d.ts',
      dirs: ['src/composables'],
      vueTemplate: true
    })
  )
  // vite-plugin-legacy
  plugins.push(
    legacyPlugin({
      targets: ['ie >= 11', 'chrome 52'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  )
  return plugins
}