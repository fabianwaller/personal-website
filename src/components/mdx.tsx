import Link from "next/link";
import Image from "next/image";
import {
  MDXRemote,
  MDXRemoteProps,
  MDXRemoteSerializeResult,
} from "next-mdx-remote/rsc";
import React from "react";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypePrettyCode from "rehype-pretty-code";
import CopyButton from "./anchorHeading";
import HStack from "./HStack";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

// function Code({ children, ...props }) {
//   return <StyledCode {...props}>{children}</StyledCode>;
// }

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      <HStack className="group relative gap-x-2 hover:-left-8">
        <CopyButton href={`#${slug}`} />
        {children}
      </HStack>,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  p: ({ children }) => <p className="leading-relaxed">{children}</p>,
  Image: RoundedImage,
  a: CustomLink,
  // code: Code,
  Table,
};

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

/** @type {import('rehype-pretty-code').Options} */
const options = {
  keepBackground: false,
  theme: {
    dark: "github-dark-default",
    light: "github-light-default",
  },
};

export function CustomMDX({ mdxSource }: Props) {
  const props: MDXRemoteProps = {
    source: mdxSource,
    components: components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkToc],
        rehypePlugins: [[rehypePrettyCode, options]],
      },
    },
  };
  return <MDXRemote {...props} />;
}
