import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FACC15",
};

export const metadata: Metadata = {
  title: "Voracity MC | A Survival RPG Minecraft Server",
  description:
    "Rasakan pengalaman bermain survival dengan sistem RPG yang menyenangkan! Join komunitas kami sekarang! Tersedia Cross-play.",
  keywords: [
    "Minecraft Server",
    "Survival RPG",
    "GeyserMC",
    "Cross-play Minecraft",
    "No Reset Server",
    "AdvancedSkills",
    "Voracity",
    "Minecraft SMP",
    "Minecraft Survival",
    "Survival minecraft",
    "Minecraft Survival Server",
    "Minecraft Survival Multiplayer",
  ],
  openGraph: {
    title: "Voracity MC",
    description:
      "Rasakan pengalaman bermain survival dengan sistem RPG yang menyenangkan! Join komunitasnya sekarang! Tersedia Cross-play.",
    url: "https://voracity.my.id",
    siteName: "Voracity MC",
    images: [
      {
        url: "/metadata_photo.png",
        width: 1200,
        height: 630,
        alt: "Voracity MC Server Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voracity MC | Cross-Play RPG Survival",
    description:
      "Bergabunglah dengan device apapun. Java IP: play.voracity.my.id | Bedrock Port: 19364",
    images: ["/metadata_photo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
