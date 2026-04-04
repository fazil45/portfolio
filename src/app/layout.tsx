import type { Metadata } from "next";
import { Geist, Geist_Mono,Cabin_Sketch } from "next/font/google";
import "./globals.css";

const cabin = Cabin_Sketch({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohd Fazil",
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
      className={`${cabin.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
