import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const Sulphur_Point = localFont({
  src: [
    {
      path: "./fonts/Sulphur_Point/SulphurPoint-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Sulphur_Point/SulphurPoint-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Sulphur_Point/SulphurPoint-Bold.ttf",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-sulphur-point",
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
      lang="es"
      className={`${Sulphur_Point.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
