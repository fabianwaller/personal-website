import {getSortedPostsData} from '../lib/posts';
const EXTERNAL_DATA_URL = 'https://www.fabianwaller.de/blog';

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.fabianwaller.de</loc>
     </url>
     <url>
       <loc>https://www.fabianwaller.de/about</loc>
     </url>
     <url>
       <loc>https://www.fabianwaller.de/journey</loc>
     </url>
     <url>
       <loc>https://www.fabianwaller.de/projects</loc>
     </url>
     <url>
       <loc>https://www.fabianwaller.de/newsletter</loc>
     </url>
     <url>
       <loc>https://www.fabianwaller.de/contact</loc>
     </url>
     ${posts
            .map(({id, date}) => {
                return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
           <lastmod>${`${date}`}</lastmod>
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

export async function getServerSideProps({res}) {
    const posts = getSortedPostsData();
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