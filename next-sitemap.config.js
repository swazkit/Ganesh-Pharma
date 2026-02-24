/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://pharmastore.com',
    generateRobotsTxt: false, // Using Next.js built-in robots.ts
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/api/*', '/admin/*'],
};
