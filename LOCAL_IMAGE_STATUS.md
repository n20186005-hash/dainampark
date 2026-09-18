# Local image status

The source code currently references the verified Wikimedia Commons originals listed in PHOTO_CREDITS.md. The execution environment used to package this project could not retrieve binary files from Wikimedia into the working filesystem, so the `public/images/` directory is intentionally not filled with fake or AI-generated substitutes.

For a truly local-photo deployment, download the four originals in PHOTO_CREDITS.md and place them in `public/images/`, then replace the four `photos[].src` URLs in `src/pages/index.astro` with the local paths.
