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
  title: "CodersEra",
  description: "",
  icons: {
    icon:"/logo.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        {/* Video Background */}
        <video
          className="fixed top-0 left-0 w-full h-full object-cover -z-20"
          src="/bg2.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          tabIndex={-1}
        />
        {/* Black Overlay with Blur */}
        {/* <div className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-xs -z-10 pointer-events-none" /> */}
        {/* Overlay Content */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
