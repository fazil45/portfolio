import type { Metadata } from "next";
import { Ubuntu_Condensed } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const ubuntuCondensed = Ubuntu_Condensed({
  weight: "400",
  subsets: ["latin"],
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
    <html lang="en" className={cn("dark h-full antialiased", ubuntuCondensed)}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <Toaster duration={3000} theme="dark" position="top-center" />
        {children}
      </body>
    </html>
  );
}
