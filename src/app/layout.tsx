import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vk Dev Studio - Innovative Solutions for Web and Mobile Development",
  description: "Vk Dev Studio is a leading development studio, specializing in creating cutting-edge technical solutions for web and mobile applications. Explore our expertise and elevate your digital presence.",
  keywords: ["development studio", "tech solutions", "web development", "mobile development", "innovative solutions", "software engineering", "digital transformation"],
  author: "Vk Dev Studio",
  image: "./logo.jpg",  
  language: "en",
  icons:"./logo.jpg",
  charset: "UTF-8",
  robots: "index, follow",
  og: {
    type: "website",
    title: "Vk Dev Studio - Innovative Solutions for Web and Mobile Development",
    description: "Vk Dev Studio is a leading development studio, specializing in creating cutting-edge technical solutions for web and mobile applications. Explore our expertise and elevate your digital presence.",
    image: "./logo.jpg",  
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}>{children}</body>
    </html>
  );
}
