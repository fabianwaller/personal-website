import { BlogPost, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";
import VStack from "./VStack";
import TypographyH3 from "./ui/TypographyH3";

const sortByDate = (a: BlogPost, b: BlogPost) => {
  if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
    return -1;
  }
  return 1;
};

const BlogPosts: React.FC = () => {
  let posts: BlogPost[] = getBlogPosts();

  return (
    <VStack className="items-stretch">
      {posts.sort(sortByDate).map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div className="relative -left-4 w-full-plus items-start rounded-lg px-4 py-3 hover:bg-card-foreground">
            <TypographyH3 className="article__title">
              {post.metadata.title}
            </TypographyH3>
            <p className="article__text">{post.metadata.summary}</p>
          </div>
        </Link>
      ))}
    </VStack>
  );
};

export default BlogPosts;
