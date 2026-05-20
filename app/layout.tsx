import { Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: '--font-space-mono'
});

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: '--font-work-sans'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${workSans.variable} font-sans bg-cream text-black`}>
        {children}
      </body>
    </html>
  );
}