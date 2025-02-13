import { baseUrl } from "@/app/sitemap";
import { BlogPost, getBlogPosts } from "@/app/blog/utils";
import { NextResponse } from "next/server";
import { escapeXml } from "@/lib/escape";

const RssItem = (post: BlogPost) => (
  `<item>
        <title>${post.metadata.title}</title>
        <description>${post.metadata.summary || ""}</description>
        <link>${baseUrl}/blog/${post.slug}</link>
        <pubDate>${new Date(post.metadata.publishedAt,).toUTCString()}</pubDate>
        <content>${escapeXml(post.content)}</content>
   </item>`
)

export async function GET() {
  let allBlogs = getBlogPosts();

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map((post) => RssItem(post))
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Fabian Waller</title>
        <link>${baseUrl}</link>
        <description>This is my personal blog as RSS feed</description>
        <language>en</language>
        <copyright>Fabian Waller</copyright>

        ${itemsXml}
    </channel>
  </rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
