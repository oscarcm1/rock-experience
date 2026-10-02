import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ROCK EXPERIENCE | Vive algo diferente",
  description:
    "Descubre experiencias creadas para conectar marcas, tecnología y personas.",
  openGraph: {
    title: "ROCK EXPERIENCE | Vive algo diferente",
    description:
      "Descubre experiencias creadas para conectar marcas, tecnología y personas.",
    type: "website",
    images: [
      {
        url: "images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ROCK EXPERIENCE",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
