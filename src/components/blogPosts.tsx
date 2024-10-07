"use client";

import { BlogPost } from "@/app/blog/utils";
import Link from "next/link";
import VStack from "./VStack";
import { useState } from "react";
import { Card, CardHoverEffect } from "./card-hover-effect";
import { useBlogPosts } from "@/provider/BlogPostsContext";
import { CardContent, CardDescription } from "./ui/card";

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
            <CardContent>
              <h3>{post.metadata.title}</h3>
              <CardDescription>{post.metadata.summary}</CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </VStack>
  );
};

export default BlogPosts;
