// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://cheatsheetcoder.vercel.app', // Replace with your actual site URL
  generateRobotsTxt: true, // Generate a `robots.txt` file to manage crawling
  // Additional options:
  changefreq: 'daily', // How frequently pages are likely to change
  priority: 0.7, // Priority of the URLs in the sitemap (0.0 to 1.0)
  sitemapSize: 5000, // Max entries per sitemap file, helpful for very large sites
  exclude: ['/admin/*', '/user/*'], // URLs to exclude from the sitemap
  // Other advanced options can be added as needed
};
