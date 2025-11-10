
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.yoloo.co.in',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/admin', '/api'],
      },
    ],
  },
};
