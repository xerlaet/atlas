import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif } from "next/font/google";
import InitialRedirect from "@/components/InitialRedirect";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: "Atlas",
  description: "Atlas: A 3D Digital Garden",
  openGraph: {
    title: "Atlas",
    description: "Atlas: A 3D Digital Garden",
    images: ["/opengraph-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas",
    description: "Atlas: A 3D Digital Garden",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
  graph,
}: Readonly<{
  children: React.ReactNode;
  graph: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} antialiased bg-slate-950 text-slate-50 overflow-hidden h-screen w-screen`}
      >
        <SplashScreen />
        <InitialRedirect />
        <div className="fixed inset-0 z-0 pointer-events-auto">
          {graph}
        </div>
        <div className="relative z-10 h-full w-full pointer-events-none font-sans">
          {children}
        </div>
      </body>
    </html>
  );
}
