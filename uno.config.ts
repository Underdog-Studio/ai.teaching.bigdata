import { defineConfig } from "unocss"
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons()
  ],
  transformers: [
    transformerVariantGroup()
  ],
  theme: {
    animation: {
      keyframes: {
        'oval': `{
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); width: 100rem; }
          100% { transform: scale(1) rotate(360deg); }
        }`,
        'float-down': `{
          from { transform: translateY(0); }
          to { transform: translateY(3rem); }
        }`,
        'float-up': `{
          from { transform: translateY(0); }
          to { transform: translateY(-3rem); }
        }`
      }
    }
  }
})


