import { ImageResponse } from "next/og";
import { getBlogPosts } from "../utils";
import { notFound } from "next/navigation";

export const runtime = "nodejs";

export const alt = "Fabian's Blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const Logo = () => (
  <svg
    className="logo"
    width="156"
    height="148"
    viewBox="0 0 78 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="b br"
      d="M43.1746 30.0684L68.5683 47.8492V47.8492C58.7482 61.8738 39.4183 65.2822 25.3937 55.4621V55.4621L43.1746 30.0684Z"
      fill="#34907B"
    />
    <path
      className="b bl"
      d="M13.1066 46.8583C17.8582 40.0722 27.2114 38.423 33.9975 43.1747V43.1747L25.3938 55.462L13.1066 46.8583V46.8583Z"
      fill="#34907B"
    />
    <path
      className="t tl"
      d="M33.9973 43.1746L8.6036 25.3937V25.3937C18.4237 11.3691 37.7536 7.96074 51.7782 17.7808V17.7808L33.9973 43.1746Z"
      fill="#7ED7C1"
    />
    <path
      className="t tr"
      d="M64.0656 26.3848C59.3139 33.1709 49.9607 34.8201 43.1746 30.0685V30.0685L51.7783 17.7812L64.0656 26.3848V26.3848Z"
      fill="#7ED7C1"
    />
  </svg>
);

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
      <div
        style={{
          ...size,
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 0,
          lineHeight: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <Logo />
          <span style={{ fontSize: 50 }}>Fabian</span>
        </div>
        <h1 style={{ fontSize: 80 }}>{post.metadata.title}</h1>
        <p style={{ fontSize: 50 }}>{post.metadata.summary}</p>
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
