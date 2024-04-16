// pages/api/sitemap.js

import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { join } from 'path';

export default async (req, res) => {
    const sitemap = new SitemapStream({
        hostname: 'https://www.gopeak.io', // Replace with your website's URL
    });

    // Add static and dynamic routes to the sitemap
    sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 }); // Example: Home page

    // Add more static routes here

    // Add dynamic routes (you may fetch them from an API or database)
    const dynamicRoutes = ['/blog/post-1', '/blog/post-2']; // Example dynamic routes
    dynamicRoutes.forEach((route) => {
        sitemap.write({ url: route, changefreq: 'weekly', priority: 0.7 });
    });

    sitemap.end();

    // Set the response headers
    res.setHeader('content-type', 'application/xml');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');

    // Pipe the sitemap data to the response
    const sitemapXml = await streamToPromise(sitemap);
    res.status(200).send(sitemapXml);
};
