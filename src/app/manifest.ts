import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fabian Waller",
    short_name: "Fabian",
    description:
      "21 year old computer science student at Saarland University interested in fullstack development and football player.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
      },
    ],
  };
}
