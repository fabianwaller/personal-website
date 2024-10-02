"use client";

import { BlogPost } from "@/app/blog/utils";
import Link from "next/link";
import VStack from "./VStack";
import { useState } from "react";
import {
  Card,
  CardDescription,
  CardHoverEffect,
  CardTitle,
} from "./card-hover-effect";
import { useBlogPosts } from "@/provider/BlogPostsContext";

const sortByDate = (a: BlogPost, b: BlogPost) => {
  if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
    return -1;
  }
  return 1;
};

const BlogPosts = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { blogPosts } = useBlogPosts();

  return (
    <VStack>
      {blogPosts.sort(sortByDate).map((post, index) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="relative block h-full w-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CardHoverEffect active={hoveredIndex === index} />
          <Card>
            <CardTitle>{post.metadata.title}</CardTitle>
            <CardDescription>{post.metadata.summary}</CardDescription>
          </Card>
        </Link>
      ))}
    </VStack>
  );
};

export default BlogPosts;
