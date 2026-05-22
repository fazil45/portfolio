import type { Metadata } from "next";
import {  Iceland } from "next/font/google";
import "./globals.css";

const iceland = Iceland({
  weight:"400",
  variable: "--font-iceland-sans"
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
      className={`${iceland.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
