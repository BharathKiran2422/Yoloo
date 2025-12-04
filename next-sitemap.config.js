
module.exports = {
  siteUrl: 'https://www.yoloo.co.in',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/api'] }
    ]
  }
};
