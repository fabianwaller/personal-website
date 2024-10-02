import Blog from "@/app/blog/page";
import { BlogPost } from "@/app/blog/utils";
import { BlogPostsProvider } from "@/provider/BlogPostsContext";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

const blogPostsMock: BlogPost[] = [
  {
    metadata: {
      title: "Title",
      publishedAt: "2024-10-02",
      summary: "summary",
      image: "",
    },
    slug: "slug",
    content: "content",
  },
  {
    metadata: {
      title: "Title",
      publishedAt: "2024-10-02",
      summary: "summary",
      image: "",
    },
    slug: "slug",
    content: "content",
  },
];

describe("Blog", () => {
  it("renders blog page unchanged", () => {
    const component = render(
      <BlogPostsProvider blogPosts={blogPostsMock}>
        <Blog />
      </BlogPostsProvider>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
