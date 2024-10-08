import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/header";
import { CommandMenuProvider } from "@/provider/CommandMenuContext";
import { Suspense } from "react";
import { CommandMenu } from "@/components/CommandMenu";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { calculateAge } from "./page";
import { getBlogPosts } from "./blog/utils";
import { BlogPostsProvider } from "@/provider/BlogPostsContext";
import { Metadata } from "next/types";

const fontSans = Poppins({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabian Waller",
  description: `${calculateAge()} year old computer science student at
            Saarland University interested in fullstack development and football
            player.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogPosts = getBlogPosts();
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body
        className={cn(
          "box-border min-h-screen max-w-full overflow-x-hidden bg-background font-sans tracking-normal text-text-normal antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommandMenuProvider>
            <BlogPostsProvider blogPosts={blogPosts}>
              <Suspense>
                <CommandMenu />
              </Suspense>
              <Header />
              <main className="flex flex-col items-center justify-between pt-header">
                {children}
              </main>
              <Toaster />
              <Footer />
            </BlogPostsProvider>
          </CommandMenuProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
