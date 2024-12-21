/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://zhangmengjia.vercel.app/",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  // changefreq: "weekly",
  // ...other options
};
