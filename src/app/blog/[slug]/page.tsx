import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
const baseUrl = "localhost:3000";
import { CustomMDX } from "@/components/mdx";
import Section from "@/components/Section";
import { Metadata } from "next/types";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const generateMetadata = ({ params }) => {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  // const ogImage = image
  //   ? image
  //   : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    // openGraph: {
    //   title,
    //   description,
    //   type: "article",
    //   publishedTime,
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   images: [
    //     {
    //       url: ogImage,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images: [ogImage],
    // },
  };
};

export default function BlogEntry({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Section
      name={"blog"}
      title={post.metadata.title}
      subtitle={post.metadata.summary}
      headerAlign="left"
      headerClassName="mb-4"
    >
      {/* <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      /> */}
      <article className="prose prose-custom">
        <CustomMDX source={post.content} />
      </article>
    </Section>
  );
}
