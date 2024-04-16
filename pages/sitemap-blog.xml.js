const EXTERNAL_DATA_URL = 'https://www.gopeak.io';
const SOURCE_URL = 'https://blog.gopeak.io/wp-json/wp/v2/posts';

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     ${posts
        .map(({ slug,modified }) => {
            return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/blog/${slug}`}</loc>
           <lastmod>${modified.slice(0,10)}</lastmod>
            <priority>1.00</priority>
       </url>
     `;
        })
        .join('')}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const request = await fetch(SOURCE_URL);
    const posts = await request.json();

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;