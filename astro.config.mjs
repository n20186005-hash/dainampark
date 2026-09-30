import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Cấu hình domain duy nhất của toàn dự án. Để trống vẫn build bình thường.
// Đã đặt thành https://dainampark.com để canonical / Open Graph / sitemap được sinh ra.
const SITE = 'https://dainampark.com';
const site = SITE || undefined;

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
