import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savora | Global Spice Kits",
  description: "Authentic, pre-portioned spice kits for weeknight international dinners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="grid-bg min-h-screen">{children}</body>
    </html>
  );
}
