module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.stickercove.com',
    generateRobotsTxt: true,
    // optional
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.stickercove.com/sitemap-1.xml',
        'https://www.stickercove.com/sitemap-2.xml',
        'https://www.stickercove.com/sitemap-3.xml',
      ],
    },
  }