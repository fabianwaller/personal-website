import { ImageResponse } from "next/og";
import { getBlogPosts } from "../utils";
import { notFound } from "next/navigation";
import { useBlogPosts } from "@/provider/BlogPostsContext";

export const runtime = "nodejs";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  // Font
  //   const interSemiBold = fetch(
  //     new URL("./Inter-SemiBold.ttf", import.meta.url),
  //   ).then((res) => res.arrayBuffer());

  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          ...size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {post.metadata.title}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      //   fonts: [
      //     {
      //       name: "Inter",
      //       data: await interSemiBold,
      //       style: "normal",
      //       weight: 400,
      //     },
      //   ],
    },
  );
}
