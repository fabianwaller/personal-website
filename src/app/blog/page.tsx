import BlogPosts from "@/components/BlogPosts";
import Section from "@/components/Section";
import XStack from "@/components/XStack";

const Blog: React.FC = () => {
  return (
    <Section
      name="blog"
      title="Personal Blog"
      subtitle="insight in my thoughts"
    >
      <XStack>
        <p>
          Here you&apos;ll find all my public thoughts, notes, learnings and
          experiences. I share whatever I want, ranging from programming to
          math, over books and podcasts and much more. Scroll down to check them
          out!
        </p>
        <BlogPosts />
      </XStack>
    </Section>
  );
};

export default Blog;
