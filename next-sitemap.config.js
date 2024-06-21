// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://cheatsheetcoder.vercel.app', // Replace with your site's URL
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin/*', '/user/*'],
};
