import type { Metadata } from "next";
import { Iceland, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-iceland-sans",
});

export const metadata: Metadata = {
  title: "Fazil",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased scroll-smooth",
        inter.variable,
        iceland.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Toaster
          duration={3000}
          theme="system"
          position="top-center"
        />

        {children}
      </body>
    </html>
  );
}