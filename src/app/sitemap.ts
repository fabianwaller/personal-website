import { getBlogPosts } from "@/app/blog/utils";

export const baseUrl = process.env.BASE_URL;

export default async function sitemap() {
  let routes = ["", "/about", "/journey", "/projects", "/contact", "/blog"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  );

  const blogPosts = await getBlogPosts()

  let blogs = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  return [...routes, ...blogs];
}
