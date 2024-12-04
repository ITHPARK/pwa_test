import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',  // 자동 업데이트 방식
      manifest: {
        name: '412pwa',  // 앱 이름
        short_name: 'bside412', // 짧은 이름
        description: 'bside412 pwa 적용 테스트',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',  // 앱처럼 실행될 때 전체 화면 표시
        start_url: '/',  // 앱 시작 URL
        icons: [
          {
            src: './icons/test_icon192.png',  // 앱 아이콘
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './icons/test_icon512.png',  // 앱 아이콘
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  
})
