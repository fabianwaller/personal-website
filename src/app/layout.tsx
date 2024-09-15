import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "@/styles/globals.css"
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { CommandMenuProvider } from "@/provider/CommandMenuContext";
import { Suspense } from "react";
import { CommandMenu } from "@/components/CommandMenu";
import Footer from "@/components/Footer";

const fontSans = Poppins({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["sans-serif"],
  // display: "swap",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={cn(
          "box-border min-h-screen bg-background font-sans antialiased text-text-normal",
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
            <Suspense>
              <CommandMenu />
            </Suspense>
            <Header />
            <main className="flex flex-col items-center justify-between pt-header">
              {children}
            </main>
            <Footer />
          </CommandMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
