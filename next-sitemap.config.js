
/** @type {import('next-sitemap').IConfig} */

// NOTE: This is a placeholder for dynamic routes.
// In a real-world scenario, you would fetch this data from a CMS or database.
const fetchDynamicRoutes = async () => {
  // Example of fetching dynamic product and category routes
  // Replace this with your actual data fetching logic
  const products = ['product-1', 'product-2']; // Example product slugs
  const categories = ['men', 'women']; // Example category slugs

  const productRoutes = products.map(id => ({
    loc: `/product/${id}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }));

  const categoryRoutes = categories.map(slug => ({
    loc: `/category/${slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.9,
  }));

  return [...productRoutes, ...categoryRoutes];
};


module.exports = {
  siteUrl: 'https://www.yoloo.co.in',
  generateRobotsTxt: true, // Automatically generate robots.txt file
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
    // The sitemap index will be automatically added by next-sitemap
  },
  // The transform function is commented out as it requires a live data source.
  // When you have your product/category API ready, you can uncomment this
  // and implement the fetchDynamicRoutes function to include them in your sitemap.
  // transform: async (config, path) => {
  //   const dynamicRoutes = await fetchDynamicRoutes();
  //   const allRoutes = [...dynamicRoutes];

  //   // Find the right object to modify or return a new one
  //   const route = allRoutes.find(r => r.loc.includes(path));

  //   return {
  //     loc: path, // Default to the path discovered by next-sitemap
  //     changefreq: route ? route.changefreq : 'daily',
  //     priority: route ? route.priority : 0.7,
  //     lastmod: route ? route.lastmod : new Date().toISOString(),
  //   };
  // },
};
