import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub 저장소 이름과 정확히 일치해야 합니다 (앞뒤로 슬래시 / 필수)
  base: '/srt-people/', 
})