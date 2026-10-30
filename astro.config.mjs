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
  trailingSlash:'always',
  adapter: cloudflare({configPath:'./wrangler.jsonc'}),
  integrations: site ? [sitemap({filter:url=>!url.endsWith('/404/')&&!url.endsWith('/404')})] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
