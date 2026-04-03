import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Firecrawl",
  description: "A Firecrawl template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={cn("min-h-screen bg-background font-sans antialiased")}
      >
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
