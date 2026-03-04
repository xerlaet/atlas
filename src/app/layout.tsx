import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif } from "next/font/google";
import InitialRedirect from "@/components/InitialRedirect";
import SplashScreen from "@/components/SplashScreen";
import GraphUI from "@/components/GraphUI";
import { getGraphData } from "@/lib/notes";
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas",
    description: "Atlas: A 3D Digital Garden",
  },
};

export default async function RootLayout({
  children,
  graph,
}: Readonly<{
  children: React.ReactNode;
  graph: React.ReactNode;
}>) {
  const { notes } = await getGraphData();
  const searchIndex = Object.values(notes).map((n) => ({ title: n.title, slug: n.slug }));

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} antialiased bg-slate-950 text-slate-50 overflow-hidden h-screen w-screen`}
      >
        <SplashScreen />
        <InitialRedirect />
        
        {/* Layer 0: Background Graph */}
        <div className="fixed inset-0 z-0 pointer-events-auto">
          {graph}
        </div>

        {/* Layer 1: Note Panels (children) */}
        <div className="fixed inset-0 z-10 pointer-events-none font-sans">
          {children}
        </div>

        {/* Layer 2: Global UI (Search, Buttons, Controls) */}
        <div className="fixed inset-0 z-20 pointer-events-none">
          <GraphUI searchIndex={searchIndex} />
        </div>
      </body>
    </html>
  );
}
