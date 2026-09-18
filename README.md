# Khu du lịch Đại Nam — Astro site

Trang cẩm nang một trang bằng tiếng Việt, thiết kế riêng theo ngôn ngữ thị giác xanh ngọc + vàng của quần thể Đại Nam.

## Công nghệ

- Astro 7.3.3
- Tailwind CSS 4.3.3 (Vite plugin)
- TypeScript 6.0.3 (nằm trong peer range của `@astrojs/check` 0.9.10)
- `@astrojs/cloudflare` 14.3.2 + Wrangler 4.134.0
- pnpm 12.4.2
- Node.js 24.21.0 LTS

## Chạy local

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm dev
```

## Cấu hình tên miền

Tên miền chỉ cấu hình tại **một chỗ** trong `astro.config.mjs`:

```js
const SITE = '';
```

Để trống vẫn build bình thường. Khi có domain, điền URL tuyệt đối vào `SITE`; canonical, Open Graph, JSON-LD và sitemap sẽ tự dùng cấu hình đó. `@astrojs/sitemap` chỉ được kích hoạt khi `SITE` có giá trị.

## Cloudflare Workers

`wrangler.jsonc` dùng entrypoint thống nhất `@astrojs/cloudflare/entrypoints/server` của adapter Astro 7 và khai báo assets cho Cloudflare Workers. Sau khi đăng nhập Cloudflare:

```bash
pnpm deploy
```

## GA4 và cookie

GA4: `G-HXM22WWPKP`. Script Google Analytics chỉ được nạp sau khi khách đồng ý cookie đo lường.

## Ảnh

Trang dùng ảnh thực tế từ Wikimedia Commons qua URL ảnh gốc/thumbnail ổn định, kèm ghi công trên trang và trong `PHOTO_CREDITS.md`. Do môi trường đóng gói hiện tại không cho phép tải binary từ Wikimedia vào filesystem, ảnh được giữ ở dạng URL ngoài thay vì giả lập bằng ảnh sinh. Logo và favicon là tài nguyên local.
