# Local image status

All four on-site photos are now served locally from `public/images/`, so the page no longer depends on
`upload.wikimedia.org` (which is unreachable from some networks and caused empty/broken images).

| Local file | Subject | Author / source | License |
| --- | --- | --- | --- |
| `public/images/dai-nam-quang-truong.jpg` | Quảng trường trung tâm | Xuanphuocle / Wikimedia Commons | CC0 1.0 |
| `public/images/dai-nam-bien-nhan-tao.jpg` | Biển nhân tạo Đại Nam | Liftold / Wikimedia Commons | CC BY-SA 3.0 |
| `public/images/dai-nam-cong-rong-vang.jpg` | Cổng rồng vàng, khu trò chơi | Liftold / Wikimedia Commons | CC BY-SA 3.0 |
| `public/images/dai-nam-voi.jpg` | Voi tại vườn thú | Wikimedia Commons (check the file page for author/licence) | see file page |

Notes:

- The files are the original Commons photographs (re-encoded to width 1600, JPEG q82), not generated substitutes.
- `src/pages/index.astro` references them with root-absolute paths (`/images/...`), and the hero background in
  `src/styles/global.css` uses `/images/dai-nam-quang-truong.jpg`.
- Author and licence are credited in every photo caption and in the "Ghi công ảnh & nguồn tham khảo" section,
  which still links back to the Commons file pages (required by CC BY-SA 3.0).
