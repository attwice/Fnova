/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemap(ctx, [
    {
      loc: 'https://www.stickercove.com',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/custom-sticker',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/products/die-cut-stickers',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/upload-sticker',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/cart',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/checkout',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/success',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/FAQ',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/help',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/status',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/terms-of-service',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/privacy-policy',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: 'https://www.stickercove.com/refund-policy',
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ])
}

// Default export to prevent next.js errors
export default () => {}